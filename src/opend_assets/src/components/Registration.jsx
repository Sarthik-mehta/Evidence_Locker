import React, { Component, useState } from 'react';
import { opend } from "../../../declarations/opend";
import { useHistory } from 'react-router-dom';

function Registration() {
  const history = useHistory();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [loaderHidden,setLoaderHidden] = useState(true);
    let usernameOnchange = (e)=>{
        
        setUsername(e.target.value);
        
    };
    let passwordOnchange = (e)=>{
        
      setPassword(e.target.value);
  };

  let redirectToLogin = ()=>{
    history.push("/login");
  }

  let handleSubmit = async (e)=>{
    setLoaderHidden(false);
    let newUser = await opend.createUser(username,password);
    // if(newUser == "success"){
    //   console.log("Successfull");
    //   history.push("/minter");
    // }
    if(newUser!="2vxsx-fae"){
      console.log("Successfull");
      // await opend.setCurrentUser(newUser);
      history.push("/login");
    }
    else{
      console.log("Failed");
    }
  };

    return (
      <div className='registeration'>
        <div hidden= {loaderHidden} className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
        <h1 className="makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">Registration</h1>
      <form className="makeStyles-form-109 registration-form" noValidate="" autoComplete="off">
          <label for="fname">Set Userame:</label>
          <input type="text" id="username" name="username" onChange={usernameOnchange} value={username} placeholder="username"/>
          <label for="fname">Set Password:</label>
          <input type="Password" name="password" onChange={passwordOnchange} value={password} placeholder="Password"/>
          <input type="button"  onClick={handleSubmit} value="Register"/>
      </form>
      <h4>Already Registered? Click here for </h4>
      <button className='form-button' onClick={redirectToLogin}>Login</button>
      </div>
    )
};

export default Registration;

