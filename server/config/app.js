module.exports = app => {
  // server address
  app.set('host', process.env.HOST || 'localhost');
  app.set('port', process.env.PORT || 3000);

  // development env
  if (process.env.NODE_ENV === 'development') {
    app.use(require('morgan')('dev'));
  }
};