import { Web3Storage } from "web3.storage";

const cid = "bafybeihetmdskwxzbojm3nodtqregdbzmn3dsmb7oohrrdmjezqrguzpuu";

function makeStorageClient() {
  return new Web3Storage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQ4YkNDYjlkRDkxRUI1ZDhmZjI3NDI4MjQ0YzFDNjExOEM2MjEwMDkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTQyNjkxMjYxMDksIm5hbWUiOiJTSUggVGVzdGluZyJ9.g-xkw4DHQQtDqB6w7MyaWnzdr3EK9brFQtbJxVBJxKU",
  });
}

const client = makeStorageClient();

async function checkStatus(cid) {
  const status = await client.status(cid);
  console.log(status.deals);
  if (status) {
    // Do Something if status success
  }
}

async function getFiles() {
  const response = await client.get(cid);
  const files = await response.files();
  return files;
}

checkStatus(cid);
const files = await getFiles();
files.forEach((file) => {
  if (file.name.includes(".png") || file.name.includes(".jpg")) {
    const gatewayHost = "w3s.link";
    const fileUrl = `https://${gatewayHost}/ipfs/${cid}/${file.name}`;
    console.log(fileUrl);
  }
});
