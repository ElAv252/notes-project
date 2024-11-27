import bodyParser from "body-parser";
import { config } from "dotenv";
import express, { Express } from "express";
import routesBind from "./src/routs";
import AuthController from "./src/auth/auth.contorller";
import cors from "cors";
import NotesController from "./src/notes/notes.controller";
import dbConnection from "./src/db/db-config";

const app: Express = express();

config();
app.use(cors())
app.use(bodyParser.json());

// The connection to the DB
dbConnection()

// middleware
app.use((req, res, next) => {
    console.log("MiddleWare")
    next();
})

// Routs
routesBind([
    new AuthController(app, "auth"),
    new NotesController(app, "notes")
]);


app.listen(process.env.PORT, () => {
    console.log(`server run on port: ${process.env.PORT}`);
});
