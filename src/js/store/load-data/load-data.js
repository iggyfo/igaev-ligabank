import {createReducer} from "@reduxjs/toolkit";
import {loadQuotes, saveAmountHave, saveCurrencyHave} from '../action';


const initialState = {
  quotes: null,
  amountHave: ``,
  amountWant: null,
  currencyHave: `RUB`,
  conversationDate: null,
};

const loadData = createReducer(initialState, (builder) => {
  builder.addCase(loadQuotes, (state, action) => {
    state.quotes = action.payload;
  });
  builder.addCase(saveAmountHave, (state, action) => {
    state.amountHave = action.payload;
  });
  builder.addCase(saveCurrencyHave, (state, action) => {
    state.currencyHave = action.payload;
  });
});


export {loadData};
