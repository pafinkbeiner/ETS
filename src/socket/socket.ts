import 'reflect-metadata';
import { Server } from "socket.io";
import http from "http"
import { logger } from '@/utils/logger';
import { SOCKET_PORT } from '@config';

export class Socket {

    private socket: Server;
    private port: number;

    constructor() {
        this.port = +SOCKET_PORT || 5000;
        this.socket = new Server();
        this.socket.on("connection", (socket) => {
            logger.info("Client Connected");
            console.log(socket.id);
        })
    }

    public listen() {
        logger.info("Starting socket on port: " + this.port);
        this.socket.listen(this.port);
    }

    public getSocket() {
        return this.socket;
    }
}
