const mongoose = require('mongoose');

const DutySchema = mongoose.Schema({
    dutyName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    currentStreak: {
        type: Number,
        required: true
    },
    maxStreak: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    goal: {
        type: Number,
        required: true
    },
    //TYPE TIME ADD TO
    hours: {
        type: Number,
        default: 0,
        required: true
    },
    minutes: {
        type: Number,
        default: 0,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    history: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'histories'
    }]
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

module.exports = mongoose.model("duties", DutySchema);