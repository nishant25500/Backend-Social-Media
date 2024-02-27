import { UserRepository } from "../repository/index.js";

class UserService {
  constructor() {
    this.userRepo = new UserRepository();
  }

  async signup(data) {
    try {
      const user = await this.userRepo.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
