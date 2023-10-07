const socket = io();
const chat_form = document.getElementById("chat-form");
const chat_messages_container = document.querySelector(".chat-messages");

socket.on("message", message => {
    console.log(message);
    sendMessageToDOM(message);

    // scroll down to the current message
    chat_messages_container.scrollTop = chat_messages_container.scrollHeight;
});

chat_form.addEventListener("submit", (e) => {
    e.preventDefault(); // to prevent any some kind of refresh for the page after submit

    // get message content
    const msg = e.target.elements.msg.value;

    // send message to server
    socket.emit("chat-message", msg);

    // empty input after submit
    e.target.elements.msg.value = "";
    e.target.elements.msg.focus();
});

function sendMessageToDOM(msg) {

    const messageDiv = document.createElement("div");

    messageDiv.className = "message";

    messageDiv.innerHTML = `
    <p class="meta">${msg.username} <span>${msg.time}</span></p>
    <p class="text">
        ${msg.text}
    </p>
    `;

    chat_messages_container.appendChild(messageDiv);

}