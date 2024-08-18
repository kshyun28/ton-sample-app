import { address, toNano } from "@ton/core";
import { MainContract } from "../wrappers/MainContract";
import { compile, NetworkProvider } from "@ton/blueprint";

export async function run(provider: NetworkProvider) {
  const myContract = MainContract.createFromConfig(
    {
      number: 0,
      address: address("0QBpdGZ6q-cqxwlpD1MPW-lVJs9aVb1NppG7IjmmD1fKDcmc"),
      owner_address: address(
        "0QBpdGZ6q-cqxwlpD1MPW-lVJs9aVb1NppG7IjmmD1fKDcmc"
      ),
    },
    await compile("MainContract")
  );

  const openedContract = provider.open(myContract);

  openedContract.sendDeploy(provider.sender(), toNano("0.05"));

  await provider.waitForDeploy(myContract.address);
}
