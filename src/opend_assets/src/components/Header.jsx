import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import homeImage from "../../assets/home-img2.png";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Minter from "./Minter";
import Gallery from "./Gallery";
import Home from "./Home";
import { opend } from "../../../declarations/opend";
import Registration from "./Registration";
import Login from "./Login";
import Logout from "./Logout";

function Header() {
  const [userOwnedGallery, setOwnedGallery] = useState();
  const [userSharedGallery, setSharedGallery] = useState();
  const [loggedIn, setLoggedIn] = useState();
  const [addEvidence, setAddEvidence] = useState();
  const [myEvidence, setMyEvidence] = useState();
  const [sharedEvidence, setSharedEvidence] = useState();

  async function getNFTs() {
    const CURRENT_USER_ID = await opend.getCurrentUser();
    if (CURRENT_USER_ID != "2vxsx-fae") {
      setLoggedIn(
        <button className="ButtonBase-root Button-root Button-text header-navButtons-3" >
          <Link to="/logout"> <b style={{color:"white",fontFamily: 'Roboto'}}>Logout</b></Link>
        </button>
      );
      setAddEvidence(
        <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
          <Link to="/minter"><b style={{color:"white",fontFamily: 'Roboto'}}>Add Evidence</b></Link>
        </button>
      );
      setMyEvidence(
        <button className="ButtonBase-root Button-root Button-text header-navButtons-3" >
          <Link to="/collection"><b style={{color:"white",fontFamily: 'Roboto'}}>My Evidences</b></Link>
        </button>
      );
      setSharedEvidence(
        <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
          <Link to="/shared_gallery"><b style={{color:"white",fontFamily: 'Roboto'}}>Shared Evidences</b></Link>
        </button>
      );
    } else {
      setLoggedIn(
        <div>
          <button className="ButtonBase-root Button-root Button-text header-navButtons-3" >
            <Link to="/registration"><b style={{color:"white",fontFamily: 'Roboto'}}>Register</b></Link>
          </button>

          <button className="ButtonBase-root Button-root Button-text header-navButtons-3" >
            <Link to="/login"><b style={{color:"white",fontFamily: 'Roboto'}}>Login</b></Link>
          </button>
        </div>
      );
      setAddEvidence();
      setMyEvidence();
    }
    const userNFTIds = await opend.getOwnedNFTs(CURRENT_USER_ID);
    console.log(userNFTIds);

    const userSharedNFTIds = await opend.getSharedNFTs(CURRENT_USER_ID);

    setOwnedGallery(<Gallery title="My Evidences" ids={userNFTIds} />);
    setSharedGallery(
      <Gallery title="Evidences shared with me" ids={userSharedNFTIds} />
    );
  }

  useEffect(() => {
    getNFTs();
  }, []);

  return (
    <BrowserRouter forceRefresh={true}>
      <div className="app-root-1">
        <header className="Paper-root AppBar-root AppBar-positionStatic AppBar-colorPrimary Paper-elevation4" style={{
        background: "linear-gradient(180deg, #0F0029 0%, rgba(54,0,156,255) 2.6%, rgba(11,0,34,255) 100%)", borderBottom:"0 px solid black"
      }}>
          <div className="Toolbar-root Toolbar-regular header-appBar-13 Toolbar-gutters">
            <div className="header-left-4"></div>
            {/* <img className="header-logo-11" src={logo} />
            <div className="header-vertical-9"></div> */}
            <Link to="/">
              <h5 className="Typography-root header-logo-text" style={{color:"white",fontFamily: 'Roboto'}}>
               <b>Evidence Locker</b>
              </h5>
            </Link>
            <div className="header-empty-6"></div>
            <div className="header-space-8"></div>
            {addEvidence}
            {myEvidence}
            {sharedEvidence}
            {loggedIn}
          </div>
        </header>
      </div>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/registration">
          <Registration />
          {/* <button onClick={createUser}>Create User</button> */}
        </Route>
        <Route path="/minter">
          <Minter />
        </Route>
        <Route path="/collection">{userOwnedGallery}</Route>
        <Route path="/shared_gallery">{userSharedGallery}</Route>
        <Route path="/">
          {/* <img className="bottom-space" src={homeImage} /> */}

          {/* <Home/>  can add our custom home component*/}
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
