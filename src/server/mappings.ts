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

function addRoute(url: string, method: string, handler: RequestHandler) {
    url = url.trim();
    mappings[method].add(url, handler);
}

export function GET(url: string, handler: RequestHandler) {
    addRoute(url, 'GET', handler);
}

export function POST(url: string, handler: RequestHandler) {
    addRoute(url, 'POST', handler);
}

export function PUT(url: string, handler: RequestHandler) {
    addRoute(url, 'PUT', handler);
}

export function DELETE(url: string, handler: RequestHandler) {
    addRoute(url, 'DELETE', handler);
}

