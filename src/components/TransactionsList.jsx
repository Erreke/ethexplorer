import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TransactionsList({ items, mapper }) {
  return (
    <div className="py-4">
      <Table striped bordered>
        <colgroup>
          <col span="1" style={{width: '5%'}} />
          <col span="1" style={{width: '25%'}} />
          <col span="1" style={{width: '25%'}} />
          <col span="1" style={{width: '25%'}} />
          <col span="1" style={{width: '20%'}} />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            {Object.entries(mapper).map((field, key) => (
              <th key={key}>{field[1].title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((transaction, key) => (
            <tr key={key}>
              <td className="text-truncate">{key + 1}</td>
              <td className="text-truncate">
                <Link to={`/transaction/${transaction.hash}`}>
                  {transaction.hash}
                </Link>
              </td>
              <td className="text-truncate">{transaction.from}</td>
              <td className="text-truncate">{transaction.to}</td>
              <td className="text-truncate">{transaction.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}