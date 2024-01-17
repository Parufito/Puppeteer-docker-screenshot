# Puppeteer-docker-screenshot
Scripts per a fer un screenshot d'una web o part d'ella a través de la imatge docker de Puppeteer

## Com funciona
Editar el fitxer .sh per configurar les variables

- URL: Adreça a visitar.
- SELECTED_DIV: En cas de voler només un div de la URL especificar, si no ho especifiques, agafarà la pàgina sencera. Deixar buit (entre cometes).
- WAIT_ELEMENT: A vegades has d'esperar a que es carreguin alguns elements. Indicar quin element si necessari i si no deixar buit.