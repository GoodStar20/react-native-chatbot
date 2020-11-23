module.exports = {
  root: true,
  plugins: ['react', 'react-native', 'pettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
    useJSXTextNode: false,
  },
  env: {
    'react-native/react-native': true,
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
    '@react-native-community',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-color-literals': 0,
    'react-hooks/exhaustive-deps': 0,
    'react-native/no-inline-styles': 0,
    'react-native/no-raw-text': 0, // Avoid false positive, wait for fix
  },
}
