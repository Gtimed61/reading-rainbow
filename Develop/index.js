// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.questions([
        {
            type: 'input',
            name: 'description',
            message: 'Enter your description for your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your description!');
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter any installation instructions.',
            valdiate: installationinput => {
                if (installationinput) {
                    return true;
                } else {
                    console.log('Please enter your installation instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is your application used for?',
            validate: usageInput => {
                if (usageInput) {
                    return true;        
                } else {
                    console.log('Please enter a usage description');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: '',
            validate: 
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who is contributing to this application?',
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log('Please enter who is contributing to this project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Did you test the application?',
            default: true

        }
    ]);
};

// TODO: Create a function to write README file
fs.writeFile('README.md', '', (err) => {
    if (err) {
        console.error(err)
        return
    } else {
        console.log('wrote to file success!')
    } 
})

// TODO: Create a function to initialize app
questions()
    .then

// Function call to initialize app
init();
