import { ChainId, Currency, ETHER, Token } from 'swap-supproted-multichain-sdk'
import React, { useMemo } from 'react'
import styled from 'styled-components'

// import EthereumLogo from '../../assets/images/ethereum-logo.png'
// import BSCLogo from '../../assets/images/bsc-logo.png'

import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from '../Logo'
import { useActiveWeb3React } from '../../../src/hooks'

const getTokenLogoURL = (address: string) => 
  `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`

const getTokenLogoURLBySymbol = (symbol: string) => 
  `https://tokens.pancakeswap.finance/images/symbol/${symbol.toLowerCase()}.png`

  
  
// https://raw.githubusercontent.com/TP-Lab/tokens/master/bsc/${address}/logo.png
// https://tokens.pancakeswap.finance/images/symbol/busd.png
// `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`
    
const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  background-color: ${({ theme }) => theme.white};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)
  const {chainId} = useActiveWeb3React()
  const special_list:[ChainId, ChainId, ChainId] = [
    ChainId.BSCTEST,
    ChainId.SEPOLIA,
    ChainId.BSC
  ]

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER[chainId ?? ChainId.MAINNET]) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(currency.address)]
      }

      if (chainId && special_list.includes(chainId)){
        // console.log("获取头像....", currency.symbol)
        return [getTokenLogoURLBySymbol(currency.symbol ?? "")]
      }else{
        return [getTokenLogoURL(currency.address)]
      }

    }
    return []
  }, [currency, uriLocations, chainId, special_list])

  if (currency === ETHER[chainId ?? ChainId.MAINNET]) {
    return <StyledEthereumLogo src={`https://assets.pancakeswap.finance/web/native/${chainId}.png`} size={size} style={style} />
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
