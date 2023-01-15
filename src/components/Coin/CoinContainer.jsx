import React from 'react'
import Coin from './Coin'

const CoinContainer = ({ coins, search }) => {
   const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    filteredCoins.map(coin => {
      return (
        <Coin
          key={coin.id}
          image={coin.image}
          name={coin.name}
          symbol={coin.symbol}
          price={coin.current_price}
          volume={coin.market_cap} />
      )
    })
  )
};

export default CoinContainer;