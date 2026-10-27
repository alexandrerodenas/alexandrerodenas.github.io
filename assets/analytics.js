// Mesure d'audience avec GoatCounter : sans cookie, sans données personnelles,
// donc pas de bandeau de consentement nécessaire.
// Pour activer : créer un compte gratuit sur https://www.goatcounter.com,
// puis remplacer la valeur ci-dessous par le code choisi (ex. 'alexandrerodenas').
// Tant que le code est vide, rien n'est chargé ni envoyé.
const GOATCOUNTER_CODE = 'rodenasalexandre';

(() => {
  if (!GOATCOUNTER_CODE) return;

  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;
  document.head.appendChild(s);

  // Chaque clic sur un lien .apk est compté comme un événement « apk/<fichier> »
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href$=".apk"]');
    if (!link || !window.goatcounter?.count) return;
    const file = link.getAttribute('href').split('/').pop();
    window.goatcounter.count({ path: `apk/${file}`, title: `Téléchargement ${file}`, event: true });
  });
})();
