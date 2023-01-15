import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './components/Search/Search'
import CoinContainer from './components/Coin/CoinContainer'

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='app-wrapper'>
      <div className='coin-app'>
        <Search setSearch={setSearch} />
        <CoinContainer coins={coins} search={search} />
      </div>
    </div>
  )
}

export default App