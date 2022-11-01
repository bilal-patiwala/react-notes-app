import React from 'react'
import { Link, useParams } from 'react-router-dom';
import notes from '../assests/data';
import { ReactComponent as ArrowLeft } from "../assests/arrow.svg";

const NotePage = () => {
    const {id} = useParams()
    const note = notes.find(n => n.id === Number(id))
  return (
    <div className='note'>
        <div className='note-header'>
            <h3>
                <Link to='/'>
                    <ArrowLeft/>
                </Link>
            </h3>
        </div>

        <textarea value={note?.body}>

        </textarea>

    </div>
  )
}

export default NotePage