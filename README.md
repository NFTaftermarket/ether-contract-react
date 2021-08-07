# ether-react

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/ether-react.svg)](https://www.npmjs.com/package/ether-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## CLAIM
Not production ready. Use on your own RISK!

## Create a new react app

```bash
npx create-react-app my-app
cd my-app
npm start
```

[refer to](https://reactjs.org/docs/create-a-new-react-app.html)

## Install

```bash
npm install --save ether-contract-react
```
or 
```bash
yarn add ether-contract-react
```

## Usage

```tsx
import React from 'react'

import { SXContractComponent } from 'ether-contract-react'
import 'ether-contract-react/dist/index.css'

const App = () => {
  return <SXContractComponent text="DApp 🚀" />
}

export default App
```

## Run
### Currently only support Ethereum Ropsten Testnet

```bash
npm run start
```
or 
```bash
yarn start
```

## Ropsten Deployment
|                                            | address                                    |
| ------------------------------------------ | ------------------------------------------ |
| Bootstrap<br>(Bootstrap.sol)               | 0x9d68dD60aC5496AD6E4bBAdf93875525d8C85D0E |
| NFT CopyToken<br>(CopyToken.sol)           | 0xBEd1bb84251dC2f2eb7208dE4bc72950bC636BD9 |
| CopyMachine<br>(SuperXerox.sol)            | 0x34b0f1e2ad834a28da1651cc3c1e27978b74a971 |
| Copy super Token<br>(NativeSuperToken.sol) | 0x19a375a4e9972690ad876ac4722993e02335b823 |
| deployer address (Owner)                   | 0x609683612D80A091C69747a76ec6efE284a7cf46 |


## License

MIT License ©2021 [Ming-der Wang](https://github.com/mingderwang)
