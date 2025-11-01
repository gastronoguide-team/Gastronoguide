import React from 'react';

export default function PolitiqueConfidentialite() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>

      <div className="space-y-6 text-gray-700">
        <section>
          <p className="mb-4">
            <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
          </p>
          <p>
            La présente politique de confidentialité définit et vous informe de la manière dont
            Gastrono'guide utilise et protège les informations que vous nous transmettez, le cas échéant,
            lorsque vous utilisez le présent site accessible à partir de l'URL suivante : gastronoguide.com
            (ci-après le « Site »).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données personnelles est :<br />
            <strong>Gastrono'guide</strong><br />
            [Adresse complète à compléter]<br />
            Email : gastronoguide@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Données collectées</h2>
          <p className="mb-2">Dans le cadre de l'utilisation de notre site, nous collectons les données suivantes :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Données d'identification :</strong> Nom, prénom</li>
            <li><strong>Données de contact :</strong> Adresse email, numéro de téléphone</li>
            <li><strong>Données de réservation :</strong> Date et créneau horaire de réservation, nombre de participants</li>
            <li><strong>Données de paiement :</strong> Les informations bancaires sont traitées directement par notre prestataire de paiement sécurisé (Stripe) conformément aux normes PCI-DSS</li>
            <li><strong>Données de navigation :</strong> Adresse IP, type de navigateur, pages visitées, durée de visite</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Finalités du traitement</h2>
          <p className="mb-2">Vos données personnelles sont collectées pour les finalités suivantes :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gestion de vos réservations et confirmations</li>
            <li>Traitement des paiements</li>
            <li>Communication avec vous concernant votre réservation</li>
            <li>Envoi d'informations relatives à nos services (avec votre consentement)</li>
            <li>Amélioration de nos services</li>
            <li>Respect de nos obligations légales</li>
            <li>Gestion des demandes de contact</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Base légale du traitement</h2>
          <p className="mb-2">Le traitement de vos données personnelles repose sur :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>L'exécution du contrat :</strong> pour la gestion de vos réservations</li>
            <li><strong>Votre consentement :</strong> pour l'envoi de communications marketing</li>
            <li><strong>L'intérêt légitime :</strong> pour l'amélioration de nos services</li>
            <li><strong>Les obligations légales :</strong> pour la conservation des données comptables</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Destinataires des données</h2>
          <p className="mb-2">Vos données peuvent être transmises à :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Notre personnel habilité</li>
            <li>Nos prestataires de services (hébergement, paiement, emails transactionnels)</li>
            <li>Les autorités compétentes, sur réquisition judiciaire</li>
          </ul>
          <p className="mt-4">
            Nous nous assurons que ces tiers respectent la sécurité et la confidentialité de vos données
            conformément au RGPD.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Durée de conservation</h2>
          <p className="mb-2">Vos données sont conservées pour les durées suivantes :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Données de réservation :</strong> 3 ans après la dernière réservation</li>
            <li><strong>Données comptables :</strong> 10 ans conformément aux obligations légales</li>
            <li><strong>Données de navigation :</strong> 13 mois maximum</li>
            <li><strong>Données marketing :</strong> 3 ans à compter du dernier contact</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Vos droits</h2>
          <p className="mb-2">Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
            <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
            <li><strong>Droit à l'effacement :</strong> supprimer vos données dans certaines conditions</li>
            <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
            <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
            <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
            <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
          </ul>
          <p className="mt-4">
            Pour exercer vos droits, contactez-nous à : <strong>gastronoguide@gmail.com</strong>
          </p>
          <p className="mt-2">
            Vous disposez également du droit d'introduire une réclamation auprès de la CNIL
            (Commission Nationale de l'Informatique et des Libertés).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Sécurité des données</h2>
          <p>
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées
            afin de garantir un niveau de sécurité adapté au risque, notamment contre la destruction,
            la perte, l'altération, la divulgation non autorisée de données à caractère personnel
            transmises, conservées ou traitées d'une autre manière, ou l'accès non autorisé à de telles données.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Cookies</h2>
          <p>
            Le Site utilise des cookies. Pour plus d'informations sur l'utilisation des cookies,
            veuillez consulter notre <a href="/politique-cookies" className="text-[#B6D7A5] hover:underline">Politique de Cookies</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Modification de la politique</h2>
          <p>
            Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment.
            La version en vigueur est celle accessible en ligne. Nous vous informerons de toute modification
            substantielle par email ou via une notification sur le Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité ou le traitement de vos données,
            vous pouvez nous contacter à :<br />
            <strong>Email :</strong> gastronoguide@gmail.com<br />
            <strong>Adresse :</strong> [Adresse postale à compléter]
          </p>
        </section>
      </div>
    </div>
  );
}
