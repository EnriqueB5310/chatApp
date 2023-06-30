import React, { useRef, useState } from 'react'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'; 
import ChatMessage from './ChatMessage';




function Chat({firestore, auth, firebase}) {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('Created').limit(5000);
  
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
      <main className='bg-zinc-200 min-h-screen '>

        {messages && messages.map(msg => <ChatMessage  key={msg.id} message={msg} />)}
 
        <span ref={dummy}></span>

      
  
      <form onSubmit={sendMessage}>
  
        <input className=" bg-gray-100 rounded-md placeholder-black fixed bottom-0 appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="chat" />
  
        <button type="submit" disabled={!formValue}></button>
  
      </form>
      </main>
    </>)
  }

export default Chat