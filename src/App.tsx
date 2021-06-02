import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./style/global";
import Routes from "./routes/index";
import AppContainer from "./components/AppContainer";

const App: React.FC = () => (
  <>
    <AppContainer>
      <GlobalStyle />

      <Router>
        <Routes />
      </Router>
    </AppContainer>
  </>
);

export default App;
