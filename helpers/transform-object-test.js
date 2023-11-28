module.exports.translateObjectToTest = function translateObjectToTest(testObject){
    const initialText = `write a script in cypress with the following title ${testObject.title} to: `;
    let stepsText = ``;

    testObject.steps.forEach((step, index) => {
        stepsText+=`${index+1}. ${step}\n`;
    });

    return `${initialText}\n ${stepsText}`;
}

module.exports.translateObjectToSuite = function translateObjectToSuite(testObject){
    const initialText = `write a script in cypress with the following title ${testObject.spec_name} with the following test cases: `;
    let testCasesText = ``;


    testObject.test_cases.forEach((testCase, index) => {
        let stepsText = ``;

        testCase.steps.forEach((step, index) => {
            stepsText+=`${index+1}. ${step}\n`;
        });

        testCasesText+=`Title: ${testCase.title}\n${stepsText}\n`;
    });



    return `${initialText}\n${testCasesText}`;
}

module.exports.sliceResponseToSpecCode = function sliceResponseToSpecCode(textStart = 'describe', originalText){
    let indexStart = originalText.toString().indexOf(textStart);

    return originalText.toString().slice(indexStart);
}