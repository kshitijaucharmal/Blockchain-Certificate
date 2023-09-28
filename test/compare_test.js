const { expect } = require("chai");

describe("Hash Comparer Contract", function () {
  let Token;
  let hardhatToken;
  let owner;
  let addrs;

  const hash =
    "4687a151f32e1c2ea47d1be09e5661cd78d4806d531deb94a2639270a819cd1d";
  const equalHash =
    "4687a151f32e1c2ea47d1be09e5661cd78d4806d531deb94a2639270a819cd1d";
  const unEqualHash =
    "5687a151f32e1c2ea47d1be09e5661cd78d4806d531deb94a2639270a819cd1d";

  beforeEach(async function () {
    // Get Smart Contract
    Token = await ethers.getContractFactory("Token");
    // owner and other address
    [owner, ...addrs] = await ethers.getSigners();

    // Deploy token(create an instance)
    hardhatToken = await Token.deploy();
  });

  describe("CompareTest", function () {
    it("Should set the right owner", async function () {
      expect(await hardhatToken.owner()).to.equal(owner.address);
    });

    it("Send Generated Hash", async function () {
      hardhatToken.setGeneratedHash(hash);
      expect(await hardhatToken.generatedHash()).to.equal(hash);
    });

    it("Send IPFS Hash(Equal)", async function () {
      hardhatToken.setIPFSHash(equalHash);
      expect(await hardhatToken.ipfsHash()).to.equal(equalHash);
    });

    it("Send IPFS Hash(UnEqual)", async function () {
      hardhatToken.setIPFSHash(unEqualHash);
      expect(await hardhatToken.ipfsHash()).to.equal(unEqualHash);
    });

    it("Compare Equal Hashes", async function () {
      // Send Hashes
      hardhatToken.setGeneratedHash(hash);
      hardhatToken.setIPFSHash(equalHash);

      // Output
      let out = await hardhatToken.compare();

      expect(out).to.equal(0);
    });

    it("Compare UnEqual Hashes", async function () {
      // Send Hashes
      hardhatToken.setGeneratedHash(hash);
      hardhatToken.setIPFSHash(unEqualHash);

      // Output
      let out = await hardhatToken.compare();

      expect(out).to.equal(-1);
    });
  });
});
