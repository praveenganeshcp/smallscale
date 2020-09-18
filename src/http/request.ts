import { IncomingMessage } from "http";

export class HttpRequest {
    private request: IncomingMessage;
    public url: string;
    public method: string;

    constructor(request: IncomingMessage) {
        this.request = request;
        this.url = request.url;
        this.method = request.method
    }
}