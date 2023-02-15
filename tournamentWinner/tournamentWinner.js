function tournamentWinner(competitions, results) {
    let scores = {};
    let winner = {score: 0, team: ''};
    for (let i = 0; i < results.length; i++) {
        if (!scores.hasOwnProperty(competitions[i][0])) {
            scores[competitions[i][0]] = 0;
        }

        if (!scores.hasOwnProperty(competitions[i][1])) {
            scores[competitions[i][1]] = 0;
        }

        if (results[i] === 0) {
            scores[competitions[i][1]] += 3;
        } else {
            scores[competitions[i][0]] += 3
        }
    }

    for (let team in scores) {
        if (scores[team] > winner.score) {
            winner.team = team;
            winner.score = scores[team];
        }
    }

    return winner.team;
}

module.exports = tournamentWinner;