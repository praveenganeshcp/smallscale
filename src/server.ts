import { Server, createServer }  from 'http';
import { reqListener } from './server/handler';
import { addRoute, RequestHandler } from './server/mappings';

let server: Server = createServer(reqListener);

export interface Route {
    path: string,
    method: 'POST' | 'GET' | 'PUT' | 'DELETE',
    handler: RequestHandler
}

interface ServerListen {
    (): void
}

export class ApplicationServer {
    
    private static context: ApplicationServer = new ApplicationServer();
    private constructor() {}

    static createServer(appRoutes: Route[]) {
        appRoutes.forEach((route: Route) => {
            addRoute(route.path, route.method, route.handler);
        })
        return this.context;
    }

    listen(port: number, cb: ServerListen) {
        server.listen(port, cb);
    }

}