# Sample Hardhat Project

## Local Setup

1. **Clone the repository:**
    ```shell
    git clone /c:/Users/user/Desktop/my-smart-contracts
    cd my-smart-contracts
    ```

2. **Install dependencies:**
    ```shell
    npm install
    ```

3. **Compile the contracts:**
    ```shell
    npx hardhat compile
    ```

## Deploying the Contract

1. **Start a local node:**
    ```shell
    npx hardhat node
    ```

2. **Deploy the contract:**
    ```shell
    npx hardhat run scripts/deploy.js --network localhost
    ```

## Interacting with the Contract

1. **Open the Hardhat console:**
    ```shell
    npx hardhat console --network localhost
    ```

2. **Get the deployed contract instance:**
    ```javascript
    const Contract = await ethers.getContractFactory("YourContract");
    const contract = await Contract.attach("deployed_contract_address");
    ```

3. **Call contract functions:**
    ```javascript
    await contract.yourFunction();
    const result = await contract.yourOtherFunction();
    console.log(result);
    ```

4. **Run the interaction script:**
    ```shell
    node interactions/interact.js
    ```