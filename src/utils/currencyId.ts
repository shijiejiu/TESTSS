// import { useActiveWeb3React } from 'hooks'
import { ChainId, Currency, ETHER, Token } from 'swap-supproted-multichain-sdk'
// import { NETWORK_CHAIN_ID } from '../connectors'

export function currencyId(currency: Currency): string {
  // 
  console.log("currency", currency)
  console.log("ETHER[currency.chainId??ChainId.MAINNET]", ETHER[currency.chainId??ChainId.MAINNET])

  // console.log("ETHER[ChainId.MAINNET]", ETHER[ChainId.MAINNET])
  // if (currency === ETHER[ChainId.MAINNET] || currency === ETHER[ChainId.BSCTEST]) return 'ETH'
  if (currency === ETHER[currency.chainId??ChainId.MAINNET]) return 'ETH'
  // if (currency === ETHER[chainId??ChainId.MAINNET]) return 'ETH'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
