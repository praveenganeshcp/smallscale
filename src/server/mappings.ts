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

export function GET(url: string, handler: RequestHandler) {
    mappings.GET.add(url, handler);
}

export function POST(url: string, handler: RequestHandler) {
    mappings.POST.add(url, handler);
}

export function PUT(url: string, handler: RequestHandler) {
    mappings.PUT.add(url, handler);
}

export function DELETE(url: string, handler: RequestHandler) {
    mappings.DELETE.add(url, handler);
}

