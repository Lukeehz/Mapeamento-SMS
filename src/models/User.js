const mongoose = require ('mongoose')

const User = mongoose.model ('User', {
    name: String,
    user: String,
    password: String,
})


module.exports = User