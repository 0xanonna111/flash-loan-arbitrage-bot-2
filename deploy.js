const hre = require("hardhat");

async function main() {
  // Aave V3 Pool Addresses Provider (Example for Polygon Mainnet)
  const POOL_PROVIDER = "0xa97684ead0e451d98a297800726c58d17ee697d0";

  console.log("Deploying FlashLoanReceiver...");
  const FlashLoan = await hre.ethers.getContractFactory("FlashLoanReceiver");
  const flashLoan = await FlashLoan.deploy(POOL_PROVIDER);

  await flashLoan.waitForDeployment();
  console.log(`Contract deployed to: ${await flashLoan.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
