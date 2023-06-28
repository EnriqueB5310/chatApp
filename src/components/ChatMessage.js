import React from 'react'

function ChatMessage(props) {
  
    const {text, uid, photoURL} = props.message;
    return (
        <>
<img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
<p>{text}</p>

</>
  )
}

export default ChatMessage