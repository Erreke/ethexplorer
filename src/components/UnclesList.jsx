import { Table } from 'react-bootstrap';

export default function UnclesList({ items, mapper }) {
  return (
    <div className="py-4">
      <Table striped bordered>
        <colgroup>
          <col span="1" style={{width: '5%'}} />
          <col span="1" style={{width: '95%'}} />
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
          {items.map((uncle, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td className="text-truncate">{uncle}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}