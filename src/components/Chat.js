import React, { useRef, useState } from 'react'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'; 
import ChatMessage from './ChatMessage';




function Chat({firestore, auth, firebase}) {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('Created').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        Created: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main className='bg-green'>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="chat" />
  
        <button type="submit" disabled={!formValue}></button>
  
      </form>
    </>)
  }

export default Chat