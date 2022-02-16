import { useParams } from 'react-router-dom';
import { useBlockFetcher } from '../hooks/blockFetcher';
import Loader from '../components/Loader';
import ErrorAlert from '../components/ErrorAlert';
import BlockExplorer from '../components/BlockExplorer';
import errorTexts from '../utils/errorTexts';

export default function Block() {
  const params = useParams();
  const {
    blockInfo = {},
    transactions = [],
    latestBlockNumber,
    isLoading,
    hasBlockError,
    hasLatestBlockError,
    hasOtherError,
  } = useBlockFetcher(params.number);

  return (
    <>
      {
        isLoading &&
        <Loader />
      }

      {
        hasBlockError &&
        <ErrorAlert
          title={errorTexts.blockNotFound.title}
          body={errorTexts.blockNotFound.body}
        />
      }

      {
        hasLatestBlockError &&
        <ErrorAlert
          title={errorTexts.latestBlockNotFound.title}
          body={errorTexts.latestBlockNotFound.body}
        />
      }

      {
        hasOtherError &&
        <ErrorAlert
          title={errorTexts.other.title}
          body={errorTexts.other.body}
        />
      }

      {
        !hasBlockError &&
        !hasOtherError &&

        <BlockExplorer
          blockInfo={blockInfo}
          transactions={transactions}
          latestBlockNumber={latestBlockNumber}
        />
      }
    </>
  );
}
