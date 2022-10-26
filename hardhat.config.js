require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
const {ALCHEMY_URL,PRIVATE_KEY} = process.env;

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  networks: {
    goerli: {
      url: "https://capable-radial-county.ethereum-goerli.discover.quiknode.pro/7c6b794d2e749f67977de13a10e6ef176ce383c6/",
      accounts: ["0f238559528f75092c3c4c1fae6b7ddb2ccfac3aa087d9ec3c64e092ddd79826"],
    },
  }
};
