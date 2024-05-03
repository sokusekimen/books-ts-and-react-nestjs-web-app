import React from "react";
import type { Preview } from "@storybook/react";
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { theme } from '../src/themes'
import * as NextImage from 'next/image'

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000000;
  }
`

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    actions: { argTypesRegex: '^on.*' },
    decorators: [
      (Story) => (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      ),
    ],
  },
};

// TODO: Cannot redefine property: default となり動かないのでコメントアウト
// next/imageの差し替え
// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => typeof props.src === 'string' ? (
//     <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
//   ) : (
//     <OriginalNextImage {...props} unoptimized />
//   ),
// })

export default preview;
