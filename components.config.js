module.exports = {
    entry: {
        App: './components/App.js',
        Footer: './components/Footer.js',
        Link: './components/Link.js',
        Todo: './components/Todo.js',
        TodoList: './components/TodoList.js',
    },
    output: {
        path: './build/components',
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