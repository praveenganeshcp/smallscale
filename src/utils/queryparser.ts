import * as url from 'url';

interface URLParams {
    query: Object,
    pathname: string
}

export function parseQuery(path: string): URLParams {
    let urlObj = url.parse(path);
    let searchParamMap = new url.URLSearchParams(urlObj.query);
    let query: Object = {};
    searchParamMap.forEach((value, name)=>{
        query[name] = value;
    })
    return {
        query,
        pathname: urlObj.pathname
    }
}