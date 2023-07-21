function decrypt(data){
    return 'Decrypt data';
}

function read(){
    const decryptedData =  decrypt('Data');
    console.log(`Decrypting data: ${decryptedData}`);
    return decryptedData;
}

module.exports = {
    read,
};