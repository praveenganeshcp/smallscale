import { HttpRequest } from "../http/request";
import { HttpResponse } from "../http/response";
import { mappings } from './handler';


export interface RequestHandler {
    (request: HttpRequest, response: HttpResponse): void;
}

export function GET(url: string, handler: RequestHandler) {
    mappings.GET[url] = handler;
}

export function POST(url: string, handler: RequestHandler) {
    mappings.POST[url] = handler;
}

export function PUT(url: string, handler: RequestHandler) {
    mappings.PUT[url] = handler;
}

export function DELETE(url: string, handler: RequestHandler) {
    mappings.DELETE[url] = handler;
}

