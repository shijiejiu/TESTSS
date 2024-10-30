// import { ChainId, CurrencyAmount, ETHER, JSBI } from 'swap-supproted-multichain-sdk'
import { ChainId, CurrencyAmount, ETHER, JSBI } from 'swap-supproted-multichain-sdk'
import { MIN_ETH } from '../constants'
// import { NETWORK_CHAIN_ID } from '../connectors'

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export function maxAmountSpend(currencyAmount?: CurrencyAmount): CurrencyAmount | undefined {
  if (!currencyAmount) return undefined
  // const {chainId} = useActiveWeb3React()
  // if (currencyAmount.currency === ETHER[NETWORK_CHAIN_ID as ChainId]) {

  if (currencyAmount.currency === ETHER[currencyAmount.currency.chainId??ChainId.MAINNET]) {

    if (JSBI.greaterThan(currencyAmount.raw, MIN_ETH)) {
      return CurrencyAmount.ether(JSBI.subtract(currencyAmount.raw, MIN_ETH), currencyAmount.currency.chainId??ChainId.MAINNET)
    } else {
      return CurrencyAmount.ether(JSBI.BigInt(0), currencyAmount.currency.chainId??ChainId.MAINNET)
    }

  }

  // if (currencyAmount.currency === ETHER[ChainId.MAINNET]) {

  //   if (JSBI.greaterThan(currencyAmount.raw, MIN_ETH)) {
  //     return CurrencyAmount.ether(JSBI.subtract(currencyAmount.raw, MIN_ETH), ChainId.MAINNET)
  //   } else {
  //     return CurrencyAmount.ether(JSBI.BigInt(0), ChainId.MAINNET)
  //   }

  // }else if (currencyAmount.currency === ETHER[ChainId.BSCTEST]){

  //   if (JSBI.greaterThan(currencyAmount.raw, MIN_ETH)) {
  //     return CurrencyAmount.ether(JSBI.subtract(currencyAmount.raw, MIN_ETH), ChainId.BSCTEST)
  //   } else {
  //     return CurrencyAmount.ether(JSBI.BigInt(0), ChainId.BSCTEST)
  //   }
    
  // }
  return currencyAmount
}
