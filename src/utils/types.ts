import { HttpRequest } from "../http/request";
import { HttpResponse } from "../http/response";

export enum HTTPMETHOD {
    POST='POST', PUT='PUT', GET='GET', DELETE='DELETE'
}

export interface Route {
    path: string,
    method: 'POST' | 'GET' | 'PUT' | 'DELETE',
    handler: RequestHandler
}

export interface RequestHandler {
    (request: HttpRequest, response: HttpResponse): void;
}

export interface ServerListen {
    (): void
}