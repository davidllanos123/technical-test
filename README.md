# PLAYWRIGHT


## Objective

Automate end-to-end test scenarios.


## Technical details

- **Language:** Typescript
- **Framework:** Playwright
    - **Test runner:** managed internally by config files in playwright
    - **Browsers:** Chrome
    - **Reporter:** Playwright / Allure

## Project structure

### Typescript files
- **tsconfig.json:** the rules applied for this project in TypeScript.
- **package.json:** the packages used in the project with some custom commands to facilitate its use.

### src:

- **common:** contains common utilities among all projects for reuse.
- **configs:** contains data about test execution to be configurable by environment (I've set up 3 environments: local, stage, prod, which are currently the same, but it gives an idea of how it would be in a project where the app is deployed in all 3).
- **features:** here we find everything related to the exercise tests.
    - **APITesting:**
        - **Helpers:** to preload everything necessary in the tests.
        - **Steps:** Definition and implementation of actions used in the tests.
        - **Tests:** API tests calling steps and helpers combining with different data inputs both randomized and personalized in the tests.

### runTest.sh

- Script that uses a series of input parameters to understand which tests to run and executes them in the corresponding environment by internally configuring the project. Currently, the commands implemented to launch all scripts automatically would only be supported on macOS and Linux.


## Setup

### Preconditions
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Node version used: 21.6.2


### Steps to install the repository

1. Open the terminal
2. `cd <your_desired_folder>`
3. `git clone https://github.com/davidllanos123/technical-test.git`
4. Install dependencies in local:
    - `npm run updatePlaywright`
    - `npm run updateProject`
    - 
## Test runners

### Command
```
./runTests.sh -t [tag]
````

#### Tag
```
tag: Optional parameter to filter test run, use any tag to select the filter desired.
```
If not input will run all the tests

### Example
```
./runTests.sh 
./runTests.sh -t create
```

## Test reports

- **Playwright:** Technical report for QA/DEVs
```
npm run report_playwright
```

- **Allure:** Business report for PO/PM or any project stakeholder
```
npm run report_allure
```

## References

- Playwright: [Documentation](https://playwright.dev/docs/intro)
