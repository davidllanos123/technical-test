import {APIRequestContext, expect, test} from "@playwright/test";
import {ApiUtil} from "../../../common/utils/ApiUtils";
import {formattedResponse} from "../../../common/types/apiTypes";

type bookStoreJson = {
    title: string,
    author: string,
    published_date: string,
    isbn: string,
    price: string
}

export class APISteps extends ApiUtil {
    private token = ""

    constructor(private request: APIRequestContext,
                private basePath: string ) {
        super(request)
    }

    async createToken(body: object) {
        return await test.step(`When POST request is launched to create a new user`, async ():Promise<formattedResponse> => {
            console.log(this.basePath)
            let response = await this.post(`${this.basePath}/auth`, {}, body)
            this.token= response.responseText.token
            return response
        })
    }
}