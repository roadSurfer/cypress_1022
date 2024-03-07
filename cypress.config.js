const { defineConfig } = require('cypress')

module.exports = defineConfig({
	numTestsKeptInMemory: 2,
	experimentalMemoryManagement: true,
	defaultCommandTimeout: 10000,
	pageLoadTimeout: 90000,

	e2e: {
		setupNodeEvents(on, config) {
			on('task', {
				log(message) {
					console.log(message)

					return null
				}
			})
		},
		experimentalRunAllSpecs: true
	},
})
