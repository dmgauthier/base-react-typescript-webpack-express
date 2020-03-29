const path  = require('path'),
webpack = require('webpack'),
HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: ['./src/App.tsx', 'webpack-hot-middleware/client'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'}
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({template: path.resolve(__dirname, 'src', 'index.html')}),
        new webpack.HotModuleReplacementPlugin()
    ]
}