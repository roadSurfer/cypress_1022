Cypress.Commands.add('recursionLoop', {times: 'optional'}, function (fn, times) {
    if (typeof times === 'undefined') {
        times = 0;
    }

    cy.then(() => {
        const result = fn(++times);
        if (result !== false) {
            cy.recursionLoop(fn, times);
        }
    });
});
