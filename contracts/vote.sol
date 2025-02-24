// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Voting {
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    mapping(address => bool) public hasVoted;
    Candidate[] public candidates;

    /**
     * @dev Constructor that initializes the contract with a list of candidate names.
     * @param candidateNames An array of candidate names.
     */
    constructor(string[] memory candidateNames) {
        for (uint i = 0; i < candidateNames.length; i++) {
            candidates.push(Candidate({
                name: candidateNames[i],
                voteCount: 0
            }));
        }
    }
 
    /**
     * @dev Allows an address to vote for a candidate.
     * @param candidateIndex The index of the candidate in the candidates array.
     */
    function vote(uint256 candidateIndex) public {
        require(!hasVoted[msg.sender], "You have already voted.");
        require(candidateIndex < candidates.length, "Invalid candidate index.");

        hasVoted[msg.sender] = true;
        candidates[candidateIndex].voteCount++;
    }

    /**
     * @dev Returns the list of candidates.
     * @return An array of Candidate structs.
     */
    function getCandidates() public view returns (Candidate[] memory) {
        return candidates;
    }

    /**
     * @dev Returns the name and vote count of the winning candidate.
     * @return winnerName The name of the candidate with the most votes.
     * @return winnerVotes The number of votes the winning candidate received.
     */
    function getWinner() public view returns (string memory winnerName, uint256 winnerVotes) {
        require(candidates.length > 0, "No candidates available.");

        uint256 highestVotes = 0;
        uint256 winnerIndex = 0;

        for (uint256 i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > highestVotes) {
                highestVotes = candidates[i].voteCount;
                winnerIndex = i;
            }
        }

        return (candidates[winnerIndex].name, highestVotes);
    }

    /**
     * @dev Returns the vote count of a specific candidate by name.
     * @param candidateName The name of the candidate.
     * @return The vote count of the specified candidate.
     */
    function getVotes(string memory candidateName) public view returns (uint256) {
        for (uint256 i = 0; i < candidates.length; i++) {
            if (keccak256(abi.encodePacked(candidates[i].name)) == keccak256(abi.encodePacked(candidateName))) {
                return candidates[i].voteCount;
            }
        }
        revert("Candidate not found.");
    }
}
