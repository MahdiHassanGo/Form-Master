import { useEffect, useRef, useState } from "react";


const RefForm = () => {
  
const nameRef = useRef(null);
const emailRef= useRef(null);
const passRef= useRef(null);


useEffect   (()=>{
    nameRef.current.focus();
},[])
    const handleSubmit = e => {
        e.preventDefault();
    
    
      };
      

    return (
        <div>
            <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name"  />
        <br />
        <input ref={emailRef}  type="email" name="email"  id="" />
        <br />
        <input ref={passRef} type="password" name="password"  required/>
        <br />
        <input type="submit" value="submit" />
       
      </form>
        </div>
    );
};

export default RefForm;