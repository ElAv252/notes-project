import { isObject } from "class-validator";
import { readFileSync } from "fs";
import { sign } from "jsonwebtoken";
import { Credentials } from "../common/interfaces/auth.interface";
import { MyUser } from "../db/user.scheme";

class AuthService {

     constructor() {}

     public async signIn(credentials: Credentials): Promise<string | boolean> {
         try {
             const user = await MyUser.findOne({Email: credentials.email, password:credentials.password});
             let token: string = '';

            const userCredentials = {
                email: user?.Email,
                password: user?.password
            };
            const privateKey: string = readFileSync("rsaKeys/private.pem", "utf8");
            token = sign(userCredentials, privateKey, {algorithm: "RS512"});
            if (typeof token !== "string" && !token) return false;

             console.log(token);
             return token;
         } catch (err) {
             console.warn(err);
             return false;
         }
     }

 }

export default AuthService;
