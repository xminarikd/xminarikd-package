const CryptoJS = require("crypto-js");
const yargs = require("yargs");
const argv = yargs.argv;

const encrypt = str => {
  let wordarray = CryptoJS.enc.Utf8.parse(str);
  let enc = CryptoJS.enc.Base64.stringify(wordarray);
  console.log(enc);
  return enc;
};

const decrypt = str => {
  let wordarray = CryptoJS.enc.Base64.parse(str);
  let dec = wordarray.toString(CryptoJS.enc.Utf8);
  console.log(dec);
  return dec;
};

if (argv.e && argv.key) {
  encrypt(argv.key);
}

if (argv.d && argv.key) {
  decrypt(argv.key);
}

module.exports = {
  encrypt,
  decrypt
};
