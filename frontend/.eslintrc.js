module.exports = {
    "extends": ["react-app", "plugin:jsx-a11y/recommended"],
    "plugins": [
        "jsx-a11y"
    ],
    "rules": {
        "jsx-a11y/no-onchange": 0,

        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
};
