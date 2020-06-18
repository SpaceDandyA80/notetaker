const dataBase = require('../db/db.json');
const fs = require('fs');
// const waitListData = require('../data/waitingList-data.js');

module.exports = function (app){

    app.get('/api/notes', function (req, res){
        res.json(dataBase);
    });
    app.post('/api/notes', function (req, res){
       // console.log(req.body);
        dataBase.push(req.body)

       // console.log(dataBase);

        res.json(dataBase);

        fs.readFile('./db/db.json','utf8', (err, data) => {
            if (err) throw err;
            console.log(data);
          });
    });
    


    app.delete('/api/notes/:id', function(req,res){
      console.log( req.params.id)
    });

}