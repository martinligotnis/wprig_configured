'use strict';

module.exports = {
	theme: {
		slug: 'rixsynagouge',
		name: 'Riga Synagouge',
		author: 'Martins Ligotnis'
	},
	dev: {
		browserSync: {
			live: true,
			proxyURL: 'localhost/barenis/rigas sinagoga',
			bypassPort: '8080'
		},
		browserslist: [ // See https://github.com/browserslist/browserslist
			'> 1%',
			'last 2 versions'
		],
		debug: {
			styles: true, // Render verbose CSS for debugging.
			scripts: true // Render verbose JS for debugging.
		}
	},
	export: {
		compress: true
	}
};
