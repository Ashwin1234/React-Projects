import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import ToDo from './ToDo'
import { Button, FormControl, Input, InputLabel, FormHelperText} from '@material-ui/core';
import './App.css';
import db from './firebase'
import firebase from 'firebase'

function App() {
  var [todos,setState]=useState([])
  var [input,setInput]=useState('')

  useEffect(()=>{
    db.collection('ToDo').onSnapshot(snapshot =>{
        console.log(snapshot.docs.map(doc => doc.data().tasks))
        setState(snapshot.docs.map(doc => ({id:doc.id,task:doc.data().tasks})))
    })
  },[])

  const addTodo = (event)=>{
    
    event.preventDefault() //prevent the the page from reloading after from submit
    db.collection('ToDo').add({
      tasks : input,
      //timestamp : timestamp
    })
    //setState([...todos,input])
    setInput('') 
  }

  //useEffect is called when the app.js is refreshed
  


  return(
    <>
    <div className="App">
    <ul>
    {
      todos.map(todo=>(
       <ToDo text={todo}/>
      ))
    }
    </ul>
    <FormControl>
    <InputLabel htmlFor="my-input">Task</InputLabel>
    <Input value={input} aria-describedby="my-helper-text" onChange={event=>setInput(event.target.value)}/>
    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>Add to ToDo</Button>
    </FormControl>
    </div>
    </>
  )
}

export default App;
