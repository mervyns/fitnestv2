module.exports = (app, db) => {
  const users = require("./controllers/users")(db);

app.post("/api/signup", users.createUser)

}