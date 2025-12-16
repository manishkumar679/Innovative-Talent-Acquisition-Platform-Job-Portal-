import {createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux';
import Store from './Store';
import AppRoutes from './Pages/AppRoutes';
import React from 'react';
function App() {

  const theme = createTheme({
    focusRing: "never",
    fontFamily: 'Poppins, sans-serif',
    primaryColor: 'brightSun',
    primaryShade: 4,
    colors: {
      'brightSun': ['#f8f9fa', '#e9ecef', '#dee2e6', '#adb5bd', '#4682B4', '#0275d8', '#0069d9', '#0062cc', '#005cbf', '#004085', '#002752'
      ],
      'mineShaft': ['#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#6c757d', '#495057', '#343a40', '#212529', '#1a1a1a', '#0a0a0a']
    }
  })
  return (
    <Provider store={Store}>
    <MantineProvider defaultColorScheme="dark" theme={theme} >
       <Notifications  position="top-center" zIndex={2001} />
      <AppRoutes/>
    </MantineProvider>
    </Provider>
  );
}

export default App;