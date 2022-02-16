const hex2a = (value) => {
  var hex = value.toString();
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

export default function extraData(value) {
  let result = '';
  const extraDataHex = value.substring(2);

  try {
    result = decodeURIComponent(extraDataHex.replace(/\s+/g, '').replace(/[0-9a-f]{2}/g, '%$&'));
  } catch (e) {
    result = hex2a(extraDataHex);
  }

  return result;
}
