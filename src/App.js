//import logo from './logo.svg';
import React, {useState} from "react";
import Display from "./components/Display";
import Header from "./components/Header";
import TextArea from "./components/TextArea";
import Footer from "./components/Footer";

function App() {

  // * Delete Notes from from Display area
  const onDelete = (note)=>{
    setNotes(notes.filter((e)=>{
        return e!==note;
    }))
  }
  // * Adding notes inserted from texterea into usestate 
  const addNote = (title, desc)=>{
    const myNote = {
      title:title,
      desc:desc,
    }
    setNotes([...notes, myNote]);
  }
  // * usestate for transfering notes to displayarea
  const[notes, setNotes] =useState([ 
    // {
    // title: "shopping",
    // desc:"Buy cloths"
    // },
    // {
    // title: "Study",
    // desc: "Read some books",
    // }
  ]);
  
  return (
    <>
      <Header title="My Notes" />
      <TextArea addNote = {addNote}/>
      <Display notes = {notes} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;


