import React from "react";


export default function Footer() {
    let footerstyle = {
        position : "relative",
        top: "90.6vh",
        width : "100%",
        backgroundColor: "#41bc70c4",
        padding : "10px"
    }
  return (
   <footer className = " text-light py-1.5" style = {footerstyle}>
       <p className="text-center">
       copyright &copy; GAURAV KUMAR SINGH
       </p>
       
   </footer>
  );
}
