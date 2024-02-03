const BaseDatabase = require('./base-database')
const Passenger = require('./passenger')

class PassengerDatabase extends BaseDatabase {
    findByName(name) {
        const objects = this.load();
        return objects.find(p => p.name === name);
    }
}

module.exports = new PassengerDatabase(Passenger)