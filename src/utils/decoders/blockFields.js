import decodeDate from './_date';
import decodeExtraData from './_extraData';
import decodeInteger from './_integer';
import formatInteger from '../formatters/integer';

const blockFieldsDecoder = {
  number: (value) => decodeInteger(value),
  timestamp: (value) => decodeDate(value),
  transactions: (value) => `${value.length} transactions in this block`,
  baseFeePerGas: (value) => formatInteger(decodeInteger(value)),
  difficulty: (value) => formatInteger(decodeInteger(value)),
  totalDifficulty: (value) => formatInteger(decodeInteger(value)),
  extraData: (value) => decodeExtraData(value),
  gasLimit: (value) => formatInteger(decodeInteger(value)),
  gasUsed: (value) => formatInteger(decodeInteger(value)),
  size: (value) => `${formatInteger(decodeInteger(value))} bytes`,
}

export default blockFieldsDecoder;
