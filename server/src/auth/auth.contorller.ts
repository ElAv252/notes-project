import { Express, Request, Response } from "express";
import { HttpStatus } from "../common/enums/http-status";
import { InnerResponse } from "../common/interfaces/response.interface";
import AuthService from "./auth.service";


class AuthController {

    app: Express;
    service: AuthService;
    innerResponse: InnerResponse;
    ROUTE_NAME: string;

    constructor(app: Express, routeName: string) {
        this.app = app;
        this.service = new AuthService();
        this.innerResponse = {
            message: "Success",
            status: HttpStatus.OK,
            data: null,
        };
      this.ROUTE_NAME = routeName;
    }

    public signIn(): void {
        this.app.post(`/${this.ROUTE_NAME}/signIn`, async (req: Request, res: Response) => {
            try {
                const token: string | boolean = await this.service.signIn(req.body);

                if (typeof token === "string") this.innerResponse.data = token;
                console.log(token)
                res.status(this.innerResponse.status).send(this.innerResponse);
            } catch (err) {
                this.innerResponse.message = err?.toString()!;
                this.innerResponse.data = null;
                res.status(this.innerResponse.status = HttpStatus.NO_CONTENT).send(this.innerResponse);
            }
        });
    }

    public signUp(): void {
        this.app.post(`/${this.ROUTE_NAME}/signUp`, async (req: Request, res: Response) => {
            try {

                // const user: boolean | string[] = await this.service.signUp(req.body);
                // this.innerResponse.data = user;
                this.innerResponse.message = "You signup was successfully";

                // if (Array.isArray(user) && user.length > 0 || !user) throw new Error("An error occurred").message;

                res.status(this.innerResponse.status = HttpStatus.CREATED).send(this.innerResponse);
            } catch (err) {
                this.innerResponse.message = err?.toString()!;
                res.status(this.innerResponse.status = HttpStatus.BAD_REQUEST).send(this.innerResponse);
            }
        });
    }

}


export default AuthController;
