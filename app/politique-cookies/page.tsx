import React from 'react';

export default function PolitiqueCookies() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Politique de Cookies</h1>

      <div className="space-y-6 text-gray-700">
        <section>
          <p className="mb-4">
            <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
          </p>
          <p>
            La présente politique de cookies vise à vous informer sur l'utilisation des cookies et
            technologies similaires sur le site gastronoguide.com et sur vos droits en matière de contrôle
            de ces technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette,
            smartphone, etc.) lors de la visite d'un site web. Il permet au site de reconnaître votre
            terminal lors de vos visites ultérieures.
          </p>
          <p className="mt-4">
            Les cookies ont différentes fonctions : ils peuvent permettre de mémoriser vos préférences,
            de mesurer la fréquentation du site, d'adapter l'affichage du site à votre terminal, ou encore
            de vous proposer des contenus personnalisés.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Quels cookies utilisons-nous ?</h2>

          <h3 className="text-xl font-semibold mb-3 mt-6">2.1 - Cookies strictement nécessaires</h3>
          <p className="mb-2">
            Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés.
            Ils ne sont déposés qu'en réponse à des actions que vous effectuez, comme la gestion de
            vos préférences en matière de cookies.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="font-semibold mb-2">Exemples :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cookie de session pour maintenir votre connexion</li>
              <li>Cookie de consentement pour mémoriser vos choix en matière de cookies</li>
              <li>Cookies de sécurité pour protéger contre les activités malveillantes</li>
            </ul>
            <p className="mt-3 text-sm">
              <strong>Durée de conservation :</strong> Session ou 13 mois maximum
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3 mt-6">2.2 - Cookies de performance et d'analyse</h3>
          <p className="mb-2">
            Ces cookies nous permettent de comptabiliser les visites et les sources de trafic afin de
            mesurer et d'améliorer les performances de notre site. Ils nous aident à savoir quelles pages
            sont les plus et les moins populaires et à comprendre comment les visiteurs naviguent sur le site.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="font-semibold mb-2">Services utilisés :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Google Analytics (si applicable)</li>
              <li>Vercel Analytics</li>
            </ul>
            <p className="mt-3 text-sm">
              <strong>Durée de conservation :</strong> 13 mois maximum
            </p>
            <p className="mt-2 text-sm">
              <strong>Finalité :</strong> Mesure d'audience, amélioration de l'expérience utilisateur
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3 mt-6">2.3 - Cookies fonctionnels</h3>
          <p className="mb-2">
            Ces cookies permettent d'améliorer votre expérience en mémorisant vos préférences
            (langue, région, etc.) et en personnalisant le contenu du site.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="font-semibold mb-2">Exemples :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Mémorisation de vos préférences d'affichage</li>
              <li>Sauvegarde de votre panier de réservation</li>
            </ul>
            <p className="mt-3 text-sm">
              <strong>Durée de conservation :</strong> 13 mois maximum
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3 mt-6">2.4 - Cookies de paiement</h3>
          <p className="mb-2">
            Notre prestataire de paiement Stripe utilise des cookies pour sécuriser les transactions
            et prévenir la fraude.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="font-semibold mb-2">Service :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Stripe Payment Processing</li>
            </ul>
            <p className="mt-3 text-sm">
              <strong>Finalité :</strong> Traitement sécurisé des paiements, prévention de la fraude
            </p>
            <p className="mt-2 text-sm">
              Pour plus d'informations : <a href="https://stripe.com/fr/privacy" target="_blank" rel="noopener noreferrer" className="text-[#B6D7A5] hover:underline">Politique de confidentialité Stripe</a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Vos choix concernant les cookies</h2>

          <h3 className="text-xl font-semibold mb-3 mt-4">3.1 - Le bandeau de consentement</h3>
          <p>
            Lors de votre première visite sur notre site, un bandeau vous informe de la présence de cookies
            et vous invite à faire un choix. Vous pouvez accepter ou refuser le dépôt de cookies, à l'exception
            des cookies strictement nécessaires qui ne nécessitent pas votre consentement.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">3.2 - Paramétrage de votre navigateur</h3>
          <p className="mb-2">
            Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies au cas par cas
            ou les refuser systématiquement. Voici les liens vers les pages d'aide des principaux navigateurs :
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <strong>Google Chrome :</strong>{' '}
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#B6D7A5] hover:underline">
                Gérer les cookies dans Chrome
              </a>
            </li>
            <li>
              <strong>Mozilla Firefox :</strong>{' '}
              <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-[#B6D7A5] hover:underline">
                Activer et désactiver les cookies
              </a>
            </li>
            <li>
              <strong>Safari :</strong>{' '}
              <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#B6D7A5] hover:underline">
                Gérer les cookies dans Safari
              </a>
            </li>
            <li>
              <strong>Microsoft Edge :</strong>{' '}
              <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#B6D7A5] hover:underline">
                Supprimer les cookies dans Edge
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">3.3 - Opposition aux cookies de mesure d'audience</h3>
          <p className="mb-2">
            Si vous souhaitez vous opposer spécifiquement aux cookies de mesure d'audience :
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>Google Analytics :</strong>{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#B6D7A5] hover:underline">
                Module complémentaire de désactivation
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">3.4 - Conséquences du refus des cookies</h3>
          <p>
            Si vous refusez l'enregistrement de cookies dans votre terminal, ou si vous supprimez ceux
            qui y sont enregistrés, certaines fonctionnalités du site pourront être limitées ou indisponibles.
            Nous déclinons toute responsabilité pour les conséquences liées au fonctionnement dégradé
            du site résultant de votre refus de cookies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Cookies tiers</h2>
          <p>
            Certains cookies sont déposés par des services tiers pour lesquels Gastrono'guide a contracté.
            Ces tiers peuvent collecter des informations sur votre navigation sur différents sites, y compris
            le nôtre. Nous nous assurons que ces tiers respectent la réglementation en vigueur.
          </p>
          <p className="mt-4">
            <strong>Principaux services tiers utilisés :</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>Stripe :</strong> traitement des paiements -{' '}
              <a href="https://stripe.com/fr/privacy" target="_blank" rel="noopener noreferrer" className="text-[#B6D7A5] hover:underline">
                Politique de confidentialité
              </a>
            </li>
            <li>
              <strong>Vercel :</strong> hébergement et analytics -{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#B6D7A5] hover:underline">
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Durée de conservation des cookies</h2>
          <p>
            Conformément aux recommandations de la CNIL, la durée de conservation des cookies est limitée
            à 13 mois maximum après leur dépôt sur votre terminal. À l'expiration de ce délai, votre
            consentement sera à nouveau sollicité.
          </p>
          <p className="mt-4">
            Les cookies de session sont supprimés dès la fermeture de votre navigateur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Cookies et données personnelles</h2>
          <p>
            Les cookies peuvent collecter des données à caractère personnel. Le traitement de ces données
            est conforme au RGPD et à notre{' '}
            <a href="/politique-confidentialite" className="text-[#B6D7A5] hover:underline">
              Politique de Confidentialité
            </a>.
          </p>
          <p className="mt-4">
            Vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Droit d'accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d'opposition</li>
            <li>Droit à la portabilité</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Modification de la politique de cookies</h2>
          <p>
            Nous nous réservons le droit de modifier la présente politique de cookies à tout moment
            pour nous conformer à la réglementation en vigueur ou pour améliorer nos services.
            La version en vigueur est celle accessible en ligne sur notre site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Plus d'informations sur les cookies</h2>
          <p>
            Pour en savoir plus sur les cookies et leur utilisation, vous pouvez consulter :
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              Le site de la CNIL :{' '}
              <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noopener noreferrer" className="text-[#B6D7A5] hover:underline">
                https://www.cnil.fr/fr/cookies-et-autres-traceurs
              </a>
            </li>
            <li>
              Le site de l'Union européenne :{' '}
              <a href="https://europa.eu/youreurope/citizens/consumers/internet-telecoms/data-protection-online-privacy/index_fr.htm" target="_blank" rel="noopener noreferrer" className="text-[#B6D7A5] hover:underline">
                Protection des données en ligne
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
          <p>
            Pour toute question concernant cette politique de cookies, vous pouvez nous contacter à :<br /><br />
            <strong>Email :</strong> gastronoguide@gmail.com<br />
            <strong>Adresse :</strong> [Adresse postale à compléter]
          </p>
        </section>
      </div>
    </div>
  );
}
