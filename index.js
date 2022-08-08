// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is your project title (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter description for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "inputLink",
    message: "Enter your the link to deployed site (Required)",
    validate: (linkInput) => {
      if (linkInput) {
        return true;
      } else {
        console.log("Please enter link to deployed site!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "inputInstall",
    message: "Enter the steps required to install your project.",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Please enter steps to install your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "inputUsage",
    message:
      "Enter instructions and examples of where your project can be used.",
    validate: (usageInput) => {
      if (usagelInput) {
        return true;
      } else {
        console.log(
          "Please enter instructions and examples of usage for your project!"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "inputCredits",
    message:
      "List your collaborators, if any. (Input links to their GitHub profiles.) Include attribution to any tutorials or third-party assets, if any. ",
    validate: (creditsInput) => {
      if (creditsInput) {
        return true;
      } else {
        console.log(
          "Please enter instructions and examples of usage for your project!"
        );
        return false;
      }
    },
  },
  {
    type: "list",
    name: "inputlicense",
    message:
      "Which license is your project under?",
      choices: ["Open Source, Public Domain, Apache 2.0, MIT, General Public License, Proprietary"],
  },
];

inquirer.prompt(questions).then((data) => {
  const {projectTitle, description, inputLink, inputInstall, inputUsage, inputCredits} = data;
})
console.log(title);

const readme = `
# ${title}

##Description
${description}

## Table of Contents

- [Description](#description)
- [License](#license)
- [Github](#github)

##Deployed Link
${inputLink}

##Installation
${inputInstall}

##Usage
${inputUsage}


## License
${license}

##Credits
${inputCredits}

`;

fs.appendFile("README.md",readme, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("success!")
  }
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
