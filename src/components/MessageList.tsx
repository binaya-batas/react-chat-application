import React from 'react'
import { RootState } from '../app/store'
import { useSelector } from 'react-redux'

const MessageList = () => {
  const messages = useSelector((state: RootState) => state.message.messages)

  return (
    <div 
    style={{ 
        border: '1px solid black',
        height: '90%', 
        display: 'flex',
        paddingInline: '10px'    
        }}
    >
        {
          messages.map((message) => (
            <div>
              <span>{message.sender} : </span>
              <span>{message.message}</span>
            </div>
          ))
        }
    </div>  
  )
}

export default MessageList