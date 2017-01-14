// ==UserScript==
// @name          Message Notifier
// @author        Hans5958
// @namespace     https://scratch.mit.edu/users/Hans5958
// @description   Notifies every message, checks every 3 seconds
// @include       https://scratch.mit.edu/*
// @updateURL     https://github.com/Hans5958/message-notifier/raw/master/main.user.js
// @downloadURL   https://github.com/Hans5958/message-notifier/raw/master/main.user.js
// @version       1.0
// @icon          https://raw.githubusercontent.com/Hans5958/message-notifier/master/icon.png
// @resource      ding https://raw.githubusercontent.com/Hans5958/message-notifier/master/notificationsound.wav
// ==/UserScript==

// Initial things to do.
var originalTitle = document.title
var originalCount = 0
var count = 0

// Creating an function for getting messages count
// In Scratch, this is like doing a custom block.
function getCount() {
  var username = Scratch.INIT_DATA.LOGGED_IN_USER.model.username
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", 'https://api.scratch.mit.edu/users/' + username + '/messages/count', false);
  xmlHttp.send(null);
  var request = xmlHttp.responseText;
  var parsedData = JSON.parse(request);
  return parsedData.count;
}

// Here's the script.
function doTask() {
  count = getCount()
  if (originalCount != count) {
    if (count == 0) {
      document.title = originalTitle
    } else {
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', ding);
      audioElement.play();
      document.title = "(" + count + ") New message!"
      setTimeout(function() {
        document.title = "(" + count + ") " + originalTitle
      }, 2000);
    }
    originalCount = count
  }
}
doTask()
setInterval(function() {
  doTask()
}, 3000);
