"use strict";

const path = require('path'); 
const fs = require('fs');
//const webpack = require('webpack');
//const ip = require('ip');

/*
const autoprefixer = require('autoprefixer');                       //添加浏览器前缀
const ExtractTextPlugin = require("extract-text-webpack-plugin");   //独立拆分css
const CopyWebpackPlugin = require('copy-webpack-plugin');           //复制文件
const OpenBrowserPlugin = require('open-browser-webpack-plugin');   //打开浏览器
*/

//let myIp = ip.address();
//process.env.NODE_ENV = 'development';

 
//入口程序,解析app.js
/*
let getEntries = (function() {
    let entries = {};
    let basePath = path.join(__dirname, './src');
    let entryFile = 'index.js';
    let dirs = fs.readdirSync(basePath);

    dirs.forEach(function(dir) {
        let fp = path.join(basePath, dir, entryFile);
        if (fs.existsSync(fp)) {
            
            entries[dir] = [
                'webpack/hot/dev-server',
                'webpack-dev-server/client?http://' + myIp + ':' + process.env.npm_package_config_port, 
                fp
            ]; 
        }
    });
    
    return entries;
})();
*/

module.exports = {
    mode: 'development', 
    //mode: 'production',
    
    // webpack 打包的對象
    entry: [ 
        './src/app.jsx'
    ],
    // entry: getEntries,
    output: {
        //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
        path: path.resolve(__dirname, './dist'),
        
        //這裡是打包後的檔案名稱
        filename: 'bundle.js', 
    },
    //debug: true,
    devtool: "#eval-source-map",
      
    //將loader的設定寫在module的rules屬性中
    module: { 
        rules: [
            //編譯 JSX 的 loader，將@babel/preset-env加進preset中
            { 
                test: /.jsx$/,                  // 目標編譯檔案的副檔名
                exclude: /node_modules/,        // 指定不編譯的路徑
                use: {                          // 指定用來編譯符合副檔名條件的loader 
                    loader: 'babel-loader', 
                    options: { 
                        presets: [
                            '@babel/preset-react' 
                            ,'@babel/preset-env'
                        ] 
                    } 
                } 
            },
             
            //編譯 ES6 的 loader
            { 
                test: /.js$/,                   // 目標編譯檔案的副檔名
                exclude: /node_modules/,        // 指定不編譯的路徑
                use: {                          // 指定用來編譯符合副檔名條件的loader 
                    loader: 'babel-loader', 
                    options: { 
                        presets: ['@babel/preset-env'] 
                    } 
                } 
            }
        ]
    },
    
    // webpack-dev-server 設定
    devServer: {
        //指定開啟 port 為 9000
        port: 9000,
        historyApiFallback: true,
    }
};