import React from 'react';
import { ThemeProvider } from 'styled-components';
//hooks
import { useMetaDataQuery } from 'hooks/useMetaDataQuery';
//styles
import { GlobalStyles, lightTheme, darkTheme } from 'styles/GlobalStyles';

// react component children
const Layout = ({ children }) => {
  const data = useMetaDataQuery();
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      Layout component
      {children}
    </ThemeProvider>
  );
};

export default Layout;
