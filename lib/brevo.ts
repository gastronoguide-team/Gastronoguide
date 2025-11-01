import * as brevo from "@getbrevo/brevo";

// Configuration du client API Transactional
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY || ""
);

// Configuration du client SMS
const smsApiInstance = new brevo.TransactionalSMSApi();
smsApiInstance.setApiKey(
  brevo.TransactionalSMSApiApiKeys.apiKey,
  process.env.BREVO_API_KEY || ""
);

interface ReservationDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  startTime: string;
  participantsCount: number;
}

/**
 * Envoie un email de confirmation au client
 */
export async function sendConfirmationEmail(details: ReservationDetails) {
  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.subject = "Confirmation de votre réservation - Matinée Gastronomique";
    sendSmtpEmail.to = [
      {
        email: details.email,
        name: `${details.firstName} ${details.lastName}`,
      },
    ];
    sendSmtpEmail.sender = {
      name: "Matinée Gastronomique",
      email: process.env.BREVO_SENDER_EMAIL || "noreply@example.com",
    };

    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #B6D7A5;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .header h1 {
              margin: 0;
              color: #000;
            }
            .content {
              background-color: #f9f9f9;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .info-box {
              background-color: white;
              padding: 20px;
              border-left: 4px solid #B6D7A5;
              margin: 20px 0;
            }
            .info-box strong {
              color: #B6D7A5;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              color: #666;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Réservation Confirmée ✓</h1>
          </div>
          <div class="content">
            <p>Bonjour ${details.firstName} ${details.lastName},</p>

            <p>Nous sommes ravis de confirmer votre réservation pour notre Matinée Gastronomique au Marché Victor Hugo !</p>

            <div class="info-box">
              <p><strong>Date :</strong> ${details.date}</p>
              <p><strong>Horaire :</strong> ${details.startTime}</p>
              <p><strong>Nombre de participants :</strong> ${details.participantsCount} personne${details.participantsCount > 1 ? "s" : ""}</p>
            </div>

            <p>Nous avons hâte de vous accueillir pour cette expérience culinaire unique où passion et saveurs se rencontrent.</p>

            <p><strong>Informations importantes :</strong></p>
            <ul>
              <li>Merci d'arriver 10 minutes avant l'heure de début</li>
              <li>Rendez-vous au Marché Victor Hugo</li>
              <li>En cas d'empêchement, merci de nous prévenir au plus tôt</li>
            </ul>

            <p>Si vous avez des questions, n'hésitez pas à nous contacter.</p>

            <p>À très bientôt,<br>L'équipe Matinée Gastronomique</p>
          </div>
          <div class="footer">
            <p>Cet email a été envoyé suite à votre réservation sur notre site.</p>
          </div>
        </body>
      </html>
    `;

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("✅ Email de confirmation envoyé:", result);
    return result;
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi de l'email:", error);
    throw error;
  }
}

/**
 * Envoie un SMS de notification au propriétaire
 */
export async function sendOwnerSMS(details: ReservationDetails) {
  try {
    const sendTransacSms = new brevo.SendTransacSms();

    sendTransacSms.sender = process.env.BREVO_SMS_SENDER || "GastroGuide";
    sendTransacSms.recipient = process.env.OWNER_PHONE_NUMBER || "";
    sendTransacSms.content = `🎉 Nouvelle réservation !

Client: ${details.firstName} ${details.lastName}
Date: ${details.date}
Heure: ${details.startTime}
Participants: ${details.participantsCount}
Email: ${details.email}
Tel: ${details.phone}`;

    const result = await smsApiInstance.sendTransacSms(sendTransacSms);
    console.log("✅ SMS de notification envoyé:", result);
    return result;
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi du SMS:", error);
    throw error;
  }
}
