// Hey! Thanks for using this userscript!
// Please click the "Install" button to proceed!

// ==UserScript==
// @name          Scratch Message Notifier
// @author        Hans5958
// @namespace     https://scratch.mit.edu/users/Hans5958
// @description   Notifies every message, checks every 3 seconds
// @include       https://scratch.mit.edu/*
// @updateURL     https://github.com/Hans5958/message-notifier/raw/master/main.user.js
// @downloadURL   https://github.com/Hans5958/message-notifier/raw/master/main.user.js
// @version       1.1
// @grant         none
// @icon          https://raw.githubusercontent.com/Hans5958/message-notifier/master/icon.png
// ==/UserScript==

// Initial things to do.
var originalTitle = document.title;
var originalCount = 0;
var count = 0;
var player = document.createElement('audio');
player.src = 'https://raw.githubusercontent.com/Hans5958/message-notifier/master/notificationsound.wav';
player.preload = 'auto';
if (document.URL.slice(30, 31) == '') {
    var loader = document.getElementById("navigation");
    loader.className = "loader";
    var divs = loader.getElementsByTagName("span");
    var username = divs[9].innerHTML;
} else {
    var username = Scratch.INIT_DATA.LOGGED_IN_USER.model.username;
}

// Creating an function for getting messages count
// In Scratch, this is like doing a custom block.
function getCount() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", 'https://api.scratch.mit.edu/users/' + username + '/messages/count', false);
    xmlHttp.send(null);
    var request = xmlHttp.responseText;
    var parsedData = JSON.parse(request);
    return parsedData.count;
}

// Here's the script.
function doTask() {
    count = getCount();
    if (originalCount != count) {
        if (count === 0) {
            document.title = originalTitle;
        } else {
            document.title = "(" + count + ") New message!";
            player.play();
        }
        originalCount = count;
    } else {
        if (count === 0) {
            document.title = originalTitle;
        } else {
            document.title = "(" + count + ") " + originalTitle;
        }

    }
}
// Here's the loop.
setInterval(function () {
    doTask();
}, 3000);
