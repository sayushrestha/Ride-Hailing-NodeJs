const fs = require('fs');

const save = (filename, objects) => {
    fs.writeFileSync(`${filename}.json`, JSON.stringify(objects), null, 2);
}

const load = (filename) => {

}


module.exports = { save, load };