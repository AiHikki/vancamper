export const formatPrice = price => {
  let numberPrice = Number(price);

  return numberPrice.toFixed(2);
};

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const addSpace = (string, symbolToSplit) => {
  const n = string.split(symbolToSplit).join('');
  return n + ' ' + symbolToSplit;
};
