const fs = require('fs');
const flatted = require('flatted');

const save = (filename, objects) => {
    fs.writeFileSync(`${filename}.json`, flatted.stringify(objects), null, 2);
}

const load = (filename) => {
    const file = fs.readFileSync(`${filename}.json`, 'utf8');
    
    return flatted.parse(file);
}

const insert = (filename, object) => {
    const objects = load(filename);
    save(filename, objects.concat(object));
}

module.exports = { save, load, insert };