import web3 from 'web3'
import {InjectedConnector} from '@web3-react/injected-connector'

const ETH_NETOWORK_ID = 1

export const connector = new InjectedConnector({
    supportedChainIds: [ETH_NETOWORK_ID]
})

export const getLibriary = (provider) => {
    const libriary = new web3(provider)
    return libriary
}