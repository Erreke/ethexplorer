const fullTransactionFieldsMapper = {
  hash: {
    title: 'Transaction Hash:',
    tooltip: 'A TxHash or transaction hash is a unique 66-character identifier that is generated whenever a transaction is executed.'
  },
  blockNumber: {
    title: 'Block:',
    tooltip: 'Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was mined.'
  },
  from: {
    title: 'From:',
    tooltip: 'The sending party of the transaction.'
  },
  to: {
    title: 'To:',
    tooltip: 'The receiving party of the transaction (could be a contract address).'
  },
  value: {
    title: 'Value:',
    tooltip: 'The value being transacted in Ether and fiat value. Note: You can click the fiat value (if available) to see historical value at the time of transaction.'
  },
  type: {
    title: 'Type:',
    tooltip: 'On Ethereum there are a few different types of transactions.'
  },
  gas: {
    title: 'Gas used:',
    tooltip: ''
  },
  gasPrice: {
    title: 'Gas Price:',
    tooltip: 'Cost per unit of gas specified for the transaction, in Ether and Gwei. The higher the gas price the higher chance of getting included in a block.'
  },
  nonce: {
    title: 'Nonce:',
    tooltip: 'Block nonce is a value used during mining to demonstrate proof of work for a block.'
  },
}

export default fullTransactionFieldsMapper;
