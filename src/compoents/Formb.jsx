import React, { useState } from "react";
const formb =() =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
     const onClick2 = () =>{
        alert(name)
     }
    return(
        <div className="form-continer">
            <form>
                <div className="form-name">
                  <label htmlFor="Name">Name:</label>
                  <input type="text" placeholder="Name" onChange={
                    e => setName(e.target.value)
                  }/>
                </div>
              <div className="form-email">
                  <label htmlFor="Email">Email:</label>
                   <input type="email" placeholder="Email" onChange={
                    e => setEmail(e.target.value)
                   } />
              </div>
              <div className="form-message">
              <label htmlFor="message">Message:</label>
              <input type="text" placeholder="Message" onChange={
                e => setMessage(e.target.value)
              } />
              </div>
              
                <div className="but-but">
                <button type="button" onClick={
                   onClick2
                }>Submit</button>
                </div>
            </form>
        </div>
    );
        
    }
    export default formb;