var Promise = require("bluebird"),
    fs = Promise.promisifyAll(require('fs-extra'));


String.prototype.trimEnd = function (trimStr) {
    if (!trimStr) {
        return this;
    }
    var temp = this;
    while (true) {
        if (temp.substr(temp.length - trimStr.length, trimStr.length) != trimStr) {
            break;
        }
        temp = temp.substr(0, temp.length - trimStr.length);
    }
    return temp;
}

var root = __dirname.trimEnd("\lib")

console.log(root)

function generateStructure(project, outs) {
    return fs.copyAsync(root + '/structure', project)
        .then(function (err) {
            return err ? console.error(err) : console.log('generate project success');
        })
}

module.exports = generateStructure;
