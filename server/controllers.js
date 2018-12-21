const  Pet  = require("./models");

module.exports = {
    getPets : function(req, res){
     Pet.find({}).sort({ "type": 1 })
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json(err);
    })
},

    getPet : function(req, res){
         Pet.findById(req.params.id)
         .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
            res.json(err);
        })
    },
    
            
    postPet : function(req, res){
        // console.log(req.body)
        Pet.find({name:req.body.name, type:req.body.type})
        .then(response => {
            console.log(response)
            console.log(response.length)
            if(response.length > 0){
                response = {message:"Name already exist"}
                 res.json(response)
            }
            else{
                Pet.create(req.body)
                .then((data)=>{
                   res.json(data);
               })
               .catch((err)=>{
                   console.log(err)
                   res.json(err);
               })
            }
        })
    },
          
    putPet : function(req, res){
         Pet.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true })
         .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
        res.json(err);
        })
    },

    deletePet : function(req, res){
         Pet.findByIdAndRemove(req.params.id)
         .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
            res.json(err);
        })
    },
            
}