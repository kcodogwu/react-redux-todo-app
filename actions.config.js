module.exports = {
    entry: {
        hello: './actions/hello.js'
    },
    output: {
        path: './build/actions',
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