const hre = require("hardhat");
async function main() {
  //const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  //const simpleStorage = await SimpleStorage.deploy();

  //await simpleStorage.waitForDeployment();
 // console.log("Contract deployed to:", simpleStorage.target);


  const candidates = ["Alice", "Bob", "Charlie"];
  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(candidates);

  await voting.waitForDeployment();
  console.log("Voting contract deployed to:", voting.target);}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
