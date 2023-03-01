const {Router} = require("express");

const usersRoutes = require("./users.routes.js");
const notesRoutes = require("./notes.routes.js");
const tagsRouter = require("./tags.routes.js")
const sessionsRouter = require("./sessions.routes")

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRouter)
routes.use("/notes", notesRoutes)
routes.use("/tags", tagsRouter)

module.exports = routes