class Utils {

    /**
     * This method will check that a given text is present in the DOM
     * and visible on the UI
     * @param {string} message 
     */
    textShouldBeVisible(message) {
        cy.contains(message).should('be.visible');
    }

    /**
     * This method will check that the given text is not present in the DOM
     * @param {string} message 
     */
    textShouldNotExist(message) {
        cy.contains(message).should('not.exist');
    }

    /**
     * This method checks that the given button is disabled
     * @param {Element} button 
     */
    buttonShouldBeDisabled(button) {
        button.should('have.attr', 'disabled', 'disabled');
    }

    /**
     * This method checks that the given button is enabled
     * @param {Element} button 
     */
    buttonShouldBeEnabled(button) {
        button.should('not.have.attr', 'disabled');
    }
}

export const utils = new Utils();