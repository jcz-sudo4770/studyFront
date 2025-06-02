const js = require('@eslint/js')
const prettierPlugin = require('eslint-plugin-prettier')

module.exports = [
  {
    // 忽略 package.json 文件
    ignores: ['package.json'],
  },
  // 应用 ESLint 推荐规则，并配置环境
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      globals: {
        console: 'readonly',
        window: 'readonly', // 浏览器环境全局变量
        document: 'readonly',
        process: 'readonly', // Node.js 环境全局变量
      },
      parserOptions: {
        sourceType: 'module', // 支持 ES 模块
      },
    },
    ...js.configs.recommended,
  },
  {
    // 引入插件
    plugins: {
      prettier: prettierPlugin,
    },
    // 配置规则
    rules: {
      'prettier/prettier': 'error',
    },
  },
]
