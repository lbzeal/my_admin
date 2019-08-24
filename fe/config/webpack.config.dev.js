/**1.入口app.js
 * 2.出口app.js
 * 3.开启服务器
 * 4.解析模板和scss文件
 * 5.打包html和公共文件夹
 */

 const path = require('path');
 const htmlWebpackPlugin = require('html-webpack-plugin');
 const copyWebpackPlugin = require('copy-webpack-plugin');

 module.exports = {
     mode : 'development',

    //  入口;
    entry : './src/app.js',
    //出口
    output : { 
        path : path.resolve(__dirname , '../dev'),
        filename : 'app.js'
    },

    devServer : {
        contentBase : path.resolve(__dirname , '../dev'),
        port : 8000,
        host :'10.60.15.51',
        proxy : {
            '/api' : {
                target : 'http://10.60.15.51:3000',
            }
        }
    },

    plugins : [
        new htmlWebpackPlugin({
            template : './index.html',
            filename : 'index.html'
        }),
        new copyWebpackPlugin([{
            from : './assets',
            to : './assets'
        }])
    ],

    module : {
        rules : [
            {
                test : /\.art$/,
                loader : "art-template-loader",
            },
            {
                test : /\.(scss)|(css)$/,
                loader : ['style-loader','css-loader','sass-loader']
            }
        ]
    }

 }