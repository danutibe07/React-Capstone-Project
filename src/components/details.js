import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailsData } from '../redux/detail/detailSlice';
import Detail from './detail';

const Details = () => {
  const { details, isLoading, hasError } = useSelector((store) => store.detail);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetailsData(id));
  }, [dispatch, id]);
  if (details.length === 0) {
    return (
      <h2 data-testid="detailsItem" className="empty-cryptos">
        No Details
      </h2>
    );
  }
  if (isLoading) return <h2>Loading ....</h2>;
  if (hasError) return <h2 className="empty-cryptos">An error has occured</h2>;
  return <Detail details={details} />;
};

export default Details;
