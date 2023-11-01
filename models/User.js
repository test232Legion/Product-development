const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    details: {
        department: {
            type: String,
        },
        address: {
            type: String,
        },
        bio: {
            type: String,
        },
        birthday: {
            type: String,
        },
        country: {
            type: String,
        },
        mobile: {
            type: String,
        },
        website: {
            type: String,
        },
    },
    role: {
        type: String,
        default: "user"
    },
    qrsrc: {
        type: String,
        required: true
    },
    attendance: [
        {
            date: {
                type: Number,
            },
            isPresent: {
                type: Boolean,
                default: false,
            }
        }
    ]

}, { timestamps: true })

module.exports = mongoose.model("Person", personSchema)