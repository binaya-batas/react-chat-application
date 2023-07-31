import React from 'react'
import UsersList from '../components/UsersList'
import MessageList from '../components/MessageList'
import MessageBox from '../components/MessageBox'
import './chat.css';

const Chat = () => {
  return (
    <div className="chat">
        <div className="chat__left">
            <UsersList />
        </div>
        <div className="chat__right">
            <MessageList />
            <MessageBox />
        </div>
    </div>
  )
}

export default Chat