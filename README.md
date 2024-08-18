# ton-sample-app

A sample [TON](https://ton.org/) [DApp](https://en.wikipedia.org/wiki/Decentralized_application) from the [TON and Telegram Blockchain Course](https://stepik.org/course/176754).

## Local Development

### Contract

1. Install dependencies: `yarn`
2. Compile and run tests: `yarn jest`
3. Deploy to testnet/mainnet: `yarn blueprint run`
    > NOTE: Before deploying, replace the `address` and `owner_address` in `contract/scripts/deploy.ts` with your testnet wallet.

### DApp

1. Install dependencies: `yarn`
2. Run DApp: `yarn dev`
    > NOTE: Before running, replace the `contract address` in `dapp/src/hooks/useMainContract.ts` with your deployed contract address.

## Resources
- https://docs.ton.org/
- https://tonspeedrun.com/
- [TON Testnet Faucet](https://t.me/testgiver_ton_bot)