// retrieve.mjs

import { Web3Storage } from "web3.storage";

const token = process.env.API_TOKEN;
const client = new Web3Storage({ token });
// 'bafybeidd2gyhagleh47qeg77xqndy2qy3yzn4vkxmk775bg2t5lpuy7pcu'

async function retrieveFiles() {
  const cid = "bafybeia46cyq2le6whhpmelohqv5q56il4ssxzlxxe7ir3yb7iw4szjuwy";

  const res = await client.get(cid);
  const files = await res.files();

  for (const file of files) {
    console.log(`${file.cid}: ${file.name} (${file.size} bytes)`);
  }
}

retrieveFiles();
