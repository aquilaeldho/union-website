const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true},
    role: {type: String, required: true, enum: ["admin", "vendor", "user"]},
    password: {type: String, required: true}
})

UsersSchema.methods.matchPassword = async function (enteredPassword) {
    return await (enteredPassword === this.password);
}

const UsersModel1 = mongoose.model("union_user", UsersSchema)

module.exports = UsersModel1