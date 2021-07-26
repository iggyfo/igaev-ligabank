import {createAction} from '@reduxjs/toolkit';


export const ActionType = {
  LOAD_QUOTES: `data/loadQuotes`,
  AMOUNT_HAVE: `data/amountHave`,
  CURRENCY_HAVE: `data/currencyHave`
};

const loadQuotes = createAction(ActionType.LOAD_QUOTES, (quotes) => {
  return {
    payload: quotes,
  };
});

const saveAmountHave = createAction(ActionType.AMOUNT_HAVE, (amount) => {
  return {
    payload: amount,
  };
});

const saveCurrencyHave = createAction(ActionType.CURRENCY_HAVE, (currency) => {
  return {
    payload: currency,
  };
});

export {
  loadQuotes,
  saveAmountHave,
  saveCurrencyHave,
};
