const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./src/style");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

let teamArray = [];


function startingPrompt() {
    inquirer.prompt([
        {
            message: "Please enter your teamname to begin building your team",
            name: "teamname"
        }
    ])
        .then(data => {
            const teamName = data.teamname;
            teamArray.push(teamName);
            addManager();
        })


}

function addManager() {
    inquirer.prompt([
        {
            message: "Enter your team manager's name",
            name: "name"
        },
        {
            message: "What is your team manager's employee id?",
            name: "id"
        },
        {
            message: "Enter your team manager's email address",
            name: "email"
        },

        {
            type: "number",
            message: "What is your team manager's office number?",
            name: "officeNumber"
        },
    ])

        .then(function (data) {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const officeNumber = data.officeNumber;
            const teamMember = new Manager(name, id, email, officeNumber);
            teamArray.push(teamMember);
            addTeamMembers();
        });

}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do next?",
            choices: ["Add an engineer", "Add an intern", "Exit"],
            name: "addMemberData"
        }
    ])

        .then(data => {

            switch (data.addMemberData) {
                case "Add an engineer":
                    addEngineer();
                    break;

                case "Add an intern":
                    addIntern();
                    break;
                case "Exit":
                    compileTeam();
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "Enter your engineer's name",
            name: "name"
        },
        {
            message: "What is your team manager's employee id?",
            name: "id"
        },
        {
            message: "Enter your engineer's email address",
            name: "email"
        },
        {
            message: "What is this engineer's Github profile?",
            name: "github"
        }
    ])

        .then(data => {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const github = data.github;
            const teamMember = new Engineer(name, id, email, github);
            teamArray.push(teamMember);
            addTeamMembers();
        });

};

function addIntern() {
    inquirer.prompt([
        {
            message: "Enter intern's name",
            name: "name"
        },
        {
            message: "What is your team manager's employee id?",
            name: "id"
        },
        {
            message: "Enter intern's email address",
            name: "email"
        },
        {
            message: "What is this intern's school?",
            name: "school"
        }
    ])

        .then(function (data) {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const school = data.school;
            const teamMember = new Intern(name, id, email, school);
            teamArray.push(teamMember)
            addTeamMembers()
        });

};

function compileTeam() {
    console.log("Thank you for building your team. All done!")

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${teamArray[0]}</title>
            <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
            <style>
            ${style}
            </style>
        </head>
        <body>
            <div class="banner-bar">
                <h1>${teamArray[0]}</h1>
            </div>
            <div class="card-container">
    `;

    htmlArray.push(htmlBeginning);

    for (let i = 1; i < teamArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${teamArray[i].name}</h2>
                <h2>${teamArray[i].role}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${teamArray[i].id}</p>
                <p>Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></p>
        `;

        if (teamArray[i].officeNumber) {
            object += `
            <p>Office Number: ${teamArray[i].officeNumber}</p>
            `
        }

        if (teamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${teamArray[i].github}">${teamArray[i].github}</a></p>
            `
        }

        if (teamArray[i].school) {
            object += `
            <p>School: ${teamArray[i].school}</p>
            `
        }

        object += `
            </div>
            </div>
        `;

        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `;

    htmlArray.push(htmlEnd);

    fs.writeFile(`./dist/${teamArray[0]}.html`, htmlArray.join(""), function (err) {

    })
}

startingPrompt();