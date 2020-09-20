import { HttpRequest } from "../http/request";
import { HttpResponse } from "../http/response";
const Router = require('url-router');

export const mappings = {
    'GET': new Router(),
    'POST': new Router(),
    'PUT': new Router(),
    'DELETE': new Router()
}

export interface RequestHandler {
    (request: HttpRequest, response: HttpResponse): void;
}

export function addRoute(url: string, method: string, handler: RequestHandler) {
    url = url.trim();
    mappings[method].add(url, handler);
}

