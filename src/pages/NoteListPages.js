import React from 'react'
import notes from '../assests/data'
import ListItems from '../components/ListItems'
const NoteListPages = () => {
  return (
    <div className='notes'>
        <div className='notes-header'>
            <h2 className='notes-title'>&#9782; Notes</h2>
            <p className='notes-count'>{notes.length}</p>
        </div>
        <div className='notes-list'>
            {
                notes.map((note, index) => (
                   <ListItems key={index} note={note}/>
                ))
            }
        </div>
    </div>
  )
}

export default NoteListPages