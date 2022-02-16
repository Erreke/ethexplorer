import { useParams, Link } from 'react-router-dom';
import useTransactionFetcher from '../hooks/transactionFetcher';
import Info from '../components/Info';
import Loader from '../components/Loader';
import ErrorAlert from '../components/ErrorAlert';
import fullTransactionFieldsMapper from '../utils/mappers/fullTransactionFields';
import errorTexts from '../utils/errorTexts';

export default function Transaction() {
  const params = useParams();
  const {
    transactionInfo,
    isLoading,
    hasTransactionError,
    hasOtherError,
  } = useTransactionFetcher(params.hash);

  return (
    <>
      {
        isLoading &&
        <Loader />
      }

      <h1>Transaction Details</h1>

      <Link
        className="btn btn-primary mb-4 ms-1"
        role="button"
        to={`/block/${transactionInfo.blockNumber}`}
      >
        Back to block
      </Link>

      {
        hasTransactionError &&
        <ErrorAlert
          title={errorTexts.transactionNotFound.title}
          body={errorTexts.transactionNotFound.body}
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
        !hasTransactionError &&
        !hasOtherError &&

        <Info
          items={transactionInfo}
          mapper={fullTransactionFieldsMapper}
        />
      }

      
    </>
  );
}
