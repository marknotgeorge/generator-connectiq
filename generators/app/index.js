const Generator = require("yeoman-generator");
const chalk = require("chalk");
const _ = require("lodash");
const inputs = require("./lib/inputs.js");
const outputs = require("./lib/outputs.js");

module.exports = class extends Generator 
{
    async prompting()
    {
        this.log(outputs.welcomeMsg());

        return this.prompt(inputs(this)).then(
            answers => 
            {
                this.answers = answers;
            });
    }

    writing()
    {
        const tContext = 
        {
            _: _,
            answers: this.answers,
            package: this.pkg,
            env: process.env
        };
    }
};
