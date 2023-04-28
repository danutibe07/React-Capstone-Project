import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptosData } from '../redux/crypto/cryptoSlice';
import Crypto from './crypto';

const CryptoList = () => {
  const {
    cryptos, isFetched, isLoading, hasError,
  } = useSelector((store) => store.crypto);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetched) {
      dispatch(getCryptosData());
    }
  }, [dispatch, isFetched]);

  if (cryptos.length === 0) {
    return (
      <h2 data-testid="cryptoItem" className="empty-cryptos">
        No Crypto was fetched
      </h2>
    );
  }
  if (isLoading) return <h1>Loading</h1>;
  if (hasError) return <h2 className="empty-cryptos">An error has occured</h2>;

  return (
    <div className="container">
      <div className="searchBar">
        <input
          type="text"
          className="searchinput"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Sort Coins "
        />
      </div>
      <div className="cryptoscontainer">
        {cryptos
          .filter((crypto) => {
            if (search === '') {
              return crypto;
            }
            if (crypto.name.toLowerCase().includes(search.toLowerCase())) {
              return crypto;
            }
            return null;
          })
          .map((crypto, index) => (
            <Crypto key={crypto.id} crypto={crypto} index={index} />))}
      </div>
    </div>
  );
};

export default CryptoList;
