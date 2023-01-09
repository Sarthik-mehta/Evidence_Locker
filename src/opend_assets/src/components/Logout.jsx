import React, { Component, useEffect } from 'react';
import { opend } from "../../../declarations/opend";
import { useHistory } from 'react-router-dom';
import { Principal } from "@dfinity/principal";

function Logout(){
  const history = useHistory();
    
  async function logout(){
      await opend.setCurrentUser(Principal.fromText("2vxsx-fae"));
      console.log("Logout successfull");
      history.push("/");
  };

  useEffect(() => {
    logout();
  }, []);

    return (
      <div>
        <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
        <h1>Loging out...</h1>
      </div>
    )
}

export default Logout;