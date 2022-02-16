import decodeInteger from './_integer';
import formatInteger from '../formatters/integer';

const fullTransactionFieldsDecoder = {
  blockNumber: (value) => decodeInteger(value),
  value: (value) => `${(decodeInteger(value) / 1_000_000_000_000_000_000).toFixed(5)} ETH`,
  gas: (value) => formatInteger(decodeInteger(value)),
  gasPrice: (value) => formatInteger(decodeInteger(value)),
  type: (value) => decodeInteger(value),
}

export default fullTransactionFieldsDecoder;
