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
    $messagesContainer.prepend(getMessageView(message));
  });
}

async function refreshMessages() {
  // GET https://ensmn.herokuapp.com/messages
  let messages = [];
  let pageIndex = 1;
  let finished = false;

  while (!finished) {
    const pageMessages = await ky
      .get(`https://ensmn.herokuapp.com/messages?page=${pageIndex}`)
      .json();
    pageIndex += 1;

    // Concatenate
    messages = messages.concat(pageMessages);

    // Is finished ?
    finished = pageMessages.length < 10;
    // console.log(messages[0].author);
  }
  displayMessages(messages);
}

setInterval(() => {
  refreshMessages();
}, 10000);

async function sendMessage(username, message) {
  // POST https://ensmn.herokuapp.com/messages (username, message)
  await ky.post("https://ensmn.herokuapp.com/messages", {
    json: {
      username,
      message
    }
  });

  // After success, getMessages()
  await refreshMessages();
}

$("body").on("submit", "#message-form", event => {
  // Prevent page refresh
  event.preventDefault();

  const $author = $("#author");
  const $message = $("#message");

  const author = $author.val();
  const message = $message.val();

  if (author == null || author.length === 0) {
    return;
  }

  if (message == null || message.length === 0) {
    return;
  }

  sendMessage(author, message);

  $author.val("");
  $message.val("");
});

refreshMessages();

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
