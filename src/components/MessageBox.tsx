import React from 'react'

const MessageBox = () => {
  return (
    <div className="" style={{ border: '1px solid black', borderTop: 'none', height: '10%'}}>
        <form action="">
            <input type="text" placeholder='Type your message here' style={{ border: 'none', padding: '20px'}} />
            <button type='submit'>➡️</button>
        </form>
    </div>
  )
}

export default MessageBox