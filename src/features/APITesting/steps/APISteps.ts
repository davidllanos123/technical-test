import {APIRequestContext, test} from "@playwright/test";
import {ApiUtil} from "../../../common/utils/ApiUtils";
import {formattedResponse} from "../../../common/types/apiTypes";

export class APISteps extends ApiUtil {
    private token = ""

    constructor(
        private request: APIRequestContext,
        private basePath: string
    )

    {
        super(request)
    }

    async createToken(body: object) {
        return await test.step(`When POST request is launched to get Admin Token`, async ():Promise<formattedResponse> => {
            let response = await this.post(`${this.basePath}/auth`, {}, body)
            this.token= response.responseBody.token
            return response
        })
    }

    async whenCreatingBooking(body: {}) {
        return await test.step(`When POST request is launched to create a booking`, async ():Promise<formattedResponse> => {
            let response = await this.post(`${this.basePath}/booking`, {}, body)
            this.token= response.responseBody.token
            return response
        })
    }

    async whenDeletingBooking(bookingId: number, token: string) {
        return await test.step(`When DELETE request is launched to create a booking`, async ():Promise<formattedResponse> => {
            let response = await this.delete(`${this.basePath}/booking/${bookingId}`,
                {Cookie: `token=${token}`})
            this.token= response.responseBody.token
            return response
        })
    }
}