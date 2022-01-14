// Libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Context
import { WeatherInfoProvider } from "./context/WeatherInfoContext";

// Layouts
import MainLayout from "./Layouts/MainLayout";

// Views
import Home from "./Views/Home/Home";
import WeatherInformation from "./Views/WeatherInformation/WeatherInformation";
import NotFound from "./Views/NotFound/NotFound";

function App() {
  return (
    <WeatherInfoProvider>
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/weather/:name" exact>
              <WeatherInformation />
            </Route>

            <Route path="*" exact>
              <NotFound />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    </WeatherInfoProvider>
  );
}

export default App;
