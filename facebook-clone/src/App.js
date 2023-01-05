import './App.css';
import {useEffect, useState} from "react";
import {FormControl,Input} from '@mui/material';
import Message from "./Message";
import db from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FlipMove from "react-flip-move";
import fb from './fb.png'
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

function App() {
    const[input,SetInput]=useState('');
    const[message,SetMessage]=useState(
        [{userName:"Hems",message:"hello guys"},
            {userName: "Elon",message: "kill earth"}]);
    const[userName,setUserName]=useState('');
    useEffect(()=>{
        setUserName(prompt("Enter your name : "))
    },[])

    useEffect(()=>{
        db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
            SetMessage(snapshot.docs.map(doc=>doc.data()))
        })
    },[])
    const SendMessage = (event) =>{
        event.preventDefault();

         db.collection('messages').add({
             m:input,
             userName:userName,
             timestamp:firebase.firestore.FieldValue.serverTimestamp()
         })
        SetInput('');
    }
  return (
    <div className="App">
        <img src={fb}  width="200px" height="200px" alt=""/>
      <h1>Facebook Messenger Clone !!</h1>
        <h2>welcome {userName}</h2>
        {/*here we are setting the initial state as permanent state where user cannot type anything..*/}
        <form className="app__form">
            <FormControl className="app__formControl">
                <Input className="app__input" placeholder="Enter the message: " value={input} onChange={event => SetInput(event.target.value)}/>
                <IconButton className="app__iconB" disabled={!input} color="primary" variant="contained" type="submit" onClick={SendMessage}>
                    <SendIcon/>
                </IconButton>
            </FormControl>
        </form>
        <FlipMove>
            {
                message.map(m=>(
                    <Message userName={userName} m={m}/>
                ))
            }
        </FlipMove>
    </div>
  );
}

export default App;
