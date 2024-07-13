import {test as base} from '@playwright/test';
import {TestBase} from "../testBase";


type MyFixtures = {
    testBase: TestBase
};

export const test = base.extend<MyFixtures>({
    testBase: async ({ context, request }, use, worker ) => {
        const testBase = new TestBase(context, request, worker);
        await use(testBase);
    }
});
