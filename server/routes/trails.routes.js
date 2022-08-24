const trails = require("../controllers/trails.controller")

module.exports = (app) =>{

    app.get("/api/trails", trails.getTrails)
    app.post("/api/trails", trails.createTrails)
    app.get("/api/trails/:id", trails.getTrailsById)
    app.put("/api/trails/:id", trails.updateTrails)
    app.delete("/api/trails/:id", trails.deleteTrails)
}