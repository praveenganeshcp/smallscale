import { IncomingMessage } from "http";

interface RequestBody {
    fields: any,
    files: any
}

export class HttpRequest extends IncomingMessage {
    body: RequestBody;
    query: Object;
    params: Object;
    [key: string]: any;
}
