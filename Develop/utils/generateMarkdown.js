// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `
    ![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)
    `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `
    ![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)
    `
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `
    ![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return` # ${data.title}

  
  $//{renderLicenseBadge(license)}

  # Table of Contents

  [Description]#Description
  [Installation]#Installation
  [Usage]#Usage
  [License]#License
  [Contributing]#Contributing
  [Tests]#Tests
  [Questions]#Questions


  # Description


  ${data.description}
  

  # Installation


  ${data.installation}
  
  
  # Usage

  
  ${data.usage}
  

  # License
  
  $//{renderLicenseSection(license)}
  $//{renderLicenseLink(license)}
  ${data.license}
 
  

  # Contributing
  

  ${data.contributing}
  

  # Tests
  

  ${data.tests}


  # Questions


  ${data.questions}


  GitHub Profile ---> https://github.com/Gtimed61

  ---> Please reach out to me with questions
  ---> [gthorne61@gmail.com]#gthorne61@gmail.com
`;
}

module.exports = generateMarkdown;
