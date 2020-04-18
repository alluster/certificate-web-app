const routes = module.exports = require('next-routes')();

routes
    .add('index', '/')
    .add('about', '/about')
    .add('contact', '/contact')
    .add('certificate', 'certificate/:id')
