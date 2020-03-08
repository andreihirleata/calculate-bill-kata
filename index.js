const calculateBill = (amount, vat, tip) => {
  const errorMessage = `error`;
  //   if (isNaN(amount)) return errorMessage;
  //   if (isNaN(vat)) return errorMessage;
  //   if (isNaN(tip)) return errorMessage;

  if (isNaN(amount) || amount === null) return errorMessage;
  if (isNaN(vat) || vat === null) return errorMessage;
  if (isNaN(tip) || tip === null) return errorMessage;
  calculatedPrice = amount + (amount * vat) / 100 + tip;
  return `£${calculatedPrice.toString()}`;
};

module.exports = calculateBill;
