module.exports = (app) => {
    require('./usuario')(app);
    require('./login')(app);
    require('./doctor')(app);
    require('./especialidad')(app);
}