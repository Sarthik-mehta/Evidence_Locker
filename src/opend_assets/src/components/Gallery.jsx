import React, { useEffect, useState } from "react";
import Item from "./Item";
import {Principal} from "@dfinity/principal";
import addEvidenceBgImg from '../assets/img/add-evidence-bg-img.png';
import addEvidenceBgImg2 from '../assets/img/add-evidence-bg-img2.jpg';

function Gallery(props) {

  const [items,setItems] = useState();

  function fetchNFTs(){
      if(props.ids!=undefined)
      {
        setItems(
          props.ids.map((NFTId)=>(
            <Item id ={NFTId} key = {NFTId.toText()}/>
          ))
        );
      }
  };

  useEffect(()=>{
    fetchNFTs(); 
  },[]);

  return (
    <div className="" style={{minHeight:"100vh",
      backgroundImage: `url(${addEvidenceBgImg2})`,
      width: "100%", height: "100vh", justifySelf: "auto", backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%", marginTop: "", position: "relative",
    }} >
      <h3 className="makeStyles-title-99 Typography-h3" style={{color:"black",fontFamily: 'Roboto'}}>{props.title}</h3>
      <div className="disGrid-root disGrid-container disGrid-spacing-xs-2" >
        <div className="disGrid-root disGrid-item disGrid-grid-xs-12">
          <div className="disGrid-root disGrid-container disGrid-spacing-xs-5 disGrid-justify-content-xs-center" >
          {/* <Item id = "rrkah-fqaaa-aaaaa-aaaaq-cai"/> */}
          {items}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
