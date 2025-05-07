import "./styles.css";
import Feed from "feed-media-audio-player";

// Create basic player.
var player = new Feed.Player("demo", "demo");

// Display all the events the player triggers
player.on("all", function (event) {
  console.log(
    "player triggered event '" + event + "' with arguments:",
    Array.prototype.splice.call(arguments, 1)
  );
});

var playerView = new Feed.PlayerView("player-view", player);

const statusEl = document.querySelector(".status");
player.on("stations", (stations) => {
  statusEl.textContent = `Tuned to ${stations.length} station${
    stations.length > 1 ? "s" : ""
  }`;
});

player.tune();
