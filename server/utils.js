const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min)

const haveUnsubmittedPlayers = (players) => {
    const keys = Object.keys(players)

    return keys.some((key) => {
        return players[key].type === 'human'
            && (!players[key].bet || !players[key].multiplier)
    })
}

const createBetForBots = (players) => {
    const keys = Object.keys(players)

    if(!haveUnsubmittedPlayers(players)){
        keys.forEach((key) => {
            if(players[key].type === 'bot'){
                players[key].bet = getRandomInt(0, players[key].pointsLeft)
                players[key].multiplier = getRandomInt(0, 1000) / 100
            }
        })
    }
}

const getPlayersData = (players) => {
    const keys = Object.keys(players)

    return haveUnsubmittedPlayers(players)
        ? keys.map((key) => ({
            name: players[key].username
        }))
        : keys.map((key) => ({
            name: players[key].username,
            type: players[key].type,
            bet: players[key].bet,
            multiplier: players[key].multiplier,
            pointsLeft: players[key].pointsLeft
        }))
}

const getPlayersRanks = (players) => {
    const keys = Object.keys(players)

    return keys.map((key) => ({
        name: players[key].username,
        pointsLeft: players[key].pointsLeft
    }))
}

const calcPointsLeft = (players, mainBet) => {
    const keys = Object.keys(players)

    keys.forEach((key) => {
        if(players[key].multiplier <= mainBet){
            players[key].pointsLeft =
                (players[key].pointsLeft + players[key].bet * players[key].multiplier).toFixed()
        } else {
            players[key].pointsLeft = (players[key].pointsLeft - players[key].bet).toFixed()
        }
    })
}

module.exports = {
    getPlayersData,
    getPlayersRanks,
    haveUnsubmittedPlayers,
    createBetForBots,
    getRandomInt,
    calcPointsLeft
}