module.exports = {
  assumptions: {
    "noDocumentAll": true,
  },
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining', // 解析可选链
    '@babel/plugin-proposal-nullish-coalescing-operator', // 双问好
  ],
}
