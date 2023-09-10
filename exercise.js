
const isLogged = true;

const logCheck = (isLogged) => {
    return new Promise((resolve, reject) => {
        if (isLogged) {
            const randomNum = Math.random()
            resolve(randomNum)
        } else {
            reject("Error: User non è loggato")
        }
    })
}


const getUserInfo = (inputNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(inputNumber > 0.5){
                const user = {name: "John", age: 24}
                resolve(user)
            } else {
                reject("Error: Numero non è più grande di 0.5")
            }
        })
    })
}

logCheck(isLogged)
.then((randomNum) => getUserInfo(randomNum))
.then((user) => console.log(user))
.catch((err) => console.error(err))
.finally(() => console.log("Esercizio di JS"))