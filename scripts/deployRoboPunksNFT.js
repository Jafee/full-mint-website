const hre = require("hardhat");

async function main() {
  const RoboPunksNFT = await hre.ethers.getContractFactory("roboPunksNFT");
  const roboPunksNFT = await RoboPunksNFT.deploy("Hello, Hardhat!");

  await roboPunksNFT.deployed();

  console.log("RoboPunksNFT deployed to:", roboPunksNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
