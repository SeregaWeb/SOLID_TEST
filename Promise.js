const emulate = (id , time) => new Promise( resolve=> {
    setTimeout(() => resolve(id) , time)
})

const promises = [
    emulate (1,1200),
    emulate (2,1000),
    emulate (3,1500),
]

async function old() {
    for (const promise of await Promise.all(promises)) {
        console.log('Old:', promise);
    }
}

async function modern () {
    for await(const promise of promises) {
        console.log('modern:', promise)
    }
}

// выполнит все последовательно при загрузке каждого промиса
modern();
// выполнит все сразу как только загрузятся ВСЕ промисы
old();