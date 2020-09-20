import { RequestListener } from "http";
import { mappings } from './mappings';
import { parseRequestBody } from "../utils/bodyparser";
import { HTTPMETHOD } from '../utils/types';
import { parseQuery } from "../utils/queryparser";
import { HttpRequest } from "../http/request";
import { HttpResponse } from "../http/response";


export const reqListener: RequestListener = async (request: HttpRequest, response: HttpResponse) => {
    try {
        if(request.method == HTTPMETHOD.POST || request.method == HTTPMETHOD.PUT) {
            request.body = await parseRequestBody(request);
        }
        let parseResult = parseQuery(request.url);
        request.query = parseResult.query;
        request.pathname = parseResult.pathname;
        let routerResult: any = mappings[request.method].find(request.pathname);
        if(routerResult == null) {
            response.sendJSON({
                message: 'handler not found'
            })
            response.end();
        }
        else {
            request.params = routerResult.params;
            routerResult.handler.call({}, request, response);
        }
    }
    catch(err) {
        response.setHeader('Content-Type', 'application/json');
        response.write(JSON.stringify({
            message: 'Server error',
            error: err.message
        }));
        response.end();
    }
}