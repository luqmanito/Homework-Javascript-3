const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = [`senin`, `selasa`, `rabu`, `kamis`, `jumat`]
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error(`Hari ini bukan hari kerja`))
            }
        }, 300)
    })

}
// TRY & catch

//  async function checkDays(day, checkFunc) {
//     try {
//        await checkFunc(day)
//         console.log(`Hari ${day} masuk kerja`);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// checkDays('sabtu', cekHariKerja)



// THEN AND CATCH

function checkDays(day, checkFunc) {
    checkFunc(day)
        .then(specificDay =>
            console.log(`Hari ${specificDay} masuk kerja`))
        .catch(err => {
            console.error(err.message);
        })
}

checkDays('senin', cekHariKerja)

