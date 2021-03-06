import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ThemeProvider } from 'styled-components';
import store from './store';
import { Provider } from 'react-redux';
import AppShell from './components/AppShell';
import { Route, Switch } from 'react-router-dom';
import Home from './scenes/Home';
import Booking from './scenes/Booking';
import Inventory from './scenes/Inventory';
import Transaction from './scenes/Transaction';
import BookingList from './scenes/BookingList';
import User from './scenes/User';
import History from './scenes/History';
import Add from './scenes/Add';
import Modal from './components/Modal';
import { theme, muiTheme } from './utils/theme';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <ThemeProvider theme={theme}>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <AppShell>
                  <Home />
                </AppShell>
              )}
            />
            <Route
              exact
              path="/booking"
              render={() => (
                <AppShell>
                  <Booking />
                </AppShell>
              )}
            />
            <Route
              path="/inventory"
              render={() => (
                <AppShell>
                  <Inventory />
                </AppShell>
              )}
            />
            <Route
              path="/transaction"
              render={() => (
                <AppShell>
                  <Transaction />
                </AppShell>
              )}
            />
            <Route
              exact
              path="/bookinglist"
              render={() => (
                <AppShell>
                  <BookingList />
                </AppShell>
              )}
            />
            <Route
              path="/user"
              render={() => (
                <AppShell>
                  <User />
                </AppShell>
              )}
            />
            <Route
              path="/history"
              render={() => (
                <AppShell>
                  <History />
                </AppShell>
              )}
            />
            <Route
              path="/add"
              render={() => (
                <AppShell>
                  <Add />
                </AppShell>
              )}
            />
          </Switch>
          <Modal />
        </div>
      </ThemeProvider>
    </MuiThemeProvider>
  </Provider>
);

export default App;
