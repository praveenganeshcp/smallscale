import { RequestListener, IncomingMessage, ServerResponse, METHODS } from "http";
import { HttpRequest } from "../http/request";
import { HttpResponse } from "../http/response";
import { RequestHandler } from './mappings';
import { parseRequestBody } from "../utils/bodyparser";
import { HTTPMETHOD } from '../utils/types';
export const mappings = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'DELETE': {},
}

export const reqListener: RequestListener = async (request: IncomingMessage, response: ServerResponse) => {
    try {
        let body: any = null;
        if(request.method == HTTPMETHOD.POST || request.method == HTTPMETHOD.PUT) {
            body = await parseRequestBody(request);
        }
        let httpRequest: HttpRequest = new HttpRequest(request, body);
        let httpResponse: HttpResponse = new HttpResponse(response);
        let handler: RequestHandler = mappings[request.method][request.url];
        if(handler == undefined) {
            httpResponse.sendJSON({message:"No handler found"});
        }
        else {
            handler.call({}, httpRequest, httpResponse);
        }
    }
    catch(err) {
        response.write({
            message: 'Server error'
        });
        response.end();
    }
}