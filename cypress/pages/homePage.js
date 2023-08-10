import weblocators from "./selectors"


export class homePage {


    searchProduct(productName) {

        cy.get(weblocators.search_input).type(productName)
        cy.get(weblocators.click_search).click()

    }
    addToCart() {

        cy.contains(weblocators.addtocart).first().click()
    }

    verifySucessMessage() {
        return cy.get(weblocators.successMessages)
    }

}
