import { test } from "../helpers/APITestsFixtures"
import {statusCode} from "../../../common/types/apiTypes";
import RandomBooking from "../../../common/utils/RandomBooking";

test.describe( "BOOKER API: Crate a booking and delete it", ()=>{
    test('Create a Booking and delete it', {
        tag: ['@api']},
    async ({ apiSteps, verifications, userData }) => {
        const createTokenResponse = await apiSteps.createToken(userData);
        const token = createTokenResponse.responseBody.token;
        await verifications.thenStatusCodeToBeEqual(createTokenResponse, statusCode.OK);
        const booking_1= new RandomBooking();
        const createBookingResponse = await apiSteps.whenCreatingBooking(booking_1);
        await verifications.thenStatusCodeToBeEqual(createBookingResponse,statusCode.OK);
        const bookingId = createBookingResponse.responseBody.bookingid;
        const deleteResponse = await  apiSteps.whenDeletingBooking(bookingId,token);
        await verifications.thenStatusCodeToBeEqual(deleteResponse,statusCode.CREATED)


    });
});


