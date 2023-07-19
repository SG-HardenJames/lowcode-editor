const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
    env: {
        es6: true
    },
    // 配置解析TS的AST
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest'
    },
    // eslint默认只能有一个parser，所以需要继续使用parser
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                sourceType: 'module',
                ecmaVersion: 'latest'
            },
            extends: ['plugin:vue/vue3-recommended']
        }
    ],
    rules: {
        "vue/multi-word-component-names": "off",
    },
})