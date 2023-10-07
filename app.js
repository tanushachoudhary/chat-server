import Express from "express";
import http from "http";
import { Server } from "socket.io";
import messageFormat from "./utils/messages.js";

const app = Express();
const server = http.createServer(app);
const io = new Server(server);

// set static folders
app.use(Express.static("public"));
const chatBotName = "ChatCord";

// socket actions when user connected
io.on("connection", socket => {
    console.log("New WS is Connected!");

    // when current user connects
    socket.emit("message", messageFormat("ChatCord", "Welcome to chat!"));

    // when another user connects
    socket.broadcast.emit("message", messageFormat("User", "User has Joined the chat!"));

    // when a user disconnects
    socket.on("disconnect", () => {
        io.emit("message", messageFormat("User", "User has Left the chat!"));
    });

    // when chat message received
    socket.on("chat-message", (msg) => {
        io.emit("message", messageFormat("User", msg))
        console.log(msg);
    })
});

try {
    const port = 3000;
    server.listen(port, console.log(`server running on port ${port}!`));

} catch (error) {
    console.log(error);
}