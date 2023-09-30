# KONFIGURASI

```
# KONFIGURASI FILE WEBPACK.COMMON.JS

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path              = require('path');
 
module.exports = {
  entry         : {
    app         : path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output        : {
    filename    : '[name].bundle.js',
    path        : path.resolve(__dirname, 'dist'),
    clean       : true,
  },
  module        : 
  {
    rules       : 
    [
      {
        test    : /\.css$/,
        use     : 
        [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins       : [
    new HtmlWebpackPlugin
    ({
      filename  : 'index.html',
      template  : path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin
    ({
      patterns  : [
        {
          from  : path.resolve(__dirname, 'src/public/'),
          to    : path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
  ],
};
```

```
# KONFIGURASI FILE WEBPACK.DEV.JS

const path      = require('path');
const { merge } = require('webpack-merge');
const common    = require('./webpack.common');
 
module.exports = merge(common, {
  mode      : 'development',
  devtool   : 'inline-source-map',
  devServer : {
    static  : path.resolve(__dirname, 'dist'),
    open    : true,
    port    : 9000,
    client  : 
    {
      overlay   : 
      {
        errors  : true,
        warnings: true,
      },
    },
    compress: true,
  },
});
```

```
# KONFIGURASI FILE WEBPACK.PROD.JS

const { merge } = require('webpack-merge');
const common    = require('./webpack.common');
 
module.exports = merge(common, {
  mode      : 'production',
  devtool   : 'source-map',
  module    : {
    rules: [
      {
        test    : /\.js$/,
        exclude : /node_modules/,
        use     : 
        [
          {
            loader  : 'babel-loader',
            options : 
            {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
});
```

```
# FILE: package.json

"scripts": {
  "start-dev": "webpack serve --config webpack.dev.js",
  "build": "webpack --config webpack.prod.js"
}
```

```
FILE: src/script/index.js

import 'regenerator-runtime';
console.log('Hello Coders!');
```

```
FILE: src/templates/index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Free movie catalogue for you">
  <link rel="icon" href="./favicon.png">
 
  <title>Movie Catalogue</title>
</head>
<body>
  <h1>Movie Catalogue</h1>
</body>
</html>
```

## KETERANGAN
* **webpack-merge** => menggabungkan nilai yang sama antar kedua env
* **style-loader & css-loader** => membuat css dapat digunakan secara modular
* **bable-loader** => mengubah sintaks ES6+ support seluruh browser ES5
* **HtmlWebpackPlugin** => membuat berkas html berdasarkan templaete yang ditetapkan
* **CopyWebpackPlugin** => menyalin aset-aset statis di dalam folder public
* **webpack-dev-server** => menentukan perilaku server lokal