const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    notiToken: {
        type: String,
        required: false
    },
    userDuties: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'duties'
    }]
    // ,
    // createdAt: {
    //     type: Date,
    //     default: Date.now()
    // }
},{
    toJSON: {
        transform(doc, ret){
            delete ret.__v,
            delete ret.createdAt,
            delete ret.updatedAt
        }
    },
    timestamps: true
});

module.exports = mongoose.model("users", UserSchema);