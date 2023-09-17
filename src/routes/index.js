const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {
    // app.get('/', (req, res) => {
    //     res.render('home');
    // });

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });

    // app.get('/news', (req, res) => {
    //     console.log(req.query.q)
    //     res.render('news');
    // });

    app.use('/news', newsRouter);
    app.use('/', siteRouter);

    


}

module.exports = route;