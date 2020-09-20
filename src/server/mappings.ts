import { RequestListener } from "http";

const Router = require('url-router');

export const mappings = {
    'GET': new Router(),
    'POST': new Router(),
    'PUT': new Router(),
    'DELETE': new Router()
}

export function addRoute(url: string, method: string, handler: RequestListener) {
    url = url.trim();
    mappings[method].add(url, handler);
}

