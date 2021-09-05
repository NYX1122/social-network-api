const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Username missing',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: 'Email missing',
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please fill out a valid email address']
        },
        // thoughts: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Thought'
        //     }
        // ],
        // friends: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Friend'
        //     }
        // ]
    },
    {
        id: false
    }
);

const User = model('User', UserSchema);

module.exports = User;