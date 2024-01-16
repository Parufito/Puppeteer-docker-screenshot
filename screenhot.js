const puppeteer = require('puppeteer');

/*Gestió de fitxers. És una xapussa*/

// Aquest directori serà el de dins de la imatge docker
const screenshotPath = '/home/pptruser/screenshots';
const screenshotFile = screenshotPath+'/screenshot.png';

// Comprova si el directori ja existeix
if (!fs.existsSync(screenshotPath)) {
	// Si no existeix, crea el directori
	fs.mkdirSync(screenshotPath, { recursive: true });
	// Estableix els permissos desitjats (per exemple, permisos d'escriptura per a tots)
	fs.chmodSync(screenshotPath, '777');
}

// Si existeix un screenshot previ l'esborra
if (fs.existsSync(screenshotFile)) {
	fs.unlinkSync(screenshotFile);
}

// Variables web definides com a variables d'entorn
const url_web = process.env.URL;
const selected_div = process.env.SELECTED_DIV;
const wait_element= process.env.WAIT_ELEMENT;

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url_web);

	// Espera fins que l'element configurat a wait_element estigui present
	if (wait_element) {
		await page.waitForSelector(wait_element);
	}

	if (selected_div) {
		// Aquest bloc no s'executarà ja que selected_div és buida
		const cardBodyElement = await page.$(selected_div);
		if (cardBodyElement) {
			// Captura de pantalla de l'element configurat a selected_div
			await cardBodyElement.screenshot({ path: `${screenshotFile}` });
		} else {
			console.log('Element no trobat:', selected_div);
		}
	} else {
		// Pagina completa
		//await page.screenshot({ path: `${screenshotFile}`, clip: { x: 0, y: 0, width: 750, height: 400 } });
		await page.screenshot({ path: `${screenshotFile}` });
	}

	await browser.close();
})();