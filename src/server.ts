import { Server, createServer }  from 'http';
import { reqListener } from './server/handler';
import { addRoute } from './server/mappings';
import { HttpRequest } from './http/request';
import { HttpResponse } from './http/response';
import { Route, ServerListen } from './utils/types';

let server: Server = createServer({
    IncomingMessage: HttpRequest,
    ServerResponse: HttpResponse
}, reqListener);

export class SmallScaleApp {
    
    private static context: SmallScaleApp = new SmallScaleApp();
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
