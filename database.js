const fs = require('fs');

const save = (filename, objects) => {
    fs.writeFileSync(`${filename}.json`, JSON.stringify(objects), null, 2);
}

const load = (filename) => {
    const file = fs.readFileSync(`${filename}.json`, 'utf8');
    return JSON.parse(file);
}


module.exports = { save, load };