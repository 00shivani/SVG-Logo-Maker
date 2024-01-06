const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./Lib/questions.js');
const setShape = require('./Lib/setShape.js');

const outputFileName = "./Samples/logo.svg";

function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(outputFileName, svg, (err) => {
        if (err) {
            console.error('Error creating logo:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            createLogo(response);
        })
        .catch(err => {
            console.error(err);
        });
}

init();
