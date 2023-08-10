//Api test  

describe('API GET Method', () => {
    it('should retrive the details of users from the endpoint url', () => {

        const apiUrl = 'https://reqres.in/api/users?page=2'; //endpoint url

        // Visit the API endpoint and make the request
        cy.request({
            method: 'GET',
            url: apiUrl
        }).then((response) => {
            //print response
            console.log("response_status: " +response.status)
            console.log("response_body: " +JSON.stringify(response.body))
            // Assertions
            expect(response.status).to.equal(200); // Asserting that response code is 200 OK
            
            cy.log("response was fetched successfully..!");
        })
    })
})
