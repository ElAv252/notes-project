import { useEffect, useState } from "react"

function Notes() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function getNotes() {

            try {
                const notes = await fetch("http://localhost:3000/notes/findAllNotes", {
                    method:"GET",
                    "mode": "no-cors"
                });
                // const notesJSON = await notes.json();
                console.log(notes)
                // setNotes(notesJSON.data);
            }
            catch (err) {
                console.error(err);
            }
        }
        getNotes().catch(()=>console.error("ERROR"))
    });

  return (
    <div>
        {
         notes.map((value:{
                        _id: string;
                        title: string;
                        text: string;
                        __v: number;
                    }, index: number )=> {
                        return (
                            <div key={index}>
                                <h1>
                                    {value.title}
                                </h1>
                                <p>
                                    {value.text}
                                </p>
                            </div>)
                    })
        }
    </div>
  )
}

export default Notes;
