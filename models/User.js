const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    details: [
        {
            username: {
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
            mobile: {
                type: String,
            },
            linkedaccount: {

            }
            // friends: [
            //     {

            //     }
            // ],
        }
    ],
    posts: [
        {
            nameofpost: {
                type: String,
            },
            photo: {
                date: Buffer,
                contentType: String
            },
            time: {
                type: Date,
            }
        }

    ],
    role: {
        type: String,
        default: "user"
    }


}, { timestamps: true })

module.exports = mongoose.model("Person", PersonSchema)
// module.exports = mongoose.model("Bus", BusSchema)