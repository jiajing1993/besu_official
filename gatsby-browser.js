/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Note: This could help to debug the page transition issue.
// https://github.com/gatsbyjs/gatsby/issues/8822

import React from "react"
import { ThemeProvider } from 'styled-components';


const theme = {
  black: '#000000',
  gold: '#daa520',
  goldRGB: '218, 165, 32',
  maxWidth: '1000px',
  shadow: '0 12px 24px 0 rgba(0, 0, 0, 0.1)',
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme} {...props}>
      {element}
    </ThemeProvider>
  )
}