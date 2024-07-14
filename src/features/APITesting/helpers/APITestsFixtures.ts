import {mergeTests, test as base} from '@playwright/test';
import {test as testBaseFixture} from '../../../common/fixtures/testBaseFixture';
import {TestBase} from "../../../common/testBase";
import {APISteps} from "../steps/APISteps";
import {Verifications} from "../../../common/steps/Verifications";
import UserData from "../../../common/utils/UserData";

type MyFixtures = {
    testBase: TestBase;
    apiSteps: APISteps;
    verifications: Verifications;
    userData: UserData;
};

export const test = mergeTests(testBaseFixture, base.extend<MyFixtures>({
    apiSteps: async ({ testBase }, use ) => {
        const apiSteps = new APISteps(testBase.request, testBase.BOOKER_API);
        await use(apiSteps);
    },
    verifications: async ({  }, use ) => {
        const verifications = new Verifications();
        await use(verifications);
    },
    userData: async ({  }, use ) => {
        const userData = new UserData();
        await use(userData);
    },
}));