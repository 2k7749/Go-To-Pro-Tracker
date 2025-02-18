const mongoose = require('mongoose');

const HistorySchema = mongoose.Schema({
    dutyId: {
        type: String,
        required: true
    },
    dateString: {
        type: String,
        required: true
    },
    timestamps: {
        type: Date,
        default: Date.now(),
        required: true
    },
    selected: {
        type: Boolean,
        required: true
    },
    selectedColor: {
        type: String,
        required: true
    }
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

module.exports = mongoose.model("history", HistorySchema);