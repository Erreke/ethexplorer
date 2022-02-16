const locale = 'en-US';

export default function integer(value) {
  return new Intl.NumberFormat(locale).format(value)
}
