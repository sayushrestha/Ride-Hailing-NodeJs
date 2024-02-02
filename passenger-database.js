const BaseDatabase = require('./base-database')
const Passenger = require('./passenger')

class PassengerDatabase extends BaseDatabase {
    constructor() {
        super(Passenger)
    }
}

module.exports = PassengerDatabase