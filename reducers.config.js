module.exports = {
    entry: {
        index: './reducers/index.js',
        todos: './reducers/todos.js',
        visibilityFilters: './reducers/visibilityFilters.js',
    },
    output: {
        path: './build/reducers',
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