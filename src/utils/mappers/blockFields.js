const blockFieldsMapper = {
  number: {
    title: 'Block Height:',
    tooltip: 'Also known as Block Number. The block height, which indicates the length of the blockchain, increases after the addition of the new block.'
  },
  timestamp: {
    title: 'Timestamp:',
    tooltip: 'The date and time at which a block is mined.'
  },
  transactions: {
    title: 'Transactions:',
    tooltip: 'The number of transactions in the block. Internal transaction is transactions as a result of contract execution that involves Ether value.'
  },
  miner: {
    title: 'Mined by:',
    tooltip: 'Miner who successfully include the block onto the blockchain.'
  },
  blockReward: {
    title: 'Block Reward:',
    tooltip: 'For each block, the miner is rewarded with a finite amount of Ether on top of the fees paid for all transactions in the block.'
  },
  unclesReward: {
    title: 'Uncles Reward:',
    tooltip: 'An uncle block has a significantly lower reward than a normal block. Uncles reward is valid but rejected as it is not on the longest chain which is the working mechanism of the blockchain. Uncle block is important in Ethereum as it secures the blockchain.'
  },
  difficulty: {
    title: 'Difficulty:',
    tooltip: 'The amount of effort required to mine a new block. The difficulty algorithm may adjust according to time.'
  },
  totalDifficulty: {
    title: 'Total Difficulty:',
    tooltip: 'Total difficulty of the chain until this block.'
  },
  size: {
    title: 'Size:',
    tooltip: 'The block size is actually determined by the block\'s gas limit.'
  },
  gasUsed: {
    title: 'Gas Used:',
    tooltip: 'The total gas used in the block and its percentage of gas filled in the block.'
  },
  gasLimit: {
    title: 'Gas Limit:',
    tooltip: 'Total gas limit provided by all transactions in the block.'
  },
  baseFeePerGas: {
    title: 'Base Fee Per Gas:',
    tooltip: 'Post-London Upgrade, this represents the minimum gasUsed multiplier required for a tx to be included in a block.'
  },
  nonce: {
    title: 'Nonce:',
    tooltip: 'Block nonce is a value used during mining to demonstrate proof of work for a block.'
  },
  extraData: {
    title: 'Extra Data:',
    tooltip: 'Any data that can be included by the miner in the block.'
  },
  hash: {
    title: 'Hash:',
    tooltip: 'The hash of the block header of the current block.'
  },
  parentHash: {
    title: 'Parent Hash:',
    tooltip: 'The hash of the block from which this block was generated, also known as its parent block.'
  },
  sha3Uncles: {
    title: 'Sha3Uncles:',
    tooltip: 'The mechanism which Ethereum Javascript RLP encodes an empty string.'
  },
  stateRoot: {
    title: 'State Root:',
    tooltip: 'The root of the state trie'
  },
  logsBloom: {
    title: 'Bloom filter:',
    tooltip: 'Bloom filter consisting of the information contained in the logs'
  },
  mixHash: {
    title: 'Mix Hash:',
    tooltip: 'In combination with a nonce, asserts that there is enough computation in progress for the current block'
  },
  receiptsRoot: {
    title: 'Receipts Root:',
    tooltip: 'Contains payment information for all transactions listed in this block'
  },
  transactionsRoot: {
    title: 'Transactions Root:',
    tooltip: 'Hash of the root node of the prefix tree containing all transactions that are listed in this block'
  },
}

export default blockFieldsMapper;
