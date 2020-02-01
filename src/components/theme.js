import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    default: '#000',
    blue: '#005ca9;',
    tableBorder: '#ccc',
    darkGrey: '#676767'
  },
  fonts: {
    headers: ['Nunito Sans', 'sans-serif'],
    body: ['Open Sans', 'sans-serif']
  },
  fontSizes: {
    small: '0.8rem',
    default: '1rem',
    medium: '1.2rem',
    large: '1.3rem',
    extraLarge: '2rem'
  },
  fontWeights: {
    medium: 400,
    bold: 700
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
