module.exports = function(app)
{
    app.get('/node', function(req, res)
    {
        res.render("node");
    });
};