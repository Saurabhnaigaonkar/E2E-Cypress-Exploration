import { registerPage } from "../../pages/registerPage"
const registerObj = new registerPage()
import registerData from '../../fixtures/registerData.json'

describe(' test automation', () => {

    it('register flow', () => {
        registerObj.openURL()
        registerObj.fillPersonalInformation(
            registerData.firstName,
            registerData.lastName,
            registerData.email,
            registerData.telephone,
            registerData.password
        );
        registerObj.selectPolicyCheckbox()
        registerObj.clickContinue()

    })
})