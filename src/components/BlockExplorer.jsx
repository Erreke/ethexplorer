import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Info from './Info';
import TransactionsList from './TransactionsList';
import UnclesList from './UnclesList';
import blockFieldsMapper from '../utils/mappers/blockFields';
import transactionFieldsMapper from '../utils/mappers/transactionFields';
import uncleFieldsMapper from '../utils/mappers/uncleFields';

export default function BlockExplorer({ blockInfo, transactions, latestBlockNumber }) {
  return (
    <>
      <h1>Block #{blockInfo.number}</h1>

      <Link
        className={`btn btn-primary mb-4 me-1${ blockInfo.number === 0 ? ' disabled' : '' }`}
        role="button"
        to={`/block/${blockInfo.number - 1}`}
      >
        Previous block
      </Link>

      <Link
        className={`btn btn-primary mb-4 ms-1${ blockInfo.number === latestBlockNumber ? ' disabled' : '' }`}
        role="button"
        to={`/block/${blockInfo.number + 1}`}
      >
        Next block
      </Link>

      <Tabs defaultActiveKey="overview" className="mb-3">
        <Tab eventKey="overview" title="Overview">
          <Info items={blockInfo} mapper={blockFieldsMapper} />
        </Tab>

        <Tab eventKey="transactions" title={`Transactions (${transactions.length})`}>
          <TransactionsList items={transactions} mapper={transactionFieldsMapper} />
        </Tab>
        
        {
          blockInfo.uncles?.length > 0
          &&
          <Tab eventKey="uncle" title={`Uncles (${blockInfo.uncles.length})`}>
            <UnclesList items={blockInfo.uncles} mapper={uncleFieldsMapper} />
          </Tab>
        }
      </Tabs>
    </>
  );
}
