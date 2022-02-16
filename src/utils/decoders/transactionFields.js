const transactionFieldsDecoder = {
  value: (value) => `${(parseInt(value, 16) / 1_000_000_000_000_000_000).toFixed(5)} ETH`,
}

export default transactionFieldsDecoder;
