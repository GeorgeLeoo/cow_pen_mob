module.exports = {
    pages: {
        app: {
            entry: 'src/main.js',
            template: 'public/index.html',
            title: 'cow_pen_mob',
            output: 'dist_app',
        },
        ui: {
            entry: 'ui/src/main.js',
            template: 'ui/public/index.html',
            title: 'UI组件',
            output: 'dist_ui',
        }
    }
}
