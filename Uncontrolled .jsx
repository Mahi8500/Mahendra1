import React, { useRef } from "react";

const Uncontrolled = ()=>{

    let name=useRef()
    let mail=useRef()
    let id=useRef()

    console.log(name);
    console.log(mail);
    console.log(id)

    let handledata=(e)=>{
        e.preventDefault()

        
        let username= name.current.value
        let useremail= mail.current.value
        let userid=mail.current.value
        console.log(username);
        console.log(useremail);
        console.log(userid)
    }



    return(
        <div>
        <form action="">
        <label htmlFor="">Name</label>
        <input type="text" ref={name}/><br />
    
        <label htmlFor="">Email</label>
        <input type="email" ref={mail}/><br />
        <label htmlFor="">Id</label>
        <input type="text" ref={id} /><br/>
        <button onClick={handledata}>submitt</button>
    
        </form>
        </div>
    )
}
export default Uncontrolled