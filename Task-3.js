// PROGRAM 1

// const testLuck = new Promise((resolve, reject) => {
//     if (Math.random() < 0.5) { 
//       resolve('Lucky winner!')
//     } else {
//       reject(new Error('Unlucky!'))
//     }
//   });

//   testLuck.then(message => {
//     console.log(message) 
//   }).catch(err => {
//     console.error(err.message) 
//   });



// PROGRAM 2

let letsPlay = function spinRoulette() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = [
                `monkey`,
                `golden ticket`,
                `try again`,
                `777`,
                `jackpot`,
                `donkey`
            ]
            let decide = result[Math.floor(Math.random() * result.length)]
            if (decide === '777' || decide === 'jackpot' || decide === 'golden ticket') {
                resolve(decide)
            } else {
                reject(new Error(`Sorry you only got '${decide}' please play again!`))
            }
        }, 1000)
    })
}

async function play() {
    try {
        const winner = await letsPlay()
        console.log(`Hooray you got ${winner}, Congratulation!`);
    } catch (err) {
        console.error(err.message);
    }
}

play()
