import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { opend } from "../../../declarations/opend";
import Item from "./Item";

import { encrypt,decrypt } from "../aes";


function Minter() {

  const {register,handleSubmit} = useForm();
  const [nftPrincipal, setNftPrincipal] = useState("");
  const [loaderHidden,setLoaderHidden] = useState(true);

  async function onSubmit(data){
    setLoaderHidden(false);
    const name = data.name;
    const image = data.image[0];
    const cname = data.cName;
    const imageArray = await image.arrayBuffer();
    const imageByteData = [...new Uint8Array(imageArray)];
    const imageByteDataString = imageByteData.toString();
    const encryptedImageString = await encrypt(imageByteDataString);

    console.log("from minter",encryptedImageString);

    let newNFTID = await opend.mint(imageByteData,encryptedImageString, name,cname);
    console.log(newNFTID.toText());
    setNftPrincipal(newNFTID);
    setLoaderHidden(true);
  };


  if(nftPrincipal == ""){
  return (
    <div className="minter-container">
      <div hidden= {loaderHidden} className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h3 className="makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
        Submit Evidence
      </h3>
      <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
        Upload Image
      </h6>
      <form className="makeStyles-form-109" noValidate="" autoComplete="off">
        <div className="upload-container">
          <input
            {...register("image",{required:true})}
            className="upload"
            type="file"
            accept="image/x-png,image/jpeg,image/gif,image/svg+xml,image/webp"
          />
        </div>
        <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
          Evidence details
        </h6>
        <div className="form-FormControl-root form-TextField-root form-FormControl-marginNormal form-FormControl-fullWidth">
          <div className="form-InputBase-root form-OutlinedInput-root form-InputBase-fullWidth form-InputBase-formControl">
            <input
              {...register("name",{required:true})}
              placeholder="e.g. Evidence #14"
              type="text"
              className="form-InputBase-input form-OutlinedInput-input"
            />
            <fieldset className="PrivateNotchedOutline-root-60 form-OutlinedInput-notchedOutline"></fieldset>
          </div>
        </div>

        {/* Testing  */}
        <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
          Case details
        </h6>
        <div className="form-FormControl-root form-TextField-root form-FormControl-marginNormal form-FormControl-fullWidth">
          <div className="form-InputBase-root form-OutlinedInput-root form-InputBase-fullWidth form-InputBase-formControl">
            <input
              {...register("cName",{required:true})}
              placeholder="e.g. Case #27"
              type="text"
              className="form-InputBase-input form-OutlinedInput-input"
            />
            <fieldset className="PrivateNotchedOutline-root-60 form-OutlinedInput-notchedOutline"></fieldset>
          </div>
        </div>
        {/* Testing */}
        <div className="form-ButtonBase-root form-Chip-root makeStyles-chipBlue-108 form-Chip-clickable">
          <span onClick={handleSubmit(onSubmit)} className="form-Chip-label">Add Evidence</span>
        </div>
      </form>
    </div>
  );

  }else{
    return(
    <div className="minter-container">
        <h3 className="Typography-root makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
          Evidence Stored <br></br> ( Minted Successfully )
        </h3>
        <div className="horizontal-center">
          <Item id = {nftPrincipal.toText()}/>
        </div>
      </div>
    );
  }

}

export default Minter;
