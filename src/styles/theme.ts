import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {   // Pra trocar a escala de cinza que vem por padrão no Chakra
    gray: {
      "900": "#181b23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#47585B",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "##F5F8FA",
    }
  },

  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600'
      }
    }
  }
})