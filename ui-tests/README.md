# Hub88-Automated-UI-Tests

##  Description

The UI E2E test automation framework is developed with Cypress. Scope of the current automated UI tests cover the following functionality,
1. Search Games

## Run E2E UI tests in Local

Prerequisites : Node.js 12 or 14 and above

1. Clone repository to your local

2. Navigate to yolo-tests/ui-tests in terminal

3. Run "npm install"


#### Run tests in headless mode with Chrome

npx cypress run --browser chrome

  
In the above command you can also change the browser you want to run the tests in with headless mode.

Ex:

* --browser firefox

* --browser edge

* --browser chromium


##### Reports :

After tests are executed, report can be found in "reports/html/index.html"


#### Run with cypress UI

npx cypress open

  
#### html report :

![report](https://user-images.githubusercontent.com/116787791/198942183-f14d896f-4f2a-43c8-8a9c-6f65d7099924.JPG)


## Run E2E UI tests in CI/CD pipeline :

Github actions workflow is configured to trigger once a change is pushed in to 'main' branch.

You can find the workflow setup file here :
 https://github.com/ShashikaSeram/yolo-tests/blob/main/.github/workflows/ui-test-workflow.yml

Workflow excution of UI tests: 
![Screen Shot 2022-10-31 at 11 34 22 AM](https://user-images.githubusercontent.com/116787791/198942088-2dc81b78-e061-4038-afe5-f23d0a4b3998.png)
