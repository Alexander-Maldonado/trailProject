const trails = require("../controllers/trails.controller");
const { authenticate } = require('../config/jwt.config');

module.exports = (app) =>{

    app.get("/api/trails", trails.getTrails)
    app.post("/api/trails", authenticate, trails.createTrails)
    app.get("/api/trails/:id", authenticate, trails.getTrailsById)
    app.put("/api/trails/:id", trails.updateTrails)
    app.delete("/api/trails/:id", trails.deleteTrails)
}