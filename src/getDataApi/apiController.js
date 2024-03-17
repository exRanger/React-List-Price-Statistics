
const _defaultTestEndpoint = 'https://64e4886bc5556380291360e3.mockapi.io/Items';

export default class Controller {
     

    constructor(uri = _defaultTestEndpoint){
        if (uri.startsWith('https')) {
            return;
        }
        this.uri = uri;
    }

    static loadCategories = async (uri, /* rejectCategory, countOf */) => {
        if (!uri) {
            return;
        }
        return await this.load(uri);
    }

    static load = async (category, filtering, searching) => {
        let uri = this.uri || _defaultTestEndpoint;
        if (category) {
            uri = uri + category;
        }
        if (filtering) {
            uri = uri + filtering;
        }
        if (searching) {
            uri = uri + searching;
        }
        const res = await fetch(uri);
        const data = await res.json();
        return data;
    }
}
