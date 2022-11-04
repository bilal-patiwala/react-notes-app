import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import notes from '../assests/data';
import { ReactComponent as ArrowLeft } from "../assests/arrow.svg";

const NotePage = ({ history }) => {
  let [note, setNote] = useState(null);
  let { id } = useParams();
  let navigate = useNavigate();

  let getNote = async () => {
    if(id === "new") return
    let response = await fetch(`http://localhost:8081/notes/${id}`);
    let data = await response.json();
    setNote(data);
  };

  useEffect(() => {
    getNote();
  }, [id]);

  let updateNote = async (event) => {
    if (id !== "new") {
      await fetch(`http://localhost:8081/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...note, updated: new Date() }),
      });
    }
    else if(id === 'new' && note != null){
        await fetch(`http://localhost:8081/notes/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...note, updated: new Date() }),
      });
    }
  };

  let submitNote = () => {
    updateNote();
    navigate("/");
  };

  let deleteNote = async () => {
    await fetch(`http://localhost:8081/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
        <button onClick={submitNote}>Save</button>
        { id !== 'new' ? (
            <button onClick={deleteNote}>Delete</button>
        ) : null}
      </div>

      <textarea
        onChange={(event) => setNote({ ...note, body: event.target.value })}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
