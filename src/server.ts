import { Server, createServer }  from 'http';
import { reqListener } from './server/handler';
import { GET, DELETE, POST, PUT } from './server/mappings';

export let server: Server = createServer(reqListener);
export const controllers = {
    get: GET,
    delete: DELETE,
    post: POST,
    put: PUT
}