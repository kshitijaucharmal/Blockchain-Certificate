# Blockchain-Certificate

Prototype code for Certificate Generation and Validation on the Blockchain for SIH (Smart India Hackathon) by team NeoGlyphs

## Installation Instructions

To set up the HashComparer smart contract and IPFS storage, follow these steps for a smooth installation process.

### Smart Contract

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   ```

2. **Switch to the Smart Contracts Branch**:

   ```bash
   git checkout smart-contracts
   cd HashComparer
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   npm install --save-dev hardhat
   ```

4. **Run Tests**:
   ```bash
   npx hardhat test
   ```

### IPFS Storage

#### Installation

1. **Switch to the IPFS Storage Branch**:

   ```bash
   git checkout ipfs-storage
   cd CertificateGen
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

#### Execution

- **Query Data on IPFS**:
  To retrieve data from IPFS, run the following command:

  ```bash
  node src/query.mjs
  ```

- **Generate Certificate (Optional)**:
  To store data on IPFS, use the following command. Note that data has already been stored, so you can skip this step. If you wish to store new data, make sure to uncomment lines 52 and 57 in the `generate_certificate.mjs` file.
  ```bash
  node src/generate_certificate.mjs
  ```

By following these instructions, you'll have the HashComparer smart contract and IPFS storage set up and ready for use.
