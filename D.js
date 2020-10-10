class Fetch {
    request (url) {
        // return fetch(url).then(r=>r.json());
        return Promise.resolve('data from fetch');
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch();
    }
    getClientDate() {
        return this.fetch.request('vk.com')
    }
}


class LocalStorage {
    get(key) {
        const dataFromLocalStorage = 'data from localstorage';
        return dataFromLocalStorage;
    }
}

class LocalStorageClient {
    constructor () {
        this.LocalStorage = new LocalStorage();
    }

    getClientDate () {
        return this.LocalStorage.get('_lk');
    }
}

class DataBase {
    constructor(client) {
        this.client = client;
    }
    
    getData(key) {
        return this.client.getClientDate(key);
    }
}

const db = new DataBase(new LocalStorageClient());
const db2 = new DataBase(new FetchClient());

console.log(db.getData());
console.log(db2.getData());