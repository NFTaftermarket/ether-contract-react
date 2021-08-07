import * as React from 'react'
import { useState, useEffect } from "react";
import styles from './styles.module.css'
import { ethers, Contract, BigNumber } from 'ethers'
import { abi } from './SuperXeroxabi'
import { Web3Provider } from '@ethersproject/providers'

declare let window: any

interface Props {
  text: string
}

// const SXContract = "0x68cB5B558F15799920E0D038eF87544e670af503" // copy machine address for Rinkeby
const SXContract = "0x34b0f1e2ad834a28da1651cc3c1e27978b74a971" // copy machine address for Ropsten
const provider: Web3Provider = new ethers.providers.Web3Provider(window.ethereum)
const superXeroXContract_ro = new Contract(
  SXContract,
  abi,
  provider
);

export const CurrentProvider = provider
export const Contract_ro = superXeroXContract_ro
export const SXContractComponent = ({ text }: Props) => {
  const ethereum = window.ethereum
  const [val, setVal] = useState(0)
  const [chainId, setNetwork] = useState('👽')
  const [account, setAccount] = useState('👻');
  const [netFlow, setNetFlow] = useState('🦄');

  const init = async () => {
    updateChainId()
    const signer = await provider.getSigner()
    setAccount(await signer.getAddress())

    window.ethereum.on('chainChanged', (_chainId: string) => {
      console.log('changed chainId ', _chainId)
      setNetwork(_chainId);
    });
    window.ethereum.on('accountsChanged', (_accounts: Array<string>) => {
      console.log('get accounts ', _accounts)
      console.log(_accounts.length)
      setAccount((_accounts.length >= 1) ? _accounts[0] : 'no account');
    });
  }

  const updateNetFlow = async () => {
    const x: any = await provider.getNetwork()
    console.log('current network: ', x.name)
    if (x.name === 'ropsten') {
    superXeroXContract_ro.getNetFlow()
      .then(
        (x: BigNumber) => {
          console.log(x)
          const y = x.div(BigNumber.from(1000000000))
          const z = y.div(BigNumber.from(277777))
          setNetFlow(z.toString())
        }
      )
    } else {
      alert('please switch metamask to Ropsten test network')
    }
  }

  const updateChainId = async () => {
    let chainId = await ethereum.request({ method: 'eth_chainId' });
    console.log('changed ID ', chainId)
    setNetwork(chainId.toString());
  }

  useEffect(() => {
    (async function run() {
      await init()
    })();
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      updateNetFlow()
      setVal((v: number) => v + 1);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  return <div className={styles.test}>
    ⛑ SuperXEROX 2 (flow fDAIx to 0x34b0f1e2ad834a28da1651cc3c1e27978b74a971 will see the netFlow, you can use https://app.superfluid.finance/) {text} {val} {account} network: {chainId} netflow: (fDAIx/COPY) {netFlow} per hour
  </div>
}

