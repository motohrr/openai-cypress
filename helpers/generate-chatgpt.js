require('dotenv').config();

module.exports.generateSuiteByTestCase = function generateSuiteByTestCase(title, description){

    //Dependencies
    const { OpenAI } = require('openai');
    const configuration = { apiKey: process.env.OPENAI_API_KEY };
    const {sliceResponseToSpecCode}=require('./transform-object-test');
    const openai = new OpenAI(configuration);
    const fs = require('fs');

    openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 1,
        max_tokens: 2048,
        top_p: 0,
        frequency_penalty: 0,
        presence_penalty: 0,
        messages: [{"role": "user", "content": description}]
    })
    .then((response) => {

        fs.writeFile(
            `logs/execution${(new Date()).getTime()}.txt`,
            `EXECUTION ID: ${(new Date()).getTime()}\n\nREQUEST:\n${description}\n\nResponse:\n${sliceResponseToSpecCode('describe',response.choices[0].message.content)}`,
            function (err) {
              if (err) throw err;
              console.log('File log is created successfully.');
            }
        );

        fs.writeFile(
            `cypress/e2e/${title}.cy.js`,
            sliceResponseToSpecCode('describe',response.choices[0].message.content),
            function (err) {
              if (err) throw err;
              console.log('File is created successfully.');
            }
        );
    })
    .catch((error) => {
        console.error(error);
    });
}