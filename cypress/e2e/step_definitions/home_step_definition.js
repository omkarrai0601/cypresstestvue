import {
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from '@pages/HomePage'
// import { utils } from '@support/Utils'

// Given("A web browser is at my-project page", () => {
//     cy.visit("/");
// });

When("user navigates to my project page", () => {
    cy.visit("/");
});

Then("the user will be able to see the Turista logo", () => {
    homePage.elements.turistalogo().should('exist');
});

Then("User will be able to see the input box for name", () => {
    homePage.elements.nameInput().should('exist');
});

When("User will be able to enter the name as {string}", (name) => {
    cy.visit("/");
    homePage.typeName(name);
});

Then("User will be able to see the first name as {string}", (name) => {
    homePage.elements.nameInput().should('have.value', name)
});



When("User able to enter the email as {string}", (email) => {
    
    homePage.typeEmail(email);
});

Then("User able to see the email as {string}", (email) => {
    homePage.elements.emailInput().should('have.value', email)
});

When("User able to enter the subject as {string}", (subject) => {
    
    homePage.typeSubject(subject);
});

Then("User able to see the subject as {string}", (subject) => {
    homePage.elements.subjectInput().should('have.value', subject)
});

When("User able to enter the message as {string}", (message) => {
    
    homePage.typeMessage(message);
});

Then("User able to see the message as {string}", (message) => {
    homePage.elements.messageInput().should('have.value', message)
});


