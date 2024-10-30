import { useState } from "react";

const StatefulForm = () => {


    const [email,setEmail]= useState(null);
    const [password,setPassword] =useState(null);



  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const handleEmailChange = e =>{

     setEmail(e.target.value);
  }
  const handlePassChange = e =>{
    setPassword(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value="" id=""/>
        <br />
        <input onChange={handleEmailChange}
         type="email" name="email" id="" />
        <br />
        <input onChange={handlePassChange}
         type="password" name="password" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default StatefulForm;
