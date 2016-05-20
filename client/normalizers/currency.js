/**
 *
 */

import numeral from 'numeral';

const currencyFormat = '$0,0';

/**
 * Normalize currency fields
 */

export default (value, previousValue) => {

  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  const currency = numeral(onlyNums).format(currencyFormat);

  return currency;
}
