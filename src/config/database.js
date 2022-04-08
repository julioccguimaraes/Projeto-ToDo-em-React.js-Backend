const mongoose = require('mongoose')
mongoose.Promise = global.Promise // só pra tirar aviso de advertência pois Promise do mongoose está depreciada
module.exports = mongoose.connect('mongodb://localhost/todo')