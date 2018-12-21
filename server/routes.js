
const api = require("./controllers.js");
const path = require('path')
module.exports = function(app){
    app.get("/api/pets", api.getPets);
    app.get("/api/pets/:id", api.getPet);
    app.post("/api/pets", api.postPet);
    app.put("/api/pets/:id", api.putPet);
    app.delete("/api/pets/:id", api.deletePet);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}