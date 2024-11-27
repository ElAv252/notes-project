import { Express, Request, Response } from "express";
import { HttpStatus } from "../common/enums/http-status";
import { InnerResponse } from "../common/interfaces/response.interface";
import NotesService from "./notes.service";
import { isString } from "class-validator";


class NotesController {

    app: Express;
    service: NotesService;
    innerResponse: InnerResponse;
    ROUTE_NAME: string;

    constructor(app: Express, routeName: string) {
        this.app = app;
        this.service = new NotesService();
        this.innerResponse = {
            message: "Success",
            status: HttpStatus.OK,
            data: null,
        };
      this.ROUTE_NAME = routeName;
    }

    public creeateNote(): void {
        this.app.post(`/${this.ROUTE_NAME}/createNote`, async (req: Request, res: Response) => {
            try {
                const title: string = req.body.title;
                const text: string = req.body.text;
                if (isString(title) && isString(text)) {
                    this.service.createNote(title, text);
                    this.innerResponse.message = "Note Created!";
                } else {
                    this.innerResponse.message = "Note not created";
                    this.innerResponse.status = HttpStatus.BAD_REQUEST;
                }
                res.status(this.innerResponse.status).send(this.innerResponse);
            } catch (err) {
                this.innerResponse.message = err?.toString()!;
                this.innerResponse.data = null;
                res.status(this.innerResponse.status = HttpStatus.NO_CONTENT).send(this.innerResponse);
            }
        });
    }

    public getAllNotes(): void {
        this.app.get(`/${this.ROUTE_NAME}/findAllNotes`, async (req: Request, res: Response) => {
            try {

                this.innerResponse.data = await this.service.getAllNotes()

                res.status(this.innerResponse.status = HttpStatus.CREATED).send(this.innerResponse);
            } catch (err) {
                this.innerResponse.message = err?.toString()!;
                res.status(this.innerResponse.status = HttpStatus.BAD_REQUEST).send(this.innerResponse);
            }
        });
    }

}


export default NotesController;
