import React from "react";
import { Link } from "react-router-dom";

let getTitle =  (note) => {
  let title = note?.body?.split('\n')[0]
  if(title?.lenght > 45){
    return title.slice(0, 45)
  }
  return title
}

const ListItems = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h2> { getTitle(note) } </h2>
      </div>
    </Link>
  );
};

export default ListItems;
