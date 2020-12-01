const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: "input",
        message: "what is your project Title",
        name: "title",
        validate: function (value) {
            if (value.trim() == '') {
                return 'invalid';
            }
            else {
                return true
            }

        }
    },
    {
        type: "input",
        message: "Write a description of your project",
        name: "description",
        validate: function (value) {
            if (value.trim() == '') {
                return 'invalid';
            }
            else {
                return true
            }

        }
    },
    {
        type: "input",
        message: "Describe installation process",
        name: "installation",
        validate: function (value) {
            if (value.trim() == '') {
                return 'invalid';
            }
            else {
                return true
            }

        }
    },
    
    {
        type: "input",
        message: "What is the project usage",
        name: "usage",
        validate: function (value) {
            if (value.trim() == '') {
                return 'invalid';
            }
            else {
                return true
            }

        }
    },
    {
        type: "input",
        message: "Who contributed to this project",
        name: "contribution",
        validate: function (value) {
            if (value.trim() == '') {
                return 'invalid';
            }
            else {
                return true
            }

        }
    },
    {
        type: "input",
        message: "Are there any test instructions needed",
        name: "tests",
        validate: function (value) {
            if (value.trim() == '') {
                return 'invalid';
            }
            else {
                return true
            }

        }
    },
    {
        type: "list",
        message: "What kind of license for your application would you like to use",
        name: "license",
        choices: [
            "MIT", "GNU_General_Public_v3.0", "Apache_2.0"
        ],
    },
    {
        type: "input",
        message: "Please enter Email",
        name: "email",
        validate: function (value) {
            if (value.trim() == '') {
                return 'invalid';
            }
            else {
                return true
            }

        }
    },
    {
        type: "input",
        message: "Please enter Github username",
        name: "username",
        validate: function (value) {
            if (value.trim() == '') {
                return 'invalid';
            }
            else {
                return true
            }

        }
    }


];
inquirer
    .prompt(questions)
    .then(answers => {
        projectTitle = answers.title;
        projectDescription = answers.description;
        projectInstallation = answers.installation;
        projectUsage = answers.usage;
        projectContribution = answers.contribution;
        projectTests = answers.tests;
        projectLicense = answers.license;
        projectEmail = answers.email;
        projectUsername = answers.username;



        console.log(projectTitle)
        fs.writeFileSync("testReadMe.md", "# " + projectTitle + "\n\n")
        fs.appendFileSync("testReadMe.md", "## Description \n\n" + projectDescription + "\n\n")
        fs.appendFileSync("testReadMe.md", "## Installation \n\n" + projectInstallation + "\n\n")
        fs.appendFileSync("testReadMe.md", "## Usage \n\n" + projectUsage + "\n\n")
        fs.appendFileSync("testReadMe.md", "## Contribution \n\n" + projectContribution+ "\n\n")
        fs.appendFileSync("testReadMe.md", "## Tests \n\n" + projectTests+ "\n\n")
        fs.appendFileSync("testReadMe.md", "## License \n\n" + projectLicense+ "\n\n")
        fs.appendFileSync("testReadMe.md", "## Email \n\n" + projectEmail+ "\n\n")
        fs.appendFileSync("testReadMe.md", "## Username \n\n" + projectUsername+ "\n\n")
        // fs.appendFileSync("testReadMe.md", installation)
    })
.catch(error => {
    console.log(error)
});