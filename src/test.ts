import {ApplicationServer, Route} from './server';

let routes: Route[] = [
    {
        path: '/profile',
        method: 'GET',
        handler: (req, res) => {
            res.sendJSON({
                message:'Hello Praveen'
            })
        }
    }
]

let appServer: ApplicationServer = ApplicationServer.createServer(routes);
appServer.listen(3000, ()=>{console.log('on port 3000')});
