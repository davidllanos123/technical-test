import { defineConfig, devices } from '@playwright/test';
require('dotenv').config({ path: `${__dirname}/env/.env` });


export default defineConfig({
    testDir: '../features',
    timeout: 180000,
    expect: {
        timeout: 30000
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: 0,
    workers: 2,
    reporter: [['html', { open: 'never' }], ['list'],
        ["allure-playwright",
            {environmentInfo: {
                    NODE_VERSION: process.version,
                    OS: process.platform,
                    ENV: process.env.ENV,
                }}]],
    globalSetup: require.resolve('./setup/GlobalSetup'),
    globalTeardown: require.resolve('./setup/GlobalTearDown'),

    use: {
        actionTimeout: 0,
        trace: 'on',
        video: 'off',
    },

    projects: [
        {
            name: 'chrome',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'safari',
            use: { ...devices['Desktop Safari'] },
        },
        {
            name: 'mobileChrome',
            use: { ...devices['Pixel 5'] },
        },
        {
            name: 'mobileSafari',
            use: { ...devices['iPhone 13'] },
        },
        {
            name: 'worker',
        }
    ],
});
