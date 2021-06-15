import React from 'react';
import MainRouter from './MainRouter';

import 'normalize.css';
import '../styling/style.scss';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import smoothscroll from 'smoothscroll-polyfill';

export default function App() {
  smoothscroll.polyfill();

  return (
    <>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </>
  );
}
