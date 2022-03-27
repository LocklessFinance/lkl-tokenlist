# lkl-tokenlist

The Tokenlist for Lockless.finance

## Install

```bash
npm install @locklessfi/tokenlist
```

## Setup

To setup this repo you need to run the following:

```bash
npm ci
```

You'll also need to add api keys listed in lkl.default.env to your local lkl.env file.

##

### Deploying a new term

When a new term is deployed in the lkl-deploy repo, run this command to
regenerate the tokenlist:

```bash
# build the new tokenlists, lkl-deploy repo must have the updated list
npm run build
```

Once complete, commit all file changes and submit a PR to `main`.

Any project that wants the latest tokenlist will now need to update their
dependency on this repo. See below for handy script that makes upgrading easy
for consumers.

## Usage Examples

### List the open principal tokens

This is how to get a list of currently open principal tokens.

```ts
import { LocklessTokenTag, mainnetTokenList } from "lkl-tokenlist";

// Get the list of principal tokens that have not yet reached maturity
const principalTokens = mainnetTokenList.tokens
  .filter(
    (token) => token.tags?.includes(LocklessTokenTag.PRINCIPAL)
  )
  .filter(
    (token) => token.extensions.unlockTimestamp > Date.now() * 1000
  ).
```

## Developer Config

To build this repo you need to configure some env variables. For linux and mac run the following:

1. Copy `lkl.default.env`

```bash
cp lkl.default.env lkl.env
```

2. Update lkl.env with your alchemy api key

```bash
export ALCHEMY_MAINNET_API_KEY=
export ALCHEMY_GOERLI_API_KEY=
```

3. Source the env file

```bash
source lkl.env
```