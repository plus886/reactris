import 'babel-polyfill';
import path from 'path';
import webpack from 'webpack';

const DEBUG = !process.argv.includes('--release');
const VERBOSE = process.argv.includes('--verbose');

export default {
    cache: DEBUG,

    debug: DEBUG,

    stats: {
        colors: true,
        reasons: DEBUG,
        hash: VERBOSE,
        version: VERBOSE,
        timings: true,
        chunks: VERBOSE,
        chunkModules: VERBOSE,
        cached: VERBOSE,
        cachedAssets: VERBOSE
    },

    entry: './src/app.jsx',

    output: {
        publicPath: '/',
        sourcePrefix: '  ',
        path: path.join(__dirname, 'dist/assets/js'),
        filename: 'app.js'
    },

    target: 'web',

    devtool: DEBUG ? 'cheap-module-eval-source-map' : false,

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': `"${process.env.NODE_ENV || (DEBUG ? 'development' : 'production')}"` }),
        ...(DEBUG ? [] : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({ compress: { screw_ie8: true, warnings: VERBOSE } }),
            new webpack.optimize.AggressiveMergingPlugin()
        ])
    ],

    resolve: {
        root: [
            path.resolve('./src')
        ],
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?modules", "sass"]
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css?modules']
            }
        ]
    }
};