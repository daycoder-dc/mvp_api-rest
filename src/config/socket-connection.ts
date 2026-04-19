import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway({
  path: "/api/socket.io",
  transports: ["websocket"],
  cors: { origin: "*" }
})
export class SocketConnection {
  @WebSocketServer()
  public readonly socket?: Server;
}
