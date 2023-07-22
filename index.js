import { Web3Storage, getFilesFromPath } from "web3.storage";

async function generateIPFSHash(token, folderLocation) {
  try {
    if (!token) {
      throw new Error(
        "A token is needed. You can create one on https://web3.storage"
      );
    }

    if (!folderLocation) {
      throw new Error("Please provide the file path.");
    }

    const storage = new Web3Storage({ token });
    const files = await getFilesFromPath(folderLocation);

    console.log(`Uploading ${files.length} files`);
    const cid = await storage.put(files);
    console.log("Content added with CID:", cid);
    console.log(`You can view it at https://${cid}.ipfs.w3s.link`);

    return cid;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

export default generateIPFSHash;
