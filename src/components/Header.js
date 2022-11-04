import React from "react"

const Header = () => {
    const header = {
        fontSize : '2em',
        padding : '10px 16px'
    }
    return (
        <div>
            <h1 style={header} >Notes List</h1>
        </div>
    )
}

export default Header