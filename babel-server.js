require('@babel/register')({
    presets: [
      '@babel/preset-env'
    ],
    "plugins": [
        "@babel/plugin-transform-flow-strip-types"
    ]
  });
  