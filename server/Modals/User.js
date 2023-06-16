const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    favourite: {
      type: [
        {
          id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "List",
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(15);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
