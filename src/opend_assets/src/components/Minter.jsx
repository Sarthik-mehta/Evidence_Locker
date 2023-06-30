import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import addEvidenceBgImg from '../assets/img/add-evidence-bg-img.png';
import addEvidenceBgImg1 from '../assets/img/add-evidence-bg-img1.png';

import { useForm } from "react-hook-form";
import { opend } from "../../../declarations/opend";

import Item from "./Item";

import { encrypt, decrypt } from "../aes";

function Minter() {
  const { register, handleSubmit } = useForm();
  const [nftPrincipal, setNftPrincipal] = useState("");
  const [loaderHidden, setLoaderHidden] = useState(true);
  const [users, setUsers] = useState(["1", "2"]);
  const [sharedUsers, setSharedUsers] = useState([]);

  async function onSubmit(data) {
    setLoaderHidden(false);
    const name = data.name;
    const image = data.image[0];
    const cname = data.cName;
    const imageArray = await image.arrayBuffer();
    const imageByteData = [...new Uint8Array(imageArray)];
    const imageByteDataString = imageByteData.toString();
    const encryptedImageString = await encrypt(imageByteDataString);

    console.log("from minter", encryptedImageString);

    let newNFTID = await opend.mint(
      imageByteData,
      encryptedImageString,
      name,
      cname,
      sharedUsers
    );
    console.log(newNFTID.toText());
    setNftPrincipal(newNFTID);
    setLoaderHidden(true);
  }

  async function fetchUsers() {
    var usersList = await opend.getUsers();
    console.log("called");
    setUsers(usersList);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (nftPrincipal == "") {
    return (
      <div className="" style={{
        backgroundImage: `url(${addEvidenceBgImg1})`,
        width: "100%", height: "100vh", justifySelf: "auto", backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%", marginTop: "", position: "relative"
      }}  >
        <div className="" style={{ marginLeft: "60%" }}>
        <div hidden={loaderHidden} className="lds-ellipsis" >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3 className="makeStyles-title-99 Typography-h3 form-Typography-gutterBottom" style={{marginRight:"40%"}}>
        <p style={{color:"black",fontFamily: 'Roboto'}}> Submit Evidence</p>
        </h3>
        <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
        <b style={{color:"black"}}>Upload Image</b>
        </h6>
        <form className="makeStyles-form-109" noValidate="" autoComplete="off">
          <div className="upload-container">
            <input
              {...register("image", { required: true })}
              className="upload"
              type="file"
              accept="image/x-png,image/jpeg,image/gif,image/svg+xml,image/webp"
            />
          </div>
          <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
          <b style={{color:"black"}}>Evidence details</b>
          </h6>
          <div className="form-FormControl-root form-TextField-root form-FormControl-marginNormal form-FormControl-fullWidth">
            <div className="form-InputBase-root form-OutlinedInput-root form-InputBase-fullWidth form-InputBase-formControl" style={{width:"50%"}}>
              <input
                {...register("name", { required: true })}
                placeholder="e.g. Evidence #14"
                type="text"
                className="form-InputBase-input form-OutlinedInput-input"
                style={{color:"black"}} 
              />
              <fieldset className="PrivateNotchedOutline-root-60 form-OutlinedInput-notchedOutline"></fieldset>
            </div>
          </div>

          {/* Testing  */}
          <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
            <b style={{color:"black"}}>Case details</b>
          </h6>
          <div className="form-FormControl-root form-TextField-root form-FormControl-marginNormal form-FormControl-fullWidth">
            <div className="form-InputBase-root form-OutlinedInput-root form-InputBase-fullWidth form-InputBase-formControl" style={{width:"50%"}}>
              <input
                {...register("cName", { required: true })}
                placeholder="e.g. Case #27"
                type="text"
                className="form-InputBase-input form-OutlinedInput-input"  
                style={{color:"black"}}              
              />
              <fieldset className="PrivateNotchedOutline-root-60 form-OutlinedInput-notchedOutline"></fieldset>
            </div>
          </div>
          {/* Testing */}
          <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
          <b style={{color:"black"}}>Share the case details with other users</b>
          </h6>
          <Autocomplete
            disablePortal
            multiple
            options={users}
            sx={{ width: "50%", color: "black" }}
            renderInput={(params) => (
              <TextField {...params} label="Add user" style={{backgroundColor: 'white' }} />
            )}
            onChange={(_event, value) => {
              setSharedUsers(value);
            }}
            
          />
          {/* Testing */}
          <div className="form-ButtonBase-root form-Chip-root makeStyles-chipBlue-108 form-Chip-clickable" style={{backgroundColor:"  rgb(54, 0, 156)",marginRight:"50%"}}>
            <span onClick={handleSubmit(onSubmit)} className="form-Chip-label">
            <b style={{color:"white"}}>Add Evidence</b>
            </span>
          </div>
        </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="minter-container">
        <h3 className="Typography-root makeStyles-title-99 Typography-h3 form-Typography-gutterBottom" style={{color:"white"}}>
          Evidence Stored <br></br> ( Minted Successfully )
        </h3>
        <div className="horizontal-center">
          <Item id={nftPrincipal.toText()} />
        </div>
      </div>
    );
  }
}

export default Minter;
