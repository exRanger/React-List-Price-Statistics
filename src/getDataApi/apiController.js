export default class Controller {
    static _defaultEndpoint = 'https://64e4886bc5556380291360e3.mockapi.io/Items';

    constructor(uri = _defaultEndpoint){
        this.uri = uri;
    }

    get uriPizza() {
        return this.uri;
    }

    set uriPizza(uri) {
        this.uri = uri;
    }

    static load = async (uri = this._defaultEndpoint) => {
        const res = await fetch(uri);
        const data = await res.json();
        return data;
    }
}