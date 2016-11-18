module.exports = {
    entry: {
        AddTodo: './containers/AddTodo.js',
        FilterLink: './containers/FilterLink.js',
        VisibleTodoList: './containers/VisibleTodoList.js',
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