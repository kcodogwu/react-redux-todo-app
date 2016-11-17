module.exports = {
    entry: {
        hello: './containers/hello.js'
    },
    output: {
        path: './build/containers',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: [
                        'es2015',
                        'react',
                        'stage-0'
                    ]
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    }
};