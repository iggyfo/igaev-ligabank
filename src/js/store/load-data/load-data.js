import {createReducer} from "@reduxjs/toolkit";
import {loadQuotes, conversationDate} from '../action';


const initialState = {
  quotes: null,
  conversationDate: [],
};

const loadData = createReducer(initialState, (builder) => {
  builder.addCase(loadQuotes, (state, action) => {
    state.quotes = action.payload;
  });
  builder.addCase(conversationDate, (state, action) => {
    state.conversationDate.push(action.payload);
  });
});


export {loadData};
