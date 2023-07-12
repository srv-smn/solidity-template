/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("hardhat-contract-sizer");
require("solidity-coverage");
require("hardhat-gas-reporter");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings:{
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      {
        version: "0.7.6",
      }
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    //  forking:{
    //     allowUnlimitedContractSize: true,
    //     url: process.env.GOERLI,
    //     accounts: [`0x${process.env.ACCOUNT1}`, `0x${process.env.ACCOUNT2}`],
    //  }
    },
    local: {
      url: "http://localhost:24012/rpc"
    },
    goerli: {
      url: process.env.GOERLI || "",
      accounts: [`0x${process.env.ACCOUNT1}`, `0x${process.env.ACCOUNT2}`],
      chainId: 5,
      allowUnlimitedContractSize: true,
      blockGasLimit: 100000000429720
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN,
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,

  },
  gasReporter: {
    currency: "USD",
    gasPrice: 20,
    enabled: !!process.env.REPORT_GAS,
  },
  docgen: {
    path: './docs',
    clear: true,
    runOnCompile: true,
  }
};
