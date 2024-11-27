import { MyNote } from "../db/notes.scheme";

class NotesService {

    public createNote(title: string, text: string) {
        MyNote.create({
            title,
            text
        });
    }

     public async getAllNotes() {
        return await MyNote.find();
    }

    public deleteNote(noteID :number) {
        MyNote.deleteOne()
    }

}


export default NotesService;
