const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateRows: {
				layout: 'auto 1fr auto'
			},
			gridTemplateColumns: {
				header: 'auto 1fr'
			},
			fontFamily: {
				display: '"Inconsolata", monospace',
				montserrat: '"Montserrat", sans-serif'
			}
		}
	},
	plugins: []
};

module.exports = config;
