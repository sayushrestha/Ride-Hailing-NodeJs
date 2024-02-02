const BaseDatabase = require('./base-database')
const Driver = require('./driver')

class DriverDatabase extends BaseDatabase {
    constructor() {
        super(Driver)
    }
}

module.exports = DriverDatabase