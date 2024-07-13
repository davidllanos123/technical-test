import {test, expect, BrowserContext, APIRequestContext, TestInfo} from '@playwright/test';
import {GlobalConfig} from "./testConfig/GlobalConfig";


export class TestBase extends GlobalConfig{
    constructor(
        readonly context: BrowserContext,
        readonly request: APIRequestContext,
        readonly workerInfo: TestInfo,
        )
    {
        super()
    }
}

export { test, expect, APIRequestContext } from '@playwright/test';
