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
// @version       1.2.2
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
var ico = $('<link id="favicon" rel="icon" type="image/x-icon" href="/favicon.ico" />');
ico.appendTo(document.head);
// I need to make 2 methods for getting the username.
// Since the new frontpage needs an tricky way to do it.
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
// I don't think to using this anymore, but I will leave this here.
function getCount() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", 'https://api.scratch.mit.edu/users/' + username + '/messages/count', false);
    xmlHttp.send(null);
    var request = xmlHttp.responseText;
    var parsedData = JSON.parse(request);
    return parsedData.count;
}
// Creating an function for icon changes
// Thanks to https://github.com/MegaScratchUserscript/Mega-Scratch-Userscript/blob/master/parts/titlemessages.part.js for the script.
function createIcon() {
    var canvas = document.createElement('canvas')
        , ctx
        , img = document.createElement('img');
    canvas.height = canvas.width = 16;
    ctx = canvas.getContext('2d');
    img.onload = function () {
        ctx.drawImage(this, 0, 0);
        ctx.font = 'bold 9px "helvetica", sans-serif';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.strokeText(count + "", 0, 15);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(count + "", 0, 15);
        link.attr({
            "type": "image/png",
            "href": canvas.toDataURL('image/png')
        });
    };
    img.src = '/favicon.ico';
}

// Here's the script.
setInterval(function () {
    count = $(".notificationsCount").html();
    if (count !== 0) {
        if (originalCount != count) {
            document.title = "(" + count + ") New message!";
            player.play();
            originalCount = count;
            createIcon();
        } else {
            document.title = "(" + count + ") " + originalTitle;
        }
    } else {
        document.title = originalTitle;
        link.attr({
            "type": "image/x-icon",
            "href": "/favicon.ico"
        });
        originalCount = 0;
    }
}, 3000);
