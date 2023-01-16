import React from "react";


export default function Info() {
   return (
      <nav className="header">
         <img className="info--image" src="../images/_C2A0080.jpg"></img>
         <h1 className="nav--name">Angel Danchev</h1>
         <h4 className="nav--role">Frontend Developer</h4>
         <h6 className="nav--website">angeldanchev.com</h6>
         <button className="but--email"><img src="../logos/Mail.svg"></img>Email</button>
         <button className="but--linkedin"><img src="../logos/Vector.svg"></img>LinkedIn</button>
      </nav>
   )
}
