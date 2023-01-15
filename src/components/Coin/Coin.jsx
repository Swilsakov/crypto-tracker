import React from 'react';
import classes from './coin.module.css';

const Coin = ({ image, name, symbol, price, volume, priceChange, market_cap }) => {
  return (
    <div className={classes.coin__container}>
      <div className={classes.coin__row}>
        <div className={classes.coin}>
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className={classes.coin__symbol}>{symbol}</p>
        </div>
        <div className={classes.coin__data}>
          <p className={classes.coin__price}>${price}</p>
          <p className={classes.coin__volume}>${volume.toLocaleString()}</p>
          {
            priceChange < 0 ? (
              <p className={classes.coin__percent_red}>{priceChange.toFixed(2)}%</p>
            ) : (
              <p className={classes.coin__percent_green}>{priceChange.toFixed(2)}%</p>
            )
          }
          <p className={classes.coin__market_cap}>
            Market Cap: ${market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coin;