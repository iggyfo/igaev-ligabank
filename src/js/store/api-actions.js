import {loadQuotes} from "./action";
import {BACKEND_URL} from "../services/api";

export const fetchQuotes = () => (dispatch, _getState, api) => (
  api.get(BACKEND_URL)
    .then(({data}) => dispatch(loadQuotes(data)))
    .catch(() => {})
);


