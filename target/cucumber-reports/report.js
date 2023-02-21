$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/techGlobal.feature");
formatter.feature({
  "name": "TechGlobal Pagination Page Funcitonality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://techglobal-training.netlify.app/\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user moves to \"Practices\" header dropdown",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on \"Frontend Testing\" header dropdown option",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.userClicksOnHeaderDropdownOption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be navigated to https://techglobal-training.netlify.app/frontend",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on \"Pagination\" card",
  "keyword": "And "
});
formatter.match({
  "location": "BaseSteps.userClicksOnCard(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend/pagination\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseSteps.userShouldBeNavigatedTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate the main content of the Pagination Page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user should see \"Pagination\" heading",
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.userShouldSeeHeading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"World City Populations 2022\" heading",
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.userShouldSeeHeading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:\" paragraph",
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.userShouldSeeParagraph(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});