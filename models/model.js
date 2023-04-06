const db = require("./db");
const User = require("./schema");

class User {
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

  async saveRoute(username, location) {
    const user = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          savedRoutes: { location },
        },
      },
      { new: true }
    );
    return user;
  }
}

module.exports = User;
