const fs = require('fs')
const flatted = require('flatted')
const Passenger = require('../models/passenger')

class BaseDatabase {
  constructor(model) {
    this.model = model
    this.filename = model.name.toLowerCase()
  }

  save(objects) {
    return new Promise((resolve, reject) => {
      fs.writeFile(`${__dirname}/${this.filename}.json`, flatted.stringify(objects, null, 2), (err) => {
        if (err) return reject(err)
        resolve()
      })
    })
  }

  load() {
    return this.model.find()
  }

  async insert(object) {
    const instance = await this.model.create(object)
    return instance
  }

  async remove(index) {
    const objects = await this.load()

    objects.splice(index, 1)
    await this.save(objects)
  }

  async find(id) {
    // return this.model.find({ _id: id})
    return this.model.findById(id)
  }

  async removeBy(property, value) {
    return this.model.deleteOne({ [property]: value })

  }

  async update(object) {
    const objects = await this.load()

    const index = objects.findIndex(o => o.id == object.id)

    if (index == -1) throw new Error(`Cannot find ${this.model.name} instance with id ${object.id}`)

    objects.splice(index, 1, object)
    await this.save(objects)
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
