import UiActions from "./UiActions";
import weblocators from "./selectors";

export class registerPage {
  openURL() {
    UiActions.visitUrl(Cypress.env('URL'));
  }

  fillPersonalInformation(firstName, lastName, email, phoneNo, password) {
    UiActions.typeText(weblocators.firstName, firstName);
    UiActions.typeText(weblocators.lastName, lastName);
    UiActions.typeText(weblocators.email, email);
    UiActions.typeText(weblocators.telephone, phoneNo);
    UiActions.typeText(weblocators.password, password);
    UiActions.typeText(weblocators.passwordConfirm, password);
  }

  selectPolicyCheckbox() {
    UiActions.check(weblocators.policyCheckbox);
  }

  clickContinue() {
    UiActions.clickButton(weblocators.continue);
  }
}
