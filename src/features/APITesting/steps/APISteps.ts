import {APIRequestContext, test} from "@playwright/test";
import {ApiUtil} from "../../../common/utils/ApiUtils";
import {formattedResponse} from "../../../common/types/apiTypes";

export class APISteps extends ApiUtil {

    constructor(
        private request: APIRequestContext,
        private basePath: string
    )

    {
        super(request)
    }

    async createToken(body: object) {
        return await test.step(`When POST request is launched to get Admin Token`, async ():Promise<formattedResponse> => {
            return await this.post(`${this.basePath}/auth`, {}, body)
        })
    }

    async whenCreatingBooking(body: {}) {
        return await test.step(`When POST request is launched to create a booking`, async ():Promise<formattedResponse> => {
            return await this.post(`${this.basePath}/booking`, {}, body)
        })
    }

    async whenDeletingBooking(bookingId: number, token: string) {
        return await test.step(`When DELETE request is launched to create a booking`, async ():Promise<formattedResponse> => {
            return await this.delete(`${this.basePath}/booking/${bookingId}`,
                {Cookie: `token=${token}`})
        })
    }

    async thenBookingShouldBeStored(bookingId: number) {
        return await test.step(`When GET request is launched to get a booking`, async ():Promise<formattedResponse> => {
            return await this.get(`${this.basePath}/booking/${bookingId}`, {})
        })
    }

    async updateBooking(bookingId: number, body: {}, token: string) {
        return await test.step(`When UPDATE request is launched to create a booking`, async ():Promise<formattedResponse> => {
            return await this.put(`${this.basePath}/booking/${bookingId}`,
                {Cookie: `token=${token}`}, body)
        })
    }

    async partialUpdateBooking(bookingId: number, body: {}, token: string) {
        return await test.step(`When UPDATE request is launched to create a booking`, async ():Promise<formattedResponse> => {
            return await this.patch(`${this.basePath}/booking/${bookingId}`,
                {Cookie: `token=${token}`}, body)
        })
    }
}