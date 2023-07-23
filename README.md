# IPFS cid Generator for any file
# Description
This NPM package allows you to easily generate the IPFS hash of any file by providing your Web3Storage token and the file path. It utilizes the "web3.storage" library to handle the file uploads to the InterPlanetary File System (IPFS) network through the Web3Storage service


## Installation

You can install the package via NPM by running the following command:


```bash
npm install getipfscid
```

## Usage

To use this package, you need to have a Web3Storage token. 

Use the package manager [web3storage](https://web3.storage/) to generate a web3Storage token.

Here's an example of how to use the package in your code:

```js
import generateIPFSHash from 'getipfscid';

async function main() {
  try {
    const token = "YOUR_WEB3STORAGE_TOKEN";
    const folderLocation = "./path/to/your/file.txt";
    const cid = await generateIPFSHash(token, folderLocation);
    console.log("IPFS Hash (CID):", cid);
  } catch (error) {
    console.error(error.message);
  }
}
```
## More Documentation

 [web3storage](https://web3.storage/) 


