const tasks = require("../controllers/tasks");

module.exports = function(app) {

    const task = require('../controllers/tasks');

    app.get('/tasks', function(req, res) {
        task.index(req, res);
    });

    app.get('/tasks/:id', function(req, res) {
        task.find_task(req, res);
    });

}