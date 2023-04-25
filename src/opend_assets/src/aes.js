const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

// encryption using AES256 algorithm
export const encrypt = (data)=>{
    
    const encrypted = cryptr.encrypt(data);
    return encrypted;
}

// decryption using AES256 algorithm 
export  const decrypt = (data)=>{
   
    const decrypted = cryptr.decrypt(data);
    return decrypted;
}

// const e = encrypt('ascva');
// console.log(e);
// console.log(decrypt(e));
