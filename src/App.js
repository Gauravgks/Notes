//import logo from './logo.svg';
import "./App.css";
import Display from "./components/Display";
import Header from "./components/Header";
import TextArea from "./components/TextArea";
import Footer from "./components/Footer";

function App() {
  // let note = "";
  return (
    <>
      <Header title = "My Notes"/>
      <TextArea value = ""/>
      <Display/>
      <Footer/>
    </>
  );
}

export default App;
