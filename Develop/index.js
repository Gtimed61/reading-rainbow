// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const path = require('path');
const { title } = require('process');
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your project!')
                }

            }

    
        },
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
            choices: ['MIT' , 'Apache 2.0' , 'GPL 3.0' , 'BSD 3', 'None'],
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
            default: false
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please enter your GitHub user name:',
            valdiate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!')
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please enter your email address:',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!')
                }
            }
        }



    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log('hi')
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
/*fs.writeFile('README.md', generateMarkdown(), (err) => {
    if (err) {
        console.error(err)
        return
    } else {
        console.log('wrote to file success!')
    } 
}) */

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        console.log('generate read me.')
        writeToFile('README.md', generateMarkdown({...responses}))
        console.log(responses)
    })
}
    

// Function call to initialize app
init();
