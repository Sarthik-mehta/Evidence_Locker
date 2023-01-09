import React, { Component, useState } from 'react';
import { opend } from "../../../declarations/opend";
import { useHistory } from 'react-router-dom';

function Login(){
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

  let redirectToRegister = ()=>{
    history.push("/registration");
  };

  let handleSubmit = async (e)=>{
    setLoaderHidden(false);
    let newUser = await opend.loginUser(username,password);
    
    if(newUser!="2vxsx-fae"){
      console.log("Login Successfull");
      await opend.setCurrentUser(newUser);
      history.push("/minter");
    }
    else{
      console.log("Failed Login");
    }
  };

    return (
      <div className='login'>
        <div hidden= {loaderHidden} className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
        <h1 className="makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">Login</h1>
      <form className="makeStyles-form-109 registration-form" action="">
      <label for="username">Userame:</label>
          <input type="text" id="username" name="username" onChange={usernameOnchange} value={username}/>
          <label for="fname">Password:</label>
          <input type="Password" id="Password" name="password" onChange={passwordOnchange} value={password}/>
          <input type="button" onClick={handleSubmit} value="Login"/>
      </form>
      <h4>Not Registered? Click here for </h4>
      <button className='form-button'  onClick={redirectToRegister}>Registeration</button>
      </div>
    )
}

export default Login;