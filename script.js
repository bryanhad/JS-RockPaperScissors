const body = document.querySelector('.body')
const selectButtons = document.querySelectorAll('[data-select]')
const winH5 = document.querySelector('#win')
const lossH5 = document.querySelector('#loss')
const drawH5 = document.querySelector('#draw')
const totalMatcH5 = document.querySelector('#totalMatch')

const POSSIBLE_PICKS = [
    {
        name:'rock',
        emoji:'✊',
        beats:'scissor',
    },
    {
        name:'paper',
        emoji:'✋',
        beats:'rock',
    },
    {
        name:'scissor',
        emoji:'✌️',
        beats:'paper',
    },
]

let TOTAL_MATCH = 0
let TOTAL_WINS = 0
let TOTAL_LOSSES = 0
let TOTAL_DRAWS = 0

selectButtons.forEach(button => {
    button.addEventListener('click', () => {
        let botPicks
        let status
        const userPick = POSSIBLE_PICKS.find(pick => pick.name === button.dataset.select)
        botPicks = botPick()
        status = isWinner(userPick, botPicks)
        const newRow = `
            <section class='${status}'>
                <h3 id='user'>${userPick.emoji}</h3>
                <h3 id='result'>${status.toUpperCase()}</h3>
                <h3 id='bot'>${botPicks.emoji}</h3>
            </section>
        `
        body.insertAdjacentHTML('afterbegin', newRow)

        TOTAL_MATCH += 1
        if (status === 'win') {
            TOTAL_WINS += 1
        } else if (status === 'lose') {
            TOTAL_LOSSES += 1
        } else TOTAL_DRAWS += 1
        
        winH5.innerHTML = TOTAL_WINS
        lossH5.innerHTML = TOTAL_LOSSES
        drawH5.innerHTML = TOTAL_DRAWS
        totalMatcH5.innerHTML = TOTAL_MATCH
    })
})

const botPick = () => {
    const randomNum = Math.floor(Math.random() * POSSIBLE_PICKS.length)
    return POSSIBLE_PICKS[randomNum]
}

const isWinner = (user, bot) => {
    if (user.beats === bot.name) {
        return 'win'
    } else if (user.name === bot.beats) {
        return 'lose'
    } else return 'draw'
}

const handleScoreBoard = (status, totalWins, totalLosses, totalDraws, totalMatch) => {

}