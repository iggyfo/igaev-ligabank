import browserHistory from "../browser-history";
import {Route, Switch} from "react-router-dom";
import {AppRoute} from "../const";
import {Router as BrowserRouter} from "react-router";
import CurrencyConverter from "./currency-converter"

function App() {
  return (
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path={AppRoute.CURRENCY_CONVERTER}>
            <CurrencyConverter />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
