import {test} from "../helpers/APITestsFixtures"
import {statusCode} from "../../../common/types/apiTypes";
import RandomBooking from "../../../common/utils/RandomBooking";

test.describe( "BOOKER API Tests about Creation of booking", ()=>{
    test('Create a Booking and delete it', {
        tag: ['@api', '@create']},
    async ({ apiSteps, verifications, userData }) => {
        const createTokenResponse = await apiSteps.createToken(userData);
        const token = createTokenResponse.responseBody.token;
        await verifications.thenStatusCodeToBeEqual(createTokenResponse, statusCode.OK);

        const booking_1= new RandomBooking();
        const createBookingResponse = await apiSteps.whenCreatingBooking(booking_1);
        await verifications.thenStatusCodeToBeEqual(createBookingResponse,statusCode.OK);
        const bookingId = createBookingResponse.responseBody.bookingid;

        const getBookingResponse = await apiSteps.thenBookingShouldBeStored(bookingId);
        await verifications.thenStatusCodeToBeEqual(getBookingResponse,statusCode.OK)
        const deleteResponse = await  apiSteps.whenDeletingBooking(bookingId,token);
        await verifications.thenStatusCodeToBeEqual(deleteResponse,statusCode.CREATED);
    });

    test('Create a Booking with a missing field', {
            tag: ['@api', '@bad-create']},
        async ({ apiSteps, verifications }) => {
            let booking_1= new RandomBooking();

            delete booking_1["firstname"];
            const createBookingResponse = await apiSteps.whenCreatingBooking(booking_1);
            await verifications.thenStatusCodeToBeEqual(createBookingResponse,statusCode.BAD_REQUEST);
        });
});

test.describe( "BOOKER API Tests about Update of booking", ()=>{
    test('Create a Booking and update it', {
            tag: ['@api', '@update' ]},
        async ({ apiSteps, verifications, userData }) => {
            const createTokenResponse = await apiSteps.createToken(userData);
            const token = createTokenResponse.responseBody.token;
            await verifications.thenStatusCodeToBeEqual(createTokenResponse, statusCode.OK);

            const booking_1= new RandomBooking();
            const createBookingResponse = await apiSteps.whenCreatingBooking(booking_1);
            await verifications.thenStatusCodeToBeEqual(createBookingResponse,statusCode.OK);
            const bookingId = createBookingResponse.responseBody.bookingid;

            const booking_2 = new RandomBooking();
            const updateBookingResponse = await apiSteps.updateBooking(bookingId,booking_2,token);
            await verifications.thenStatusCodeToBeEqual(updateBookingResponse,statusCode.OK);
            const getBookingResponse = await apiSteps.thenBookingShouldBeStored(bookingId);
            await verifications.thenStatusCodeToBeEqual(getBookingResponse,statusCode.OK);
            await verifications.thenResponseTextToBeEqual(getBookingResponse,booking_2);
        });

    test('Create a Booking and do a partial update on it', {
            tag: ['@api', '@partial-update' ]},
        async ({ apiSteps, verifications, userData }) => {
            const createTokenResponse = await apiSteps.createToken(userData);
            const token = createTokenResponse.responseBody.token;
            await verifications.thenStatusCodeToBeEqual(createTokenResponse, statusCode.OK);

            let booking_1= new RandomBooking();
            const createBookingResponse = await apiSteps.whenCreatingBooking(booking_1);
            await verifications.thenStatusCodeToBeEqual(createBookingResponse,statusCode.OK);
            const bookingId = createBookingResponse.responseBody.bookingid;

            const newFirstName = 'EXAMPLE123';
            const partialBooking = { firstname: `${newFirstName}` };
            const updateBookingResponse = await apiSteps.partialUpdateBooking(bookingId,partialBooking,token);
            await verifications.thenStatusCodeToBeEqual(updateBookingResponse,statusCode.OK);
            const getBookingResponse = await apiSteps.thenBookingShouldBeStored(bookingId);
            await verifications.thenStatusCodeToBeEqual(getBookingResponse,statusCode.OK);
            await verifications.thenResponseTextToContainsArrayOfStrings(getBookingResponse,[newFirstName]);
        });
});


