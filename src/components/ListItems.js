import React from "react";
import { Link } from "react-router-dom";

let getDate = (note) => {
  return new Date(note?.updated).toLocaleDateString()
}

let getTitle =  (note) => {
  const title = note.body?.split('\n')[0]
  if(title?.lenght > 45){
    return title.slice(0, 45)
  }
  else{
    return title
  }
  
}


const ListItems = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h2> { getTitle(note) } </h2>
        <p> <span> {getDate(note)} </span> </p>
      </div>
    </Link>
  );
};

export default ListItems;
