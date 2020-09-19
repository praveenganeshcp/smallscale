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

controllers.get('/home?nam=p&mailgmail', (req, res) => {
    res.sendJSON({
        message: 'hello Praveen'
    })
})

server.listen(3000, () => {console.log('on port 3000')});