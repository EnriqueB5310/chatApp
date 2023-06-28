import React from 'react'

function ChatMessage(props) {
  
    const {text, uid, photoURL} = props.message;
    return (
<p>{text}</p>
  )
}

export default ChatMessage