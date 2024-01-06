// Require colors array to check if input matches one of the accepted colors
const colors = require('./colors.js');

// Define an array of questions for the logo creation process
const questions = [

  // Shape-related question
  {
    name: 'shape',
    message: 'Choose a shape for your logo: ',
    type: 'list',
    choices: ['Circle', 'Square', 'Triangle'],
  },

  // Text-related question (limiting to three characters)
  {
    name: 'text',
    message: 'Enter the logo text: (maximum of 3 characters)',
    type: 'input',
    validate: (answer) => answer.length <= 3 || 'Text must be 3 characters or less! Try again',
  },

  // Shape color choice
  {
    name: 'shapeColorChoice',
    message: 'What color would you like the shape to be? Select a color format: ',
    type: 'list',
    choices: ['color keyword', 'hexadecimal'],
  },

  // Color keyword for shape (validated with colors array)
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword for your shape; e.g. pink ',
    when: (answers) => answers.shapeColorChoice === 'color keyword',
    validate: (answer) => colors.includes(answer.toLowerCase()) || 'Please enter a valid color keyword',
  },

  // Hexadecimal for shape (validated with RegEx pattern)
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a hexadecimal number for your shape; e.g. #CCCCCC ',
    when: (answers) => answers.shapeColorChoice === 'hexadecimal',
    validate: (answer) => /^#[A-Fa-f0-9]{6}$/.test(answer) || 'Please enter a valid hexadecimal',
  },

  // Text color choice
  {
    name: 'textColorChoice',
    message: 'What text-color would you like? Select a color format: ',
    type: 'list',
    choices: ['color keyword', 'hexadecimal'],
  },

  // Color keyword for text (validated with colors array)
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword for the text; e.g. white',
    when: (answers) => answers.textColorChoice === 'color keyword',
    validate: (answer) => colors.includes(answer.toLowerCase()) || 'Please enter a valid color keyword',
  },

  // Hexadecimal for text (validated with RegEx pattern)
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a hexadecimal number for the text; e.g. #CCCCCC',
    when: (answers) => answers.textColorChoice === 'hexadecimal',
    validate: (answer) => /^#[A-Fa-f0-9]{6}$/.test(answer) || 'Please enter a valid hexadecimal',
  },
];

// Export questions
module.exports = questions;
