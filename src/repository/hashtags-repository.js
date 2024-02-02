const Hashtag = require("../models/hashtags");

class HashtagRepository {
  async create(data) {
    try {
      const tag = await Hashtag.create(data);
      return tag;
    } catch (err) {
      console.log(err);
    }
  }

  async bulkCreate(data) {
    try {
      const tag = await Hashtag.insertMany(data);
      return tag;
    } catch (err) {
      console.log(err);
    }
  }

  async get(id) {
    try {
      const tag = await Hashtag.findById(id);
      return tag;
    } catch (err) {
      console.log(err);
    }
  }

  async findByName(titleList) {
    try {
      const tags = await Hashtag.find({ title: { $in: titleList } });
      return tags;
    } catch (err) {
      console.log(err);
    }
  }

  async destroy(id) {
    try {
      const tag = await Hashtag.findByIdAndRemove(id);
      return tag;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = HashtagRepository;
