import UiActions from "./UiActions";
import weblocators from "./selectors";

export class HomePage {

    //creating the instace of UiActions to making it accessible to all methods.
    constructor() {
        this.uiActions = UiActions;
    }
    performLogin(username, password) {
        this.uiActions.login(username, password)
    }

    searchProduct(productName) {
        this.uiActions.typeText(weblocators.search_input, productName);
        this.uiActions.clickButton(weblocators.click_search);
    }

    addToCart() {
        this.uiActions.firstClick(weblocators.addtocart);
    }

    verifySuccessMessage() {
        return this.uiActions.get(weblocators.successMessages);
    }
}
