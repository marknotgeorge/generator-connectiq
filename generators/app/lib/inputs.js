const _ = require("lodash");

module.exports = function(generator)
{
    let c = [];

    c.push(
        {
            type: "input",
            name: "name",
            message: "Project name",
            filter: _.kebabCase,
            required: true,
            validate: function(str)
            {
                return str.length > 0;
            },
            default: _.kebabCase(generator.appname)
        }
    );

    return c;
};