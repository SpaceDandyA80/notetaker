const dataBase = require('../db/db.json');
// const waitListData = require('../data/waitingList-data.js');

module.exports = function (app){

    app.get('/api/notes', function (req, res){
        res.json(dataBase);
    });
    app.post('/api/notes', function (req, res){
        console.log(req.body);
        dataBase.push(req.body)
        console.log(dataBase);

        res.json(dataBase);
    });

    app.delete('/api/notes/:id', function(req,res){
      console.log( req.params.id)
    });

}