const chalk = require("chalk");

module.exports = 
{
    welcomeMsg: function()
    {
        return (
            chalk.blue("Connect IQ Project Generator. ") + 
            chalk.blue("©2019 Mark Johnson. This project is unaffiliated with Garmin.")
        );      
    }

};