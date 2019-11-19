import ky from "ky";
import $ from "jquery";

function getMessageView(message) {
  return `<div>
    <p>${message.username}<p/>
    <p>${message.message}</p>
  </div>`;
}

function displayMessages(messages) {
  // Clear list content on view
  $(".messages-container").empty();
  // Iterate on messages and display getMessageView(message);
}

async function refreshMessages() {
  // GET https://ensmn.herokuapp.com/messages
  const messages = await ky.get("https://ensmn.herokuapp.com/messages").json();
  console.log(messages[0].author);
  displayMessages(messages);
}

setInterval(() => {
  refreshMessages();
}, 1000);

function sendMessage(message) {
  // POST https://ensmn.herokuapp.com/messages (username, message)
  // After success, getMessages()
}

/*const test = "Mines";
alert(`Test
${test}
`);

setTimeout(() => {
  alert("timeout reached!");
}, 5000);

setInterval(() => {
  alert("timeout reached!");
}, 10000);*/
