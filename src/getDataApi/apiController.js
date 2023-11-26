export default class Controller {
    static _defaultEndpoint = 'https://64e4886bc5556380291360e3.mockapi.io/';
    static _defaultTestEndpoint = 'https://64e4886bc5556380291360e3.mockapi.io/Items';
    
    constructor(uri = _defaultTestEndpoint){
        if (uri.startsWith('https')) {
            return;
        }
        this.uri = uri;
    }
    
    static  loadCategories = async (uri, /* rejectCategory, countOf */) => {
        if (!uri) {
            return;
        }
        return await this.load(uri);
    }

    static load = async  (param) => {
        let url = uri;
        if (param) {
            url = uri + param 
        }
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
}
