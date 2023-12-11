const logger = require("./logger");
const express = require("express");
const authentication = require("./authenticator")
const helmet = require("helmet")
const morgan = require("morgan")
require("dotenv").config();
const startupdebug = require("debug")("startup");
const app = express();
const CoursesRoute = require('./routes/courses_routes')
const HomeRoutes= require("./routes/home_routes")
app.use(express.json());
app.use(logger);
startupdebug("helllllo from startupdebuuuuug")
app.use(authentication);
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(helmet());
if (app.get("env") === "development") {
app.use(morgan("combined"));}


app.use("/api/courses" , CoursesRoute);
app.use("/api", HomeRoutes)

const port = process.env.AppPort || 3000
 app.listen(port, ()=>{
    console.log(`we are listening to port ${port}`)
 })