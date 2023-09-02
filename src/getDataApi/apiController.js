export default class Controller {
    static _defaultTestEndpoint = 'https://64e4886bc5556380291360e3.mockapi.io/Items';
    
    constructor(uri = _defaultTestEndpoint){
        if (uri.startsWith('https') {
            return;
        }
        this.uri = uri;
    }

    get uriPizza() {
        return this.uri;
    }

    set uriPizza(uri) {
        this.uri = uri;
    }

    static load = async (uri = this._defaultTestEndpoint) => {
        const res = await fetch(uri);
        const data = await res.json();
        return data;
    }
}
