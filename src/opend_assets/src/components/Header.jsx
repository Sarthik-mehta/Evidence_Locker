import React, {useEffect, useState} from "react";
import logo from "../../assets/logo.png";
import homeImage from "../../assets/home-img2.png";
import { BrowserRouter,Link,Switch,Route } from "react-router-dom";
import Minter from "./Minter";
import Gallery from "./Gallery";
import { opend } from "../../../declarations/opend"; 
import CURRENT_USER_ID from "../index";
import Home from "./Home";
// import { opend } from "../../../declarations/opend/index";

function Header() {

  const [userOwnedGallery,setOwnedGallery] = useState();

  async function getNFTs(){
    const userNFTIds = await opend.getOwnedNFTs(CURRENT_USER_ID);
    console.log(userNFTIds);
    setOwnedGallery(<Gallery title="My Evidences" ids = {userNFTIds}/>);
  };

  useEffect(() => {
    getNFTs();
  }, []);
  

  return (

    <BrowserRouter forceRefresh = {true}>
    <div className="app-root-1">
      <header className="Paper-root AppBar-root AppBar-positionStatic AppBar-colorPrimary Paper-elevation4">
        <div className="Toolbar-root Toolbar-regular header-appBar-13 Toolbar-gutters">
          <div className="header-left-4"></div>
          <img className="header-logo-11" src={logo} />
          <div className="header-vertical-9"></div>
          <Link to="/">
          <h5 className="Typography-root header-logo-text">Evidence Locker</h5>
          </Link>
          <div className="header-empty-6"></div>
          <div className="header-space-8"></div>
          <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
            <Link to="/discover">
            Discover
            </Link>
          </button>
          <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
          <Link to="/minter">
            Add Evidence
            </Link>
          </button>
          <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
          <Link to="/collection">
            My Evidences
            </Link>
          </button>
        </div>
      </header>
    </div>

    <Switch>
      <Route path="/discover">
        <h1>Discover</h1>
      </Route>
      <Route path="/minter">
        <Minter/>
      </Route>
      <Route path="/collection">
        {userOwnedGallery}
      </Route>
      <Route path="/">
        {/* <img className="bottom-space" src={homeImage} /> */}
        <Home/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default Header;