//Test cases
const {generateSuiteByTestCase}=require('./helpers/generate-chatgpt');
const {translateObjectToTest, translateObjectToSuite}=require('./helpers/transform-object-test');
const loginTestCases = require('./test-cases-repo/login.json');
const authTestCases = require('./test-cases-repo/authentication.json');

loginTestCases.test_cases.forEach(testCase => {
    generateSuiteByTestCase(loginTestCases.spec_name, translateObjectToTest(testCase))
})

generateSuiteByTestCase(authTestCases.spec_name, translateObjectToSuite(authTestCases));
