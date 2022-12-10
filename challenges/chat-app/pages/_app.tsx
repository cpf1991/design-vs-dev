import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import theme from '../theme/theme';
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <ThemeEditorProvider>
        <Component {...pageProps} />
      </ThemeEditorProvider>
    </ChakraProvider>
  );
};

export default App;
