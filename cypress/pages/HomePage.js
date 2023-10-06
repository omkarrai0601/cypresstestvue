class HomePage {
    elements = {
        usernameInput: () => cy.get("#username"),
        passwordInput: () => cy.get("#password"),
        loginBtn: () => cy.get("#login"),
        forgotPasswordLink: () => cy.get(".forgot-password-btn"),
        usernameValidationTxt: () => cy.contains("Username is required"),
        passwordValidationTxt: () => cy.contains("Password is required"),
        errorMessage: () => cy.get("#fatal .red-text"),
        turistalogo: () => cy.get(".brand-logo"),
        nameInput: () => cy.get("#first-name"),
        emailInput: () => cy.get("#first-email"),
        subjectInput: () => cy.get("#subject"),
        messageInput: () => cy.get("#description"),
        
    };

    typeName(username) {
        this.elements.nameInput().clear().type(username);
    }

    typeEmail(email){
        this.elements.emailInput().clear().type(email)
    }

    typeSubject(subject){
        this.elements.subjectInput().clear().type(subject)
    }

    typeMessage(message){
        this.elements.messageInput().clear().type(message)
    }

    typePassword(password) {
        this.elements.passwordInput().clear().type(password);
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }

    submitLogin(username, password) {
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.loginBtn().click();
    }

}

export const homePage = new HomePage();
