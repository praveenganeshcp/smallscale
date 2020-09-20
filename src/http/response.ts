import { ServerResponse } from "http";



export class HttpResponse extends ServerResponse {

    sendJSON(data: Object) {
        let jsonData: string = JSON.stringify(data);
        this.setHeader('Content-Type', 'application/json');
        this.write(jsonData);
        this.end();
    }

    [key: string]: any;
}