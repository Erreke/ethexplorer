import { useState, useEffect } from 'react';
import { getBlockByNumber, getLatestBlockNumber } from '../api';
import blockFieldsDecoder from '../utils/decoders/blockFields'; 
import transactionFieldsDecoder from '../utils/decoders/transactionFields';

export const useBlockFetcher = (number) => {
  const [blockInfo, setBlockInfo] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [latestBlockNumber, setLatestBlockNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasBlockError, setBlockError] = useState(false);
  const [hasLatestBlockError, setLatestBlockError] = useState(false);
  const [hasOtherError, setOtherError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setBlockError(false);
    setLatestBlockError(false);
    setOtherError(false);

    let blockNumber = "latest";

    if (number && !isNaN(number)) {
      blockNumber = `0x${Number(number).toString(16)}`;
    }

    getBlockByNumber(blockNumber)
      .then(([block, latestBlock]) => {

        if (!block) {
          throw new Error('BlockNotFound');
        }

        if (!latestBlock) {
          throw new Error('LatestBlockNotFound');
        }

        const decodedTransactions = block?.transactions.map((item) => {
          const transaction = {...item};
  
          Object.keys(transactionFieldsDecoder).forEach((key) => {
            transaction[key] = transactionFieldsDecoder[key](item[key]);
          });
  
          return transaction;
        });
  
        const decodedBlockInfo = {...block};
  
        Object.keys(blockFieldsDecoder).forEach((key) => {
          decodedBlockInfo[key] = blockFieldsDecoder[key](block[key]);
        });
  
        setBlockInfo(decodedBlockInfo);
        setLatestBlockNumber(parseInt(latestBlock, 16));
        setTransactions(decodedTransactions);
        setIsLoading(false);

        if (block.number === latestBlock) {
          const intervalId = setInterval(() => {  
            setLatestBlockError(false);

            getLatestBlockNumber()
              .then((result) => {
                if (!result) {
                  throw new Error('LatestBlockNotFound');
                }

                setLatestBlockNumber(parseInt(result, 16));

                if (block.number !== result) {
                  clearInterval(intervalId);
                }
              })
              .catch((error) => {
                switch (error.message) {
                  case 'LatestBlockNotFound':
                    setLatestBlockError(true);
                    break;
        
                  default:
                    setOtherError(true);
                }
              });
          }, 3000);
        
          return () => clearInterval(intervalId);
        }
      })
      .catch((error) => {
        switch (error.message) {
          case 'BlockNotFound':
            setBlockError(true);
            break;

          case 'LatestBlockNotFound':
            setLatestBlockError(true);
            break;

          default:
            setOtherError(true);
        }

        setIsLoading(false);
      });

  }, [number]);

  return {
    blockInfo,
    transactions,
    latestBlockNumber,
    isLoading,
    hasBlockError,
    hasLatestBlockError,
    hasOtherError,
  };
};
