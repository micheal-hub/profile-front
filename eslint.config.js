import js from '@eslint/js'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import oxlint from 'eslint-plugin-oxlint'
import pluginVue from 'eslint-plugin-vue'
import webpack from 'webpack'


export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  oxlint.configs['flat/recommended'],
  skipFormatting,
  new webpack.ProvidePlugin({
    $: 'jquery',
    jquery: 'jquery',
    'window.jQuery': 'jquery',
    jQuery: 'jquery'
  })
]
