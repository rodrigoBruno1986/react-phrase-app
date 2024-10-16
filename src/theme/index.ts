import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import typography from './typography';

const theme = extendTheme({
  colors,
  fonts: typography.fonts,
  fontSizes: typography.fontSizes,
  fontWeights: typography.fontWeights,
});

export default theme;
