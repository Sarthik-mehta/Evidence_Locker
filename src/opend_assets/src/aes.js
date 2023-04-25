var aes256 = require('aes256');
var key = 'my passphrase';

// encryption using AES256 algorithm
export const encrypt = (data)=>{
    
    const encrypted = aes256.encrypt(key, data);
    return encrypted;
}

// decryption using AES256 algorithm 
export  const decrypt = (data)=>{
   
    const decrypted = aes256.decrypt(key, data);
    return decrypted;
}


