/* eslint-disable no-var-requires */
const path = require('path'),
    webpack = require('webpack'),
    HtmlWebPackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
    entry: {
        app: ['./src/App.tsx', 'webpack-hot-middleware/client'],
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
            },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.s(c|a)ss$/,
                loader: [
                    true ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: true ? '[name].css' : '[name].[hash].css',
            chunkFilename: true ? '[id].css' : '[id].[hash].css',
        }),
    ],
}
