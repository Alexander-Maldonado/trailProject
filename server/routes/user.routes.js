const user = require("../controllers/user.controller")

module.exports = (app) =>{

    app.get("/api/trails/users", user.getUser)
    app.post("/api/trails/user", user.createUser)
    app.get("/api/trails/user/:id", user.getUserById)
    app.put("/api/trails/user/:id", user.updateUserById)
    app.delete("/api/trails/user/:id", user.deleteUser)
}