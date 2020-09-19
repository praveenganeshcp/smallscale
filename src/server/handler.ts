import { RequestListener, IncomingMessage, ServerResponse } from "http";
import { HttpRequest } from "../http/request";
import { HttpResponse } from "../http/response";
import { RequestHandler } from './mappings';
export const mappings = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'DELETE': {},
}

export const reqListener: RequestListener = (request: IncomingMessage, response: ServerResponse) => {
    let httpRequest: HttpRequest = new HttpRequest(request);
    let httpResponse: HttpResponse = new HttpResponse(response);
    let handler: RequestHandler = mappings[request.method][request.url];
    if(handler == undefined) {
        httpResponse.sendJSON({message:"No handler found"});
    }
    else {
        handler.call({}, httpRequest, httpResponse);
    }
}