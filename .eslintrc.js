module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], // 允许使用 eslint
        "import/prefer-default-export": "off",
        "arrow-body-style": "off",
        "no-unused-vars": "off",
        "react/prefer-stateless-function": "off",
        "max-len": "off",
        "react/prop-types": "off",
    },
    "globals": { // 忽略全局对象
        "window": true,
        "document": true,
    },
    "parser": "babel-eslint", // 转换箭头函数
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalDecorators": true,
        },
    },
};