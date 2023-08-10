import { HomePage } from "../../pages/homePage"
const homePageObj = new HomePage()
import testData from '../../fixtures/testData.json'


describe(' test automation', () => {
    before(() => {
        homePageObj.performLogin(testData.login.username, testData.login.password)
    })


    it('Add To Cart flow', () => {
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName);

    })
})