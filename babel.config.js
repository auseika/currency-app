module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.png',
          '.jpg',
          '.svg',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
          '.mp4',
        ],
        root: ['./App'],
        alias: {
          '@Assets': './App/Assets',
          '@Components': './App/Components',
          '@Screens': './App/Screens',
          '@Types': './App/Types/index.ts',
          '@Globals': './App/Globals/index.ts',
          '@MOCK_DATA': './App/MOCK_DATA',
        },
      },
    ],
    [
      'dotenv-import',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false,
      },
    ],
  ],
};
