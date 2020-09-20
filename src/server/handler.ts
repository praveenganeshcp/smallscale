import { RequestListener, IncomingMessage, ServerResponse, METHODS } from "http";
import { HttpRequest } from "../http/request";
import { HttpResponse } from "../http/response";
import { mappings } from './mappings';
import { parseRequestBody } from "../utils/bodyparser";
import { HTTPMETHOD } from '../utils/types';

export const reqListener: RequestListener = async (request: IncomingMessage, response: ServerResponse) => {
    try {
        let body: any = null;
        if(request.method == HTTPMETHOD.POST || request.method == HTTPMETHOD.PUT) {
            body = await parseRequestBody(request);
        }
        let httpRequest: HttpRequest = new HttpRequest(request, body);
        let httpResponse: HttpResponse = new HttpResponse(response);
        let routerResult: any = mappings[httpRequest.method].find(httpRequest.pathname);
        if(routerResult == null) {
            httpResponse.sendJSON({message:"No handler found"});
        }
        else {
            httpRequest.params = routerResult.params;
            routerResult.handler.call({}, httpRequest, httpResponse);
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