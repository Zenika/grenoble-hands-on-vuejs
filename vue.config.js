module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Hands-on series 1/3 : VueJS'
                return args
            })
    }
}
