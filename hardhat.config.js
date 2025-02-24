require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.28" },
      { version: "0.8.20" }, // Add another version if needed
    ],
  },
};

