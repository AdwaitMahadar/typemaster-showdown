import { Server, Socket } from "socket.io";

export class Game {
    gameStatus: "not-started" | "in-progress" | "finished";
    gameId: string;
    players: { id: string; score: number; name: string} [];
    io: Server;
    gameHost: string;
    paragraph: string;

    constructor(io: Server, id: string, host: string) {
        this.io = io;
        this.gameId = id;
        this.gameHost = host;
        this.gameStatus = "not-started";
        this.players = [];
        this.paragraph = "";
    }

    setupListeners(socket: Socket) {}
}