import React from 'react'
import { today, CurrentProvider, SXContractComponent, Contract_ro, ConnectComponent } from 'ether-contract-react'
import 'ether-contract-react/dist/index.css'

const App = () => {
  (async function run() {
    const x: any = await CurrentProvider.getNetwork()
    console.log('💋current network: ', x.name)
    if ('rinkeby' === x.name) {

      Contract_ro.getNetFlow()
        .then((x: any) => {
          today().then(console.log)
          console.log('🧔🏻‍♀️ ', x)
        })
    }
  })()
  return <>
    <SXContractComponent text='👻' />
    <ConnectComponent text=" 😄" />
  </>
}

export default App
