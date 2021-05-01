import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Theme/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme/Theme"
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

import './App.css';
import {
  Provider
} from 'react-redux';
import store from './redux/store';

import LoginComponent from "./components/LoginComponent"
function App() {
  const [videos, setVideos] = useState([]);
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <div className="App">
            <button onClick={themeToggler}>Switch Theme</button>
            <AccessAlarm />

            <LoginComponent />
          </div>
        </>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
