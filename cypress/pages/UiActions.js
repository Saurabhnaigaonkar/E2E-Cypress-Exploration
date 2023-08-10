// Encapsulating the UI actions for code reusability, and these actions can be used in multiple tests

class UiActions {
    static visitUrl(url) {
        return cy.visit(url);
    }

    static typeText(selector, text) {
        return cy.get(selector).type(text);
    }

    static clickButton(selector) {
        return cy.get(selector).click();
    }

    static check(selector) {
        return cy.get(selector).check();
    }

    static firstClick(selector) {
        return cy.contains(selector).first().click();
    }

    static get(selector) {
        return cy.get(selector);
    }

    static login(username, password){
        return cy.login(username, password);
    }
}

export default UiActions;
