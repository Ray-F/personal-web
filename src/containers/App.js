import React from 'react';
import MainRouter from './MainRouter';

import 'normalize.css';
import '../styling/style.scss';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </>
  );
}
