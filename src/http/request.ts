import { IncomingMessage } from "http";
import * as url from 'url';

interface RequestBody {
    fields: any,
    files: any
}

export class HttpRequest {
    private request: IncomingMessage;
    private _url: string;
    private _method: string;
    private _body: RequestBody;
    private _pathname: string;
    private _query: Object;

    constructor(request: IncomingMessage, body: RequestBody) {
        this.request = request;
        this._url = request.url;
        this._method = request.method;
        this._body = body;
        this.parseQuery(request);   
    }

    private parseQuery(request: IncomingMessage) {
        let path: string = request.url;
        let urlObj = url.parse(path);
        let searchParamMap = new url.URLSearchParams(urlObj.query);
        let query: Object = {};
        searchParamMap.forEach((value, name)=>{
            query[name] = value;
        })
        this._pathname = urlObj.pathname;
        this._query = query
    }

    get body() {
        return this._body;
    }

    get url() {
        return this._url;
    }

    get method() {
        return this._method;
    }

    get pathname() {
        return this._pathname;
    }

    get query() {
        return this._query;
    }
}