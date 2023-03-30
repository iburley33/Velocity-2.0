const db = require("./db");
const User = require("./schema");

class UserModel {
  constructor() {}

  async addUser(username, password) {
    const user = new User({ username, password });
    await user.save();
    return user;
  }

  async getUser(username) {
    const user = await User.findOne({ username });
    return user;
  }

  async saveRoute(username, location, trails, weather) {
    const user = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          savedRoutes: { location, trails, weather },
        },
      },
      { new: true }
    );
    return user;
  }
}

module.exports = {
  UserModel,
};