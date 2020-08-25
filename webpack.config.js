const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        main: './sass/main.scss',
    },
    output: {
        path: path.resolve(__dirname, './out'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { url: false },
                    },
                    {
                        loader: 'postcss-loader',
                        options: { plugins: () => [autoprefixer()] },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
    watchOptions: {
        ignored: /node_modules/,
    },
};