const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

module.exports = {

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new miniCss({
            filename: 'styles.css',
         }),
    ],

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                } 
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test:/\.(s*)css$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader'
                 ]
            }
        ]
    },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js']
    }
}
