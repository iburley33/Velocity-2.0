const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  savedRoutes: [
    {
      location: { type: String, required: true },
      trails: { type: Array, required: true },
      weather: { type: Object, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
