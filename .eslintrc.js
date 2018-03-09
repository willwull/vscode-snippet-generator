module.exports = {
    "extends": "airbnb", // for React
    "env": {
        "node": true,
        "browser": true,
    },
    "rules": {
        "quotes": [
            "error",
            "double"
        ],
        "no-console": 0,
        "no-underscore-dangle": 0,
        "no-use-before-define": 0,
        "no-plusplus": 0,
        "quote-props": 0,
        "react/jsx-filename-extension": 0,
        "jsx-a11y/label-has-for": [2, {
            "components": ["Label"],
            "required": {
                "some": ["nesting", "id"]
            },
            "allowChildren": false
        }],
    },
};
