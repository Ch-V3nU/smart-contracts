/**
 * Deploys the Voting smart contract with a list of candidates.
 * 
 * @async
 * @function main
 * @returns {Promise<void>} - A promise that resolves when the deployment is complete.
 * @throws Will throw an error if the deployment fails.
 * 
 * @example
 * // Example usage:
 * main().catch((error) => {
 *   console.error(error);
 *   process.exitCode = 1;
 * });
 */
const hre = require("hardhat");
async function main() {

  const candidates = ["Alice", "Bob", "Charlie"];
  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(candidates);

  await voting.waitForDeployment();
  console.log("Voting contract deployed to:", voting.target);}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
