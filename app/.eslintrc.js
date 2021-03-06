{
  "extends": ["airbnb"],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "parser": "babel-eslint",
  "rules": {
    "no-underscore-dangle": ["off"],
    "import/prefer-default-export": ["off"],
    "import/no-unresolved": ["error", { "ignore": ["^@"] }],
    "jsx-a11y/href-no-hash": ["off"],
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "semi": ["error", "never"],
    "react/jsx-props-no-spreading": ["off"],
    "max-len": [
      "error",
      {
        "code": 80,
        "tabWidth": 2,
        "comments": 80,
        "ignoreComments": false,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ]
  },
  "settings": {
    "import/parsers": {
      "babel-eslint": [".js", ".jsx"]
    }
  }
}
