import React from 'react';
// import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import Footer from '../src/Footer/Footer';
import Routes from 'routes';
import themes from 'themes';
import NavigationScroll from 'layout/NavigationScroll';

const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        {/* <Helmet>
          <meta httpEquiv="Content-Security-Policy" content="frame-ancestors 'self' https://example.com" />
        </Helmet> */}
        <NavigationScroll>
          <Routes />
          <div style={{ height: '10vh' }}>
            <Footer />
          </div>
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
