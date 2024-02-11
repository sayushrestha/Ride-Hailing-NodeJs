const fs = require('fs')
const flatted = require('flatted')
const Passenger = require('../models/passenger')

class BaseDatabase {
  constructor(model) {
    this.model = model
  }

  save(objects) {
    return this.model.insertMany(objects)
  }

  load() {
    return this.model.find()
  }

  async insert(object) {
   return await this.model.create(object)

  }


  async find(id) {
    // return this.model.find({ _id: id})
    return this.model.findById(id)
  }

  async removeBy(property, value) {
    return this.model.deleteOne({ [property]: value })

  }

  async update(id, object) {
    return this.model.findByIdAndUpdate(id, object)
   
  }

  async find(id) {
    const objects = await this.load()
    return objects.find(o => o.id == id)
  }

  async findBy(property, value) {
    return this.model.find({ [property]: value })
  }
}

module.exports = BaseDatabase
