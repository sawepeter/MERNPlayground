const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//static signup method
userSchema.static.signup = async (email, password) => {

    const exists = await this.findOne({ email })

    if (exists){
        throw Error('Email already in use')
    }

}

module.exports = mongoose.model('User', userSchema)