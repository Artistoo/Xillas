const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");

  const transaction = await Transactions.deploy();
  await transaction.deployed();

  console.log(`Transactions Deployed to : `, transaction.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(
      err instanceof String &&
        err + " the main function in the deploy solidity file returned"
    );
    process.exit(1);
  }
};

runMain();
