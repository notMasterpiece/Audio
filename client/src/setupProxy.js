const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api', {
            target: 'https://accounts.spotify.com/api',
            pathRewrite: {
                '^/api': '', // rewrite path
            },
            changeOrigin: true,
        }
    ));
};