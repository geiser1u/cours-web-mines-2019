import $ from "jquery";
import "bootstrap";
import "./js/forum";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import mainContent from "./html/exercices/forum.html";

const $mainContent = $("#main-content");

$mainContent.html(mainContent);

$("body").on("click", "a", event => {
  const $this = $(event.target);
  const target = $this.data("target");
  const href = $this.attr("href");

  if (href.startsWith("http")) {
    return true;
  }

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const content = require(`./html/${$this.attr("href")}.html`);

  if (target) {
    $(target).html(content);
  } else {
    $mainContent.html(content);
  }

  return false;
});

/*$("body").on("click", "#submit-button", event => {
  $(".messages-container").prepend("<p>Clicked!</p>");
});*/
