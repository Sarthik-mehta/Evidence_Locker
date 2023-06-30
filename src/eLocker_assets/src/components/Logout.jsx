import React, { Component, useEffect } from "react";
import { eLocker } from "../../../declarations/eLocker";
import { useHistory } from "react-router-dom";
import { Principal } from "@dfinity/principal";
import addEvidenceBgImg2 from "../assets/img/add-evidence-bg-img2.jpg";

function Logout() {
  const history = useHistory();

  async function logout() {
    await eLocker.setCurrentUser(Principal.fromText("2vxsx-fae"));
    console.log("Logout successfull");
    history.push("/");
  }

  useEffect(() => {
    logout();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        minHeight: "100vh",
        backgroundImage: `url(${addEvidenceBgImg2})`,
        width: "100%",
        height: "100vh",
        justifySelf: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        marginTop: "",
        position: "relative",
      }}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1>Loging out...</h1>
    </div>
  );
}

export default Logout;
