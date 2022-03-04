import React, { useState } from 'react'

const Header = ({ add }) => {

    const [text, setText] = useState('')

    return (
        <div>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => { add({ text: text, id: Math.random(), isDone: false }); setText('') }} >ADD</button>
        </div>
    )
}

export default Header