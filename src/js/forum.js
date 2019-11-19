import ky from "ky";
import $ from "jquery";

function getMessageView(message) {
  return `<div class="card">
  <div class="card-header">
    Envoyé le ${message.timestamp}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${message.content}</p>
      <footer class="blockquote-footer">
        ${message.author}
      </footer>
    </blockquote>
  </div>
</div>
<br />`;
}

function displayMessages(messages) {
  const $messagesContainer = $(".messages-container");

  // Clear list content on view
  $messagesContainer.empty();

  // Iterate on messages and display getMessageView(message);
  messages.forEach(message => {
    $messagesContainer.append(getMessageView(message));
  });
}

async function refreshMessages() {
  // GET https://ensmn.herokuapp.com/messages
  const messages = await ky.get("https://ensmn.herokuapp.com/messages").json();
  //console.log(messages[0].author);
  displayMessages(messages);
}

setInterval(() => {
  refreshMessages();
}, 1000);

function sendMessage(message) {
  // POST https://ensmn.herokuapp.com/messages (username, message)
  // After success, getMessages()
}

$("body").on("submit", "#message-form", event => {
  event.preventDefault();
  const $author = $("#author");
  const $message = $("#message");
  console.log($author.val(), $message.val());
});

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
