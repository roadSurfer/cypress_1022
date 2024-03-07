describe('Run for 3 minutes ', () => {
	it('Basic assertion', () => {
		const loops = 3 * 60 ; // seconds
		const sleep = 1000 ; // millis

		cy.task("log", "Will run until " + loops + " loops have happened")

		cy.recursionLoop(times => {
			cy.task("log", "Iteration: " + times)
			cy.wait(sleep);
			return times < loops;
		});
	})
})
