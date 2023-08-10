import weblocators from "./selectors"


export class registerPage {

    openURL() {

        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(FName) {

        cy.get(weblocators.firstName).type(FName)
    }
    enterlastName(LName) {

        cy.get(weblocators.lastName).type(LName)
    }
    enterEmail(email) {

        cy.get(weblocators.email).type(email)
    }
    enterTelephone(phoneNo) {

        cy.get(weblocators.telephone).type(phoneNo)
    }
    enterPassword(password) {

        cy.get(weblocators.password).type(password)
        cy.get(weblocators.passwordConfirm).type(password)

    }
    selectCheckbox() {

        cy.get(weblocators.policyCheckbox).check()
    }
    clickOnContinue() {
        cy.get(weblocators.continue).click()
    }

}