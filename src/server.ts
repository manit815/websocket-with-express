import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({server});

wss.on('connection', (ws: WebSocket) => {
    ws.on('message', (message: string) => {
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    })

    ws.send('Hi there I am a websocket server');

    /*for broadcasting*/
    // ws.on('message', (message: string) => {

    //     //log the received message and send it back to the client
    //     console.log('received: %s', message);

    //     const broadcastRegex = /^broadcast\:/;

    //     if (broadcastRegex.test(message)) {
    //         message = message.replace(broadcastRegex, '');

    //         //send back the message to the other clients
    //         wss.clients
    //             .forEach(client => {
    //                 if (client != ws) {
    //                     client.send(`Hello, broadcast message -> ${message}`);
    //                 }    
    //             });
            
    //     } else {
    //         ws.send(`Hello, you sent -> ${message}`);
    //     }
    // });
});

server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address()} :)`);
})
