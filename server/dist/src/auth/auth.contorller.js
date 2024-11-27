"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = require("../common/enums/http-status");
const auth_service_1 = __importDefault(require("./auth.service"));
class AuthController {
    constructor(app, routeName) {
        this.app = app;
        this.service = new auth_service_1.default();
        this.innerResponse = {
            message: "Success",
            status: http_status_1.HttpStatus.OK,
            data: null,
        };
        this.ROUTE_NAME = routeName;
    }
    signIn() {
        this.app.post(`/${this.ROUTE_NAME}/signIn`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                // const token: string | boolean = await this.service.signIn(req.body);
                // if (typeof token === "string") this.innerResponse.data = token;
                // console.log(token)
                res.status(this.innerResponse.status).send(this.innerResponse);
                console.log(123);
            }
            catch (err) {
                this.innerResponse.message = err === null || err === void 0 ? void 0 : err.toString();
                this.innerResponse.data = null;
                res.status(this.innerResponse.status = http_status_1.HttpStatus.NO_CONTENT).send(this.innerResponse);
            }
        }));
    }
    signUp() {
        this.app.post(`/${this.ROUTE_NAME}/signUp`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                // const user: boolean | string[] = await this.service.signUp(req.body);
                // this.innerResponse.data = user;
                this.innerResponse.message = "You signup was successfully";
                // if (Array.isArray(user) && user.length > 0 || !user) throw new Error("An error occurred").message;
                res.status(this.innerResponse.status = http_status_1.HttpStatus.CREATED).send(this.innerResponse);
            }
            catch (err) {
                this.innerResponse.message = err === null || err === void 0 ? void 0 : err.toString();
                res.status(this.innerResponse.status = http_status_1.HttpStatus.BAD_REQUEST).send(this.innerResponse);
            }
        }));
    }
}
exports.default = AuthController;
