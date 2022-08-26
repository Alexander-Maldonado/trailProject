const userCtrl = require("../controllers/user.controller");
const { authenticate } = require('../config/jwt.config');

module.exports = (app) =>{

    app.get("/api/trails/users",authenticate, userCtrl.getUsers);
    app.post("/api/trails/user/register", userCtrl.registerUser);
    app.post("/api/trails/login", userCtrl.authUser);
    app.post("/api/trails/logout", userCtrl.logout);
    app.get("/api/trails/user/:id",authenticate, userCtrl.getLoggedInUser);
    app.put("/api/trails/user/:id", userCtrl.updateUserById);
    app.delete("/api/trails/user/:id", authenticate, userCtrl.deleteUser);
    app.get("/api/trails/user/loggedin", authenticate, userCtrl.getLoggedInUser);
};