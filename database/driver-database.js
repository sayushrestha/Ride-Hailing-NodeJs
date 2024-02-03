const BaseDatabase = require('./base-database')
const Driver = require('../driver')

class DriverDatabase extends BaseDatabase {
    findByDriverName(name) {
        // const objects = this.load()
        // const driver = objects.find(o => o.name == name)
        // return driver
        return this.findBy('name', name)
    }
    findByLocation(location) {
        // return this.load().find(o => o.location == location)
        return this.findBy('location', location)
    }
}

module.exports = new DriverDatabase(Driver)
