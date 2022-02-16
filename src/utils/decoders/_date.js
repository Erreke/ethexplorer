import { DateTime } from 'luxon';

const locale = 'en-US';

export default function date(value) {
  const date = DateTime.fromSeconds(parseInt(value, 16));

  return `<i class="bi bi-clock"></i> ${date.setLocale(locale).toRelative()} (${date.setLocale(locale).toLocaleString(DateTime.DATETIME_FULL)})`; 
}
