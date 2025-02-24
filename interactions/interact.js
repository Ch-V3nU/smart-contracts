const hre = require("hardhat");

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace this address with your deployed contract address
  const [voter] = await hre.ethers.getSigners();

  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = Voting.attach(contractAddress);

  // Fetch candidates
  const candidates = await voting.getCandidates();
  console.log("Candidates:");
  candidates.forEach((c, index) => console.log(`${index}: ${c.name}, Votes: ${c.voteCount}`));

  // Vote for a candidate
  const tx = await voting.connect(voter).vote(1); // Voting for candidate index 1 (Bob)
  await tx.wait();
  console.log("Voted for candidate 1 (Bob)");

  // Fetch updated votes
  const updatedCandidates = await voting.getCandidates();
  updatedCandidates.forEach((c, index) => console.log(`${index}: ${c.name}, Votes: ${c.voteCount}`));

  // Get winner
  const winner = await voting.getWinner();
  console.log(`Winner: ${winner[0]} with ${winner[1]} votes`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
