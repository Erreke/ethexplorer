async function getInfo({ method, params }) {
  const response = await fetch(new Request("https://cloudflare-eth.com", {
    method: "POST",
    body: JSON.stringify({
      "jsonrpc": "2.0",
      "method": method,
      "params": params,
      "id": 1
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }));

  const json = await response.json();

  if (json.error) {
    throw new Error(json.error.message);
  }

  return json.result;
}

export function getBlockByNumber(number) {
  return Promise.all([
    getInfo({
      method: "eth_getBlockByNumber",
      params: [number, true],
    }),
    getInfo({
      method: "eth_blockNumber",
      params: [true],
    })
  ]);
}

export async function getTransactionByHash(hash) {
  return await getInfo({
    method: "eth_getTransactionByHash",
    params: [hash],
  });
}

export async function getLatestBlockNumber() {
  return await getInfo({
    method: "eth_blockNumber",
    params: [true],
  });
}
