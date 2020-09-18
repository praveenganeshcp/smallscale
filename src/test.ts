import {server, controllers} from './server';

controllers.delete('/home', (req, res)=>{
    res.sendJSON({message:"Success"});
})
controllers.get('/login', (req, res)=>{
    res.sendJSON({message:"From login"});
})

server.listen(4000, ()=>{console.log('on port 4000')});