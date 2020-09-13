import React from 'react'
import {ThemeProvider} from 'theme-ui'
import theme from '../helpers/theme'

const CGDA = ({Component, pageProps}) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default CGDA
