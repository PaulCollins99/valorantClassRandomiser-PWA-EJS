var express = require('express');
var router = express.Router();


router.get('/:count', function(req, res, next) {
    let details = req.params.count
    let detailSplit = details.split('&')
    let players = JSON.parse(detailSplit[1])
    let playerNamesArr = []
    let characterNamesArr = []
    for (let i = 0; i<players.length; i++) {
        playerNamesArr.push(players[i].name)
        characterNamesArr.push(players[i].character)
    }

    let obj = {
        playerCount: detailSplit[0],
        playerNames: playerNamesArr,
        characterNames: characterNamesArr,
    }
    res.render('main', { playerObj: obj });
  });

module.exports = router;