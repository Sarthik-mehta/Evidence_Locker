import React, { Component, useState } from "react";
import { eLocker } from "../../../declarations/eLocker";
import { useHistory } from "react-router-dom";

function Registration() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loaderHidden, setLoaderHidden] = useState(true);
  let usernameOnchange = (e) => {
    setUsername(e.target.value);
  };
  let passwordOnchange = (e) => {
    setPassword(e.target.value);
  };

  let redirectToLogin = () => {
    history.push("/login");
  };

  let handleSubmit = async (e) => {
    setLoaderHidden(false);
    let newUser = await eLocker.createUser(username, password);
    // if(newUser == "success"){
    //   console.log("Successfull");
    //   history.push("/minter");
    // }
    if (newUser != "2vxsx-fae") {
      console.log("Successfull");
      // await eLocker.setCurrentUser(newUser);
      history.push("/login");
    } else {
      console.log("Failed");
    }
  };

  return (
    <div
      className="registeration"
      style={{
        backgroundColor: "rgb(214, 239, 255)",
        margin: "0em",
        minHeight: "100vh",
      }}>
      <div hidden={loaderHidden} className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1
        className="makeStyles-title-99 Typography-h3 form-Typography-gutterBottom"
        style={{ fontFamily: "Roboto" }}>
        Registration
      </h1>
      <form
        className="makeStyles-form-109 registration-form"
        noValidate=""
        autoComplete="off">
        <label for="fname" style={{ color: "black" }}>
          Set Userame:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={usernameOnchange}
          required
          value={username}
          placeholder="Username"
          style={{ color: "black" }}
        />
        <label for="fname" style={{ color: "black" }}>
          Set Password:
        </label>
        <input
          type="Password"
          name="password"
          onChange={passwordOnchange}
          required
          value={password}
          placeholder="Password"
          style={{ color: "black" }}
        />
        <input
          type="button"
          onClick={handleSubmit}
          value="Register"
          style={{ color: "white" }}
        />
      </form>
      <h4>Already Registered? </h4>
      <button className="form-button" onClick={redirectToLogin}>
        Click here for Login
      </button>
    </div>
  );
}

export default Registration;
