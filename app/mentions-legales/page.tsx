import React from 'react';

export default function MentionsLegales() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>

      <div className="space-y-6 text-gray-700">
        <section>
          <p className="mb-4">
            <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
          </p>
          <p>
            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004
            pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la connaissance
            des utilisateurs et visiteurs du site gastronoguide.com les présentes mentions légales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Éditeur du site</h2>
          <p>
            Le site gastronoguide.com est édité par :<br /><br />
            <strong>Raison sociale :</strong> Gastrono'guide<br />
            <strong>Forme juridique :</strong> [À compléter - ex: SARL, SAS, Auto-entreprise]<br />
            <strong>Capital social :</strong> [À compléter]<br />
            <strong>Siège social :</strong> [Adresse complète à compléter]<br />
            <strong>RCS :</strong> [À compléter]<br />
            <strong>SIRET :</strong> [À compléter]<br />
            <strong>N° TVA intracommunautaire :</strong> [À compléter]<br />
            <strong>Email :</strong> gastronoguide@gmail.com<br />
            <strong>Téléphone :</strong> [À compléter]<br />
            <strong>Directeur de la publication :</strong> [Nom du responsable légal à compléter]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Hébergement du site</h2>
          <p>
            Le site gastronoguide.com est hébergé par :<br /><br />
            <strong>Raison sociale :</strong> Vercel Inc.<br />
            <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
            <strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#B6D7A5] hover:underline">https://vercel.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Contact</h2>
          <p>
            Pour toute question ou demande d'information concernant le site, ou tout signalement
            de contenu ou d'activités illicites, l'utilisateur peut contacter l'éditeur à l'adresse
            suivante :<br /><br />
            <strong>Email :</strong> gastronoguide@gmail.com<br />
            <strong>Téléphone :</strong> [À compléter]<br />
            <strong>Adresse postale :</strong> [Adresse complète à compléter]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Données personnelles</h2>
          <p>
            Le traitement des données personnelles des utilisateurs du site gastronoguide.com est
            conforme au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique
            et Libertés.<br /><br />
            <strong>Responsable du traitement :</strong> Gastrono'guide<br />
            <strong>Finalité du traitement :</strong> Gestion des réservations, communication avec les clients,
            amélioration des services<br />
            <strong>Droits des utilisateurs :</strong> Droit d'accès, de rectification, d'effacement,
            de limitation, d'opposition et de portabilité<br /><br />
            Pour plus d'informations sur le traitement de vos données personnelles, consultez notre{' '}
            <a href="/politique-confidentialite" className="text-[#B6D7A5] hover:underline">
              Politique de Confidentialité
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
          <p>
            Le site gastronoguide.com peut utiliser des cookies pour améliorer l'expérience utilisateur
            et analyser le trafic. Pour plus d'informations, consultez notre{' '}
            <a href="/politique-cookies" className="text-[#B6D7A5] hover:underline">
              Politique de Cookies
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu du site gastronoguide.com (structure, textes, logos, images, vidéos,
            graphismes, etc.) est la propriété exclusive de Gastrono'guide ou fait l'objet d'une
            autorisation d'utilisation.
          </p>
          <p className="mt-4">
            Toute représentation, reproduction, adaptation ou exploitation partielle ou totale des contenus,
            marques déposées et services proposés par le site, par quelque procédé que ce soit, sans
            l'autorisation préalable, expresse et écrite de Gastrono'guide, est strictement interdite
            et pourra donner lieu à des poursuites judiciaires.
          </p>
          <p className="mt-4">
            Les marques et logos figurant sur le site sont des marques déposées de Gastrono'guide ou
            de tiers ayant autorisé leur utilisation. Toute reproduction ou utilisation non autorisée
            de ces marques est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Responsabilité et limitation de garantie</h2>
          <p>
            L'éditeur s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour
            des informations diffusées sur ce site, dont il se réserve le droit de corriger, à tout moment
            et sans préavis, le contenu.
          </p>
          <p className="mt-4">
            Toutefois, Gastrono'guide ne peut garantir l'exactitude, la précision ou l'exhaustivité des
            informations mises à disposition sur ce site.
          </p>
          <p className="mt-4">
            En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
            L'éditeur décline toute responsabilité :
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>En cas d'interruption du site</li>
            <li>En cas de survenance de bugs</li>
            <li>En cas d'inexactitudes ou d'omissions portant sur des informations disponibles sur le site</li>
            <li>En cas de dommages directs ou indirects causés à l'utilisateur, quelle qu'en soit la nature,
            résultant du contenu, de l'accès ou de l'utilisation du site</li>
            <li>En cas d'utilisation anormale ou d'une exploitation illicite du site</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Liens hypertextes</h2>
          <p>
            Le site gastronoguide.com peut contenir des liens hypertextes vers d'autres sites. L'éditeur
            n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>
          <p className="mt-4">
            La mise en place de liens hypertextes vers le site gastronoguide.com nécessite une autorisation
            préalable de l'éditeur. Cette autorisation peut être demandée à gastronoguide@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Droit applicable et juridiction</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut
            d'accord amiable, le litige sera porté devant les tribunaux français compétents.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Conditions générales de vente</h2>
          <p>
            Les réservations effectuées sur le site sont soumises aux{' '}
            <a href="/cgv" className="text-[#B6D7A5] hover:underline">
              Conditions Générales de Vente
            </a>{' '}
            disponibles sur le site et acceptées par le client lors de sa commande.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Accessibilité</h2>
          <p>
            Gastrono'guide s'efforce de rendre son site accessible à tous les utilisateurs, quel que soit
            leur équipement ou leur handicap. Nous nous engageons à respecter les normes d'accessibilité
            et à améliorer continuellement l'accessibilité de notre site.
          </p>
          <p className="mt-4">
            Si vous rencontrez des difficultés d'accessibilité, merci de nous contacter à gastronoguide@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Crédits</h2>
          <p>
            <strong>Conception et réalisation :</strong> Gastrono'guide<br />
            <strong>Photographies :</strong> © Gastrono'guide (sauf mention contraire)<br />
            <strong>Technologies utilisées :</strong> Next.js, React, Tailwind CSS
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Modification des mentions légales</h2>
          <p>
            L'éditeur se réserve le droit de modifier les présentes mentions légales à tout moment.
            Les mentions légales applicables sont celles en ligne au moment de la connexion et de
            l'utilisation du site par l'utilisateur.
          </p>
        </section>
      </div>
    </div>
  );
}
