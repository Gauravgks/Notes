//import logo from './logo.svg';
import React, {useState} from "react";
import Display from "./components/Display";
import Header from "./components/Header";
import TextArea from "./components/TextArea";
import Footer from "./components/Footer";

function App() {

  const [newnote, addnote] = useState([

  ]);
  return (
    <>
      <Header title="My Notes" />
      <TextArea />
      <Display />
      <Footer />
    </>
  );
}

export default App;
