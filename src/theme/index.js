import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#1f883d',
    'gray-100': '#f6f8fa',
    'gray-200': '#eff2f5',
    'gray-300': '#d0d9e0',
    'gray-400': '#59636e',
    'gray-500': '#2e333b',
    'gray-600': '#25292e',
  },
  styles: {
    global: {
      body: {
        color: 'gray-600',
        _dark: {
          bg: 'gray-500',
          color: 'gray-100',
        },
      },
    },
  },
  components: {
    Badge: {
      baseStyle: {
        borderRadius: 'lg',
        px: '2',
        textTransform: 'none',
      },
    },
    Button: {
      baseStyle: {
        fontWeight: '600',
      },
      variants: {
        solid: {
          bgColor: 'gray-100',
          border: '1px solid',
          borderColor: 'gray-300',
          _dark: {
            bgColor: 'gray-500',
            borderColor: 'gray-400',
          },
          _hover: {
            bgColor: 'gray-200',
            _dark: {
              bgColor: 'gray-600',
            },
          },
        },
      },
      defaultProps: {
        size: 'sm',
      },
    },
    Card: {
      baseStyle: {
        container: {
          boxShadow: 'none',
          transition: 'all 0.3s',
          _dark: {
            bg: 'gray-500',
          },
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
        _dark: {
          color: 'gray-100',
        },
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
    Link: {
      baseStyle: {
        _dark: {
          color: 'gray-100',
        },
      },
    },
  },
});

export default theme;
