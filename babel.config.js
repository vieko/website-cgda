module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['next/babel'],
    plugins: [
      [
        '@emotion/babel-plugin-jsx-pragmatic',
        {
          module: 'theme-ui',
          import: 'jsx',
          export: 'jsx',
        },
      ],
      [
        '@babel/plugin-transform-react-jsx',
        {
          pragma: 'jsx',
          pragmaFrag: 'React.Fragment',
        },
      ],
    ],
  }
}
