const sha256 = require("js-sha256");

module.exports = db => {
    // Salt for Hash
    const SALT = "Too Much Salt Is Bad For Health";

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
    // Controllers for Creating New Users
    const newForm = (req, res) => {
        res.render("users/CreateUser", {
            cookies: req.cookies
        });
    };

    const createUser = (req, res) => {
        // use user model method `create` to create new user entry in db
        db.users.createUser(req.body, (err, queryResult) => {
            if (err) {
                console.log("Errror getting user:", err);
                res.sendStatus(500);
            }
            if (queryResult.rowCount >= 1) {
                console.log(queryResult)
                console.log("User created successfully");
                // redirect to home page after creation
                res.send("success")
            } else {
                console.log("User could not be created");
            }
        });
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        createUser
    };
}
