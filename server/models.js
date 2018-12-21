const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/petshelter_db", {useNewUrlParser: true}, (errs)=>console.log(errs?errs:"db connected"));

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is needed"],
        minlength: [3, " Names need to be at least 3s characters long."],
    },
    type: {
        type: String,
        required: [true, "Type is needed"],
        minlength: [3, "Type need to be at least 3s characters long"],
    },
    description: {
        type: String,
        required: [true, "Description is needed"],
        minlength: [3, "Description need to be at least 3s characters long"],
    },
    skill1: {
        type: String,
        required:false,
    },
    skill2: {
        type: String,
        required: false,
    },
    skill3: {
        type: String,
        required: false,
    }
}, { timestamps : true});



const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;