import {combineReducers} from 'redux';
import {loadData} from "./load-data/load-data";

export const NameSpace = {
  DATA: `DATA`,
};

export default combineReducers({
  [NameSpace.DATA]: loadData,
});

