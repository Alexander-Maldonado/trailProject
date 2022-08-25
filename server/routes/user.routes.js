const userCtrl = require("../controllers/user.controller")

module.exports = (app) =>{

    app.get("/api/trails/users", userCtrl.getUsers);
    app.post("/api/trails/user", userCtrl.createUsers);
    app.get("/api/trails/user/:id", userCtrl.getUserById);
    app.put("/api/trails/user/:id", userCtrl.updateUserById);
    app.delete("/api/trails/user/:id", userCtrl.deleteUser);
};