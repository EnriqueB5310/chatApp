import React from 'react'

function ChatMessage(props) {
  
    const {text, uid, photoURL} = props.message;
    return (
        <div className='flex  '>
<img className='object-scale-down h-8' src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
<p className='pl-3 pt-1'>{text}</p>

</div>
  )
}

export default ChatMessage