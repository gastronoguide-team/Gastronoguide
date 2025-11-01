"use client";

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Toujours activé
    analytics: false,
    functional: false,
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Afficher le bandeau après un court délai
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    } else {
      // Charger les préférences sauvegardées
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
        applyCookiePreferences(savedPreferences);
      } catch (e) {
        console.error('Erreur lors du chargement des préférences de cookies', e);
      }
    }
  }, []);

  const applyCookiePreferences = (prefs: typeof preferences) => {
    // Ici, vous pouvez ajouter la logique pour activer/désactiver
    // les scripts de tracking en fonction des préférences

    if (prefs.analytics) {
      // Activer Google Analytics ou autres outils d'analyse
      console.log('Analytics cookies enabled');
      // Exemple: window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
    } else {
      console.log('Analytics cookies disabled');
      // Exemple: window.gtag('consent', 'update', { 'analytics_storage': 'denied' });
    }

    if (prefs.functional) {
      // Activer les cookies fonctionnels
      console.log('Functional cookies enabled');
    } else {
      console.log('Functional cookies disabled');
    }
  };

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      functional: true,
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    applyCookiePreferences(newPreferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      functional: false,
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    applyCookiePreferences(newPreferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    applyCookiePreferences(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleTogglePreference = (key: 'analytics' | 'functional') => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay semi-transparent */}
      <div className="fixed inset-0 bg-black/50 z-40" />

      {/* Bandeau de cookies */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 md:p-8">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-2xl border border-gray-200">
          {!showSettings ? (
            // Vue principale
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Nous utilisons des cookies
                </h2>
                <button
                  onClick={handleRejectAll}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Fermer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser
                le trafic et personnaliser le contenu. En cliquant sur "Tout accepter", vous consentez
                à l'utilisation de tous les cookies. Vous pouvez également personnaliser vos préférences
                ou tout refuser.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-[#B6D7A5] text-black hover:bg-[#B6D7A5]/90 font-semibold py-3 sm:py-4"
                >
                  Tout accepter
                </Button>
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="flex-1 border-gray-300 hover:bg-gray-50 font-semibold py-3 sm:py-4"
                >
                  Tout refuser
                </Button>
                <Button
                  onClick={() => setShowSettings(true)}
                  variant="outline"
                  className="flex-1 border-gray-300 hover:bg-gray-50 font-semibold py-3 sm:py-4"
                >
                  Personnaliser
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                En savoir plus sur notre{' '}
                <a href="/politique-cookies" className="text-[#B6D7A5] hover:underline">
                  politique de cookies
                </a>
                {' '}et notre{' '}
                <a href="/politique-confidentialite" className="text-[#B6D7A5] hover:underline">
                  politique de confidentialité
                </a>
              </p>
            </div>
          ) : (
            // Paramètres détaillés
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Paramètres des cookies
                  </h2>
                  <p className="text-sm text-gray-600">
                    Choisissez les cookies que vous souhaitez autoriser
                  </p>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Retour"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Cookies nécessaires */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Cookies strictement nécessaires</h3>
                    <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium">
                      Toujours activé
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés.
                    Ils permettent la navigation, la sécurité et l'utilisation des fonctionnalités de base.
                  </p>
                </div>

                {/* Cookies d'analyse */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Cookies d'analyse et de performance</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handleTogglePreference('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#B6D7A5]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B6D7A5]"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ces cookies nous permettent de mesurer l'audience du site, d'analyser le trafic et
                    d'améliorer nos services. Les données collectées sont anonymisées.
                  </p>
                </div>

                {/* Cookies fonctionnels */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Cookies fonctionnels</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={() => handleTogglePreference('functional')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#B6D7A5]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B6D7A5]"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ces cookies permettent d'améliorer votre expérience en mémorisant vos préférences
                    et en personnalisant le contenu du site.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-[#B6D7A5] text-black hover:bg-[#B6D7A5]/90 font-semibold py-3"
                >
                  Enregistrer mes préférences
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  variant="outline"
                  className="flex-1 border-gray-300 hover:bg-gray-50 font-semibold py-3"
                >
                  Tout accepter
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
