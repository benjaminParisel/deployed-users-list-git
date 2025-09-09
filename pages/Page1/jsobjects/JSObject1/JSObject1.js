export default {
	initLang() { 	
		console.log('initLang');
		{{i18next.init({
			debug: true, //
			resources: {
				en: {
					translation: {
						welcome: "Welcome to Appsmith!",
						hello: "Hello {{name}}!"
					}
				},
				fr: {
					translation: {
						welcome: "Bienvenue sur Appsmith !",
						hello: "Bonjour {{name}} !"
					}
				},
				es: {
					translation: {
						welcome: "¡Bienvenido a Appsmith!",
						hello: "¡Hola {{name}}!"
					}
				}
			},
			lng: "en",
			fallbackLng: "en",
			interpolation: {
				escapeValue: false 
			}
		});		
		 }}
	}
}