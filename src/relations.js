module.exports = function relations(){

const User = require("./models/User.js");
const Note = require("./models/Note.js");


User.hasMany(Note)
Note.belongsTo(User)
}


