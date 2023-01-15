import React from 'react'
import classes from './search.module.css'

const Search = ({ setSearch }) => {
  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.coin__search}>
      <h1 className={classes.coin__text}>Search a currency</h1>
      <form>
        <input type='text' placeholder='Search' className={classes.coin__input} onChange={handleChange} />
      </form>
    </div>
  )
}

export default Search