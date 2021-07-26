import axios from "axios";
import {getCurrencyPairs} from "../utils";

const BACKEND_URL = `https://currate.ru/api/?get=rates&pairs=${getCurrencyPairs()}&key=1b6e8651521c0793ddd73b4cd8708552`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  INVALID_API_KEY: 403,
};

const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;
    if (response.status === HttpCode.INVALID_API_KEY) {
      throw err;
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createApi, HttpCode, BACKEND_URL};
