import React from "react";

export default function Footer() {
    return (
       <nav className="footer">
    
         <img className="twitter--logo" src="../logos/Twitter Icon.svg"></img>
         <img className="facebook--logo"  src="../logos/Facebook Icon.svg"></img>
         <img className="instagram--logo"  src="../logos/Instagram Icon.svg"></img>
         <img className="github--logo"  src="../logos/GitHub Icon.svg"></img>
      
       </nav>
    )
 }


 const names = ["alice", "bob", "charlie", "danielle"]
 const capitalized = names.map((name) => {
   return name[0].toUpperCase + name.slice(1)
 })

 console.log(capitalized)