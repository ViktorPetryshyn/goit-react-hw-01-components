import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/utils/theme';
import { Box } from 'components/utils/box';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <App />
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);
