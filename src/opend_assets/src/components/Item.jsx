import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import {Actor,HttpAgent} from "@dfinity/agent";
import {idlFactory} from "../../../declarations/nft";
import { Principal } from "@dfinity/principal";
import { decrypt } from "../aes";

function Item(props) {

  const [name,setName] = useState();
  const [cName,setCName] = useState();
  const [owner,setOwner] = useState();
  const [image,setImage] = useState();

  const id = props.id;
  const localHost = "http://localhost:8080/";
  const agent = new HttpAgent({host: localHost});

  async function loadNFT(){
    const NFTActor = await Actor.createActor(idlFactory,{
      agent,
      canisterId: id,
    })

    const name = await NFTActor.getName();
    const caseName = await NFTActor.getCaseName();
    const owner = await NFTActor.getOwner();
    const imageData = await NFTActor.getAsset();
    const imageDataString = await NFTActor.getAssetString();
    // const imageDataArray = await  imageDataString.split(',');
    // const img =  imageDataArray.map(Number);
    const decryptedImageData =await decrypt(imageDataString).split(',').map(Number);

    const imageContent = new Uint8Array(decryptedImageData);
    const image = URL.createObjectURL(new Blob([imageContent.buffer],{type:"image/png"}));

    setOwner(owner.toText());
    setCName(caseName);
    setName(name);
    setImage(image);

  }

  useEffect(()=>{
    loadNFT();
  },[]);

  return (
    <div className="disGrid-item" style={{backgroundColor:"rgba(0,0,0,0.0)"}}>
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded" style={{backgroundColor:"rgba(0,0,0,0.1)"}}>
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={image}
        />
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom" style={{color:"black"}}>
            {name} <span className="purple-text"></span>
          </h2>
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom" style={{color:"black"}}>
            {cName} <span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary" style={{color:"black"}}>
            Owner: {owner}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
