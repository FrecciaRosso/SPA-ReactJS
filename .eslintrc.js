module.exports = {
    parser: "babel-eslint",
    plugins: [
      "react"
    ],
    settings: {
      "react": {
        "pragma": "React",
        "version": "detect"
      }
    },
    env: {
      "browser": true,
      "es6": true,
      "jquery": true
    },
    rules:{
      "linebreak-style": 0,
      "no-console": "off",
      "indent": [1, "tab"]
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended"
    ]
};
