import { test } from "../helpers/APITestsFixtures"
import {statusCode, formattedResponse} from "../../../common/types/apiTypes";

test.describe( "BOOKER API: Create Token", ()=>{
    test('Create TOKEN for new user', {
        tag: ['@api']},
    async ({ apiSteps, verifications }) => {
        let userData = {"username":"admin","password":"password123"};
        let response: formattedResponse = await apiSteps.createToken(userData);
        console.log(response.responseText)
        await verifications.thenStatusCodeToBeEqual(response, statusCode.OK)
    });
});


