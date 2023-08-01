import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../features/messageSlice'

const MessageBox = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  return (
    <div className="" style={{ border: '1px solid black', borderTop: 'none', height: '10%'}}>
        <form action="">
            <input 
              type="text" 
              placeholder='Type your message here' 
              style={{ border: 'none', padding: '20px'}} 
              onChange={(e) => setText(e.target.value)}
              />
            <button
              onClick={(e) => {
                e.preventDefault()
                dispatch(addMessage({message: text, sender: 'me'}))
              }}
            >➡️</button>
        </form>
    </div>
  )
}

export default MessageBox