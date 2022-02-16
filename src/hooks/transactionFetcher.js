import { useState, useEffect } from 'react';
import { getTransactionByHash } from '../api';
import fullTransactionFieldsDecoder from '../utils/decoders/fullTransactionFields'; 

const useTransactionFetcher = (hash) => {
  const [transactionInfo, setTransactionInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasTransactionError, setTransactionError] = useState(false);
  const [hasOtherError, setOtherError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTransactionError(false);
    setOtherError(false);

    getTransactionByHash(hash)
      .then((result) => {
        if (!result) {
          throw new Error('TransactionNotFound');
        }

        const decodedTransaction = {...result};
  
        Object.keys(fullTransactionFieldsDecoder).forEach((key) => {
          decodedTransaction[key] = fullTransactionFieldsDecoder[key](result[key]);
        });
  
        setTransactionInfo(decodedTransaction);
        setIsLoading(false);
      })
      .catch((error) => {
        switch (error.message) {
          case 'TransactionNotFound':
            setTransactionError(true);
            break;

          default:
            setOtherError(true);
        }

        setIsLoading(false);
      });
  }, [hash]);

  return {
    transactionInfo,
    isLoading,
    hasTransactionError,
    hasOtherError,
  };
};

export default useTransactionFetcher;
