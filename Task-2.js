const getMonth = (callback) => {
    setTimeout(() => {
        let error = true
        let month = [
            `january`,
            `february`,
            `march`,
            `april`,
            `may`,
            `august`,
            `september`,
            `october`,
            `november`,
            `december`
        ]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error(`Sorry Data Not Found`), [])
        }
    }, 400)
}

function showMonth(err, result) {
    if (err) {
        console.error(err.message)
    } else {
        let output = []
        result.map((el) => {
            output.push(el)
        })
        console.log(output);
    }
}

getMonth(showMonth)


// DIBAWAH INI JUGA BISA
// getMonth((err, result) => {
//     if (err) {
//         console.error(err.message)
//     } else {
//         let output = []
//         result.map((el) => {
//             output.push(el)
//         })
//         console.log(output);
//     }
// })
