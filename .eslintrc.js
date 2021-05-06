module.exports = {
  extends: "react-native-typescript",
  rules: {
    "react-native/no-color-literals": 0,
    "react-native-a11y/has-accessibility-hint": 0,
    "react-native-a11y/has-valid-accessibility-state": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "import-order-alphabetical/order": 0,
    "@typescript-eslint/ban-types": 0,
    "react-native-a11y/has-valid-accessibility-ignores-invert-colors": 0,
    "react/no-did-mount-set-state": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "no-catch-shadow": 0,
    "@typescript-eslint/ban-ts-comment": 0,
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
