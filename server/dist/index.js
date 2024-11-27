"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const routs_1 = __importDefault(require("./src/routs"));
const auth_contorller_1 = __importDefault(require("./src/auth/auth.contorller"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
(0, dotenv_1.config)();
app.use((0, cors_1.default)());
// app.use(bodyParser)
// middleware
app.use(() => {
    console.log("MiddleWare");
});
// Routs
(0, routs_1.default)([
    new auth_contorller_1.default(app, "auth")
]);
app.listen(process.env.PORT, () => {
    console.log(`server run on port: ${process.env.PORT}`);
});
