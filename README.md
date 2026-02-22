# Flash Loan Arbitrage Bot

This repository contains a professional-grade implementation of a Flash Loan receiver contract using the Aave V3 protocol. It is designed for developers looking to understand or implement atomic arbitrage, liquidations, or portfolio rebalancing without upfront capital.

### Technical Overview
* **Protocol:** Aave V3 (Lending Pool).
* **Language:** Solidity ^0.8.20.
* **Atomic Nature:** If the arbitrage trade does not result in a profit sufficient to cover the flash loan fee (0.05%), the entire transaction reverts, ensuring no loss of principal.
* **Gas Efficiency:** Optimized to minimize overhead during the callback execution.

### Workflow
1. **Request:** The contract calls `flashLoanSimple` on Aave.
2. **Execute:** Aave sends assets to this contract and triggers `executeOperation`.
3. **Arbitrage:** Inside `executeOperation`, logic is placed to trade on Uniswap/Sushiswap.
4. **Repay:** The contract automatically approves Aave to pull back the loan amount + fee.

### Deployment
1. Set your `POOL_ADDRESS_PROVIDER` for the target chain (Mainnet, Polygon, Arbitrum).
2. Deploy the contract.
3. Fund the contract with enough tokens to cover the 0.05% fee for the first run.
