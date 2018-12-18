import React from 'react';
import Transition from '../components/transition';
import { ThemeProvider } from 'styled-components';

const theme = {
  black: '#000000',
  gold: '#daa520',
  goldRGB: '218, 165, 32',
  maxWidth: '1000px',
  shadow: '0 12px 24px 0 rgba(0, 0, 0, 0.1)',
};

const wrapPageElement = ({ element, props }) => {
  return (
    <Transition {...props}>
      <ThemeProvider theme={theme} {...props}>
        {element}
      </ThemeProvider>
    </Transition>
  )
};

export default wrapPageElement;
