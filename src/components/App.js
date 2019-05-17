import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main';
import Magnifier from './Magnifier';
import NoMatch from './NoMatch';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <BrowserRouter basename="image-magnifier">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/check/:img" component={Magnifier} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
