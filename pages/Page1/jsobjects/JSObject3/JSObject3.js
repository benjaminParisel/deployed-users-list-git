export default {
	async changeLang(lang) {
		{{ i18next.changeLanguage(lang) }}
		return lang;
		// await i18next.changeLanguage(lang); // resolves to a function, but we don't return it
		// 
		// //await storeValue("lang", lang);     // persist the choice		
		// return true;                        // return a primitive (or `lang`)
	}
}