import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#1f883d',
    'primary-bright': '#1c8139',
    'gray-100': '#f6f8fa',
    'gray-200': '#eff2f5',
    'gray-300': '#d0d9e0',
    'gray-400': '#59636e',
    'gray-500': '#25292e',
  },
  styles: {
    global: {
      body: {
        color: 'gray-500',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '600',
      },
      variants: {
        primary: {
          bgColor: 'primary',
          color: 'white',
          _hover: {
            bgColor: 'primary-bright',
          },
        },
        secondary: {
          bgColor: 'gray-100',
          border: '1px solid',
          borderColor: 'gray-300',
          _hover: {
            bgColor: 'gray-200',
          },
        },
      },
      defaultProps: {
        size: 'sm',
        variant: 'secondary',
      },
    },
    Card: {
      baseStyle: {
        container: {
          boxShadow: 'none',
          transition: 'all 0.3s',
          _hover: {
            transform: 'scale(0.98)',
            transition: 'all 0.3s',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '600',
      },
    },
    Input: {
      baseStyle: {
        field: {
          border: '1px solid',
          height: '12',
          _placeholder: {
            color: 'gray-400',
          },
        },
      },
      variants: {
        outline: {
          field: {
            borderColor: 'gray-300',
            fontSize: 'md',
            lineHeight: '4',
            _focusVisible: {
              borderColor: 'gray-200',
              boxShadow: 'none',
              zIndex: '1',
            },
            _hover: {
              borderColor: 'gray-200',
            },
          },
        },
      },
    },
  },
});

export default theme;
