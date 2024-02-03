class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("smthng went wrong");
      throw error;
    }
  }

  async destroy(data) {
    try {
      const result = await this.model.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log("smthng went wrong");
      throw error;
    }
  }

  async get(id) {
    try {
      const result = await this.model.findById(id);
      return result;
    } catch (error) {
      console.log("smthng went wrong");
      throw error;
    }
  }

  async getAll(id) {
    try {
      const result = await this.model.find({});
    } catch (error) {
      console.log("smthng went wrong");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const result = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return result;
    } catch (error) {
      console.log("smthng went wrong");
      throw error;
    }
  }
}

export default CrudRepository;