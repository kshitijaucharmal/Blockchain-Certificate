"use strict";

import { Web3Storage, getFilesFromPath } from "web3.storage";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQ4YkNDYjlkRDkxRUI1ZDhmZjI3NDI4MjQ0YzFDNjExOEM2MjEwMDkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTQyNjkxMjYxMDksIm5hbWUiOiJTSUggVGVzdGluZyJ9.g-xkw4DHQQtDqB6w7MyaWnzdr3EK9brFQtbJxVBJxKU";
const client = new Web3Storage({ token });
console.log("client setup: ", client);

async function storeWithProgress(files) {
  // show the root cid as soon as it's ready
  const onRootCidReady = (cid) => {
    console.log("uploading files with cid:", cid);
  };

  // when each chunk is stored, update the percentage complete and display
  const totalSize = files.map((f) => f.size).reduce((a, b) => a + b, 0);
  let uploaded = 0;

  const onStoredChunk = (size) => {
    uploaded += size;
    const pct = 100 * (uploaded / totalSize);
    console.log(`Uploading... ${pct.toFixed(2)}% complete`);
  };

  // client.put will invoke our callbacks during the upload
  // and return the root cid when the upload completes
  return client.put(files, { onRootCidReady, onStoredChunk });
}

async function makeFileObjects() {
  // You can create File objects from a Blob of binary data
  // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
  // Here we're just storing a JSON object, but you can store images,
  // audio, or whatever you want!

  const files = await getFilesFromPath("./data");
  console.log(files);

  return files;
}

async function upload() {
  // Define key (MP password of org)
  //let key = new jfe.encryptor("organization-password");

  // Encrypt data
  //let data_en = key.encrypt(JSON.stringify(data, null, 2));
  //console.log(data_en);

  // Get Data as a file object to send to web3.storage
  let files = await makeFileObjects();
  //const cid = await client.put(files);

  console.log("Cid Is: ", cid);

  // Store files on Web3Storage
  //storeWithProgress(files);

  //let data_dec = key.decrypt(data_en);
}

upload();
