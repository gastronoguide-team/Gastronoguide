import React from 'react';

export default function ConditionsGeneralesVente() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Conditions Générales de Vente</h1>

      <div className="space-y-6 text-gray-700">
        <section>
          <p className="mb-4">
            <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
          </p>
          <p>
            Les présentes conditions générales de vente (CGV) régissent les relations contractuelles
            entre Gastrono'guide et ses clients dans le cadre de la réservation d'expériences gastronomiques.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 1 - Objet</h2>
          <p>
            Les présentes CGV ont pour objet de définir les droits et obligations des parties dans le cadre
            de la vente en ligne de prestations d'expériences gastronomiques proposées par Gastrono'guide
            sur le site gastronoguide.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 2 - Identification du vendeur</h2>
          <p>
            <strong>Raison sociale :</strong> Gastronoguide<br />
            <strong>Forme juridique :</strong> [À compléter]<br />
            <strong>Capital social :</strong> [À compléter]<br />
            <strong>Siège social :</strong> [Adresse complète à compléter]<br />
            <strong>RCS/SIRET :</strong> [À compléter]<br />
            <strong>Email :</strong> gastronoguide@gmail.com<br />
            <strong>Téléphone :</strong> [À compléter]<br />
            <strong>TVA intracommunautaire :</strong> [À compléter]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 3 - Champ d'application</h2>
          <p>
            Les présentes CGV s'appliquent à toutes les réservations effectuées sur le site gastronoguide.com.
            Le fait de procéder à une réservation implique l'acceptation sans réserve par le client des présentes CGV.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 4 - Prestations proposées</h2>
          <p className="mb-2">
            Gastrono'guide propose des expériences gastronomiques comprenant :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Des ateliers culinaires en matinée (09h00 - 11h00) ou en milieu de journée (11h30 - 13h30)</li>
            <li>Une découverte de produits locaux et de techniques gastronomiques</li>
            <li>Une dégustation des préparations réalisées</li>
          </ul>
          <p className="mt-4">
            Les prestations sont décrites avec la plus grande exactitude possible sur le site.
            Les photographies sont non contractuelles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 5 - Tarifs</h2>
          <p className="mb-2">
            Les tarifs sont indiqués en euros, toutes taxes comprises (TTC). Ils s'entendent départ France métropolitaine.
          </p>
          <p className="mb-2">
            <strong>Tarification en vigueur :</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>1 personne : 120€</li>
            <li>2 personnes : 72€ par personne (144€ total)</li>
            <li>3 à 4 personnes : 60€ par personne</li>
            <li>5 à 12 personnes : 55€ par personne</li>
          </ul>
          <p className="mt-4">
            Gastrono'guide se réserve le droit de modifier ses tarifs à tout moment. Les tarifs applicables
            sont ceux en vigueur au moment de la réservation, sous réserve de disponibilité.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 6 - Réservation</h2>
          <p className="mb-2">
            La réservation s'effectue en ligne sur le site gastronoguide.com selon les étapes suivantes :
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Sélection de la date et du créneau horaire</li>
            <li>Choix du nombre de participants</li>
            <li>Saisie des coordonnées (nom, prénom, email, téléphone)</li>
            <li>Validation et paiement en ligne</li>
          </ol>
          <p className="mt-4">
            La capacité d'accueil est limitée à 12 personnes par créneau (6 places le matin, 6 places le midi).
            Les réservations sont acceptées dans la limite des places disponibles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 7 - Paiement</h2>
          <p className="mb-2">
            Le paiement s'effectue en ligne de manière sécurisée via notre prestataire Stripe.
          </p>
          <p className="mb-2">
            Les moyens de paiement acceptés sont :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Carte bancaire (Visa, Mastercard, American Express)</li>
            <li>Autres moyens de paiement acceptés par Stripe</li>
          </ul>
          <p className="mt-4">
            Le paiement est exigible en totalité au moment de la réservation. La prestation ne sera considérée
            comme confirmée qu'après réception du paiement intégral.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 8 - Confirmation de réservation</h2>
          <p>
            Une confirmation de réservation est envoyée par email au client après validation du paiement.
            Cette confirmation comporte :
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Le numéro de réservation</li>
            <li>La date et l'horaire de la prestation</li>
            <li>Le nombre de participants</li>
            <li>Le montant total payé</li>
            <li>Les informations pratiques</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 9 - Droit de rétractation</h2>
          <p className="mb-4">
            Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut
            être exercé pour les prestations de services d'hébergement, autres que d'hébergement résidentiel,
            de services de transport de biens, de locations de voitures, de restauration ou d'activités de loisirs
            qui doivent être fournies à une date ou à une période déterminée.
          </p>
          <p>
            <strong>En conséquence, aucune rétractation ne pourra être exercée après la confirmation
            de la réservation.</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 10 - Annulation et modification</h2>

          <h3 className="text-xl font-semibold mb-3 mt-4">10.1 - Annulation par le client</h3>
          <p className="mb-2">
            Toute demande d'annulation doit être notifiée par email à gastronoguide@gmail.com.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Plus de 7 jours avant la prestation :</strong> remboursement intégral</li>
            <li><strong>Entre 7 et 48 heures avant la prestation :</strong> remboursement de 50%</li>
            <li><strong>Moins de 48 heures avant la prestation :</strong> aucun remboursement</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">10.2 - Modification par le client</h3>
          <p>
            Une modification de date est possible sous réserve de disponibilité et dans les mêmes conditions
            que l'annulation. Une seule modification gratuite est autorisée si effectuée plus de 7 jours
            avant la prestation.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">10.3 - Annulation par Gastrono'guide</h3>
          <p>
            Gastrono'guide se réserve le droit d'annuler une prestation en cas de force majeure ou de circonstances
            exceptionnelles. Dans ce cas, le client sera remboursé intégralement ou une date de report lui sera proposée.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 11 - Obligations du client</h2>
          <p className="mb-2">Le client s'engage à :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Se présenter à l'heure au lieu de la prestation</li>
            <li>Respecter les consignes données par l'animateur</li>
            <li>Signaler toute allergie ou régime alimentaire particulier au préalable</li>
            <li>Adopter un comportement respectueux envers le personnel et les autres participants</li>
          </ul>
          <p className="mt-4">
            Tout comportement inapproprié pourra entraîner l'exclusion immédiate sans remboursement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 12 - Responsabilité</h2>
          <p className="mb-4">
            Gastrono'guide s'engage à mettre en œuvre tous les moyens nécessaires pour assurer la bonne
            exécution de la prestation. Notre responsabilité ne saurait être engagée en cas de force majeure
            ou de fait indépendant de notre volonté.
          </p>
          <p>
            Le client est responsable des dommages qu'il pourrait causer aux locaux, au matériel ou à autrui
            pendant la durée de la prestation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 13 - Données personnelles</h2>
          <p>
            Les données personnelles collectées font l'objet d'un traitement informatique conformément au RGPD.
            Pour plus d'informations, consultez notre{' '}
            <a href="/politique-confidentialite" className="text-[#B6D7A5] hover:underline">
              Politique de Confidentialité
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 14 - Propriété intellectuelle</h2>
          <p>
            L'ensemble des éléments du site gastronoguide.com (textes, images, logos, vidéos, etc.) sont
            protégés par le droit de la propriété intellectuelle. Toute reproduction, représentation,
            modification ou adaptation sans autorisation expresse est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 15 - Réclamations</h2>
          <p>
            Toute réclamation doit être adressée à gastronoguide@gmail.com dans un délai de 7 jours
            suivant la prestation. Nous nous engageons à traiter toute réclamation dans les meilleurs délais.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 16 - Médiation</h2>
          <p className="mb-4">
            Conformément à l'article L.612-1 du Code de la consommation, nous proposons un dispositif
            de médiation de la consommation. L'entité de médiation retenue est :
          </p>
          <p>
            <strong>[Nom du médiateur à compléter]</strong><br />
            [Adresse à compléter]<br />
            [Site web à compléter]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 17 - Droit applicable et juridiction</h2>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige et à défaut d'accord amiable,
            le litige sera porté devant les tribunaux compétents dans le ressort du siège social de Gastrono'guide.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 18 - Modification des CGV</h2>
          <p>
            Gastrono'guide se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables
            sont celles en vigueur à la date de la réservation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 19 - Contact</h2>
          <p>
            Pour toute question relative aux présentes CGV, vous pouvez nous contacter :<br />
            <strong>Email :</strong> gastronoguide@gmail.com<br />
            <strong>Téléphone :</strong> [À compléter]<br />
            <strong>Adresse :</strong> [Adresse postale à compléter]
          </p>
        </section>
      </div>
    </div>
  );
}
