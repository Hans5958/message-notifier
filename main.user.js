// Hey! Thanks for using this userscript!
// Please click the "Install" button to proceed!

// ==UserScript==
// @name          Scratch Message Notifier
// @author        Hans5958
// @namespace     https://scratch.mit.edu/users/Hans5958
// @description   Notifies every message, checks every 2 seconds
// @include       https://scratch.mit.edu/*
// @updateURL     https://github.com/Hans5958/message-notifier/raw/master/main.user.js
// @downloadURL   https://github.com/Hans5958/message-notifier/raw/master/main.user.js
// @version       1.2.5.2
// @grant         none
// @icon          https://raw.githubusercontent.com/Hans5958/message-notifier/master/icon.png
// @run-at        document-idle
// ==/UserScript==

// Initial things to do.
var originalTitle = document.title;
var originalCount = 0;
var count = 0;
var player = document.createElement('audio');
player.src = 'https://raw.githubusercontent.com/Hans5958/message-notifier/master/notificationsound.wav';
player.preload = 'auto';
// On frontpage, Scratch doesn't fetch the account-nav.json
var Scratch;
if (typeof $('.notificationsCount').html() === 'undefined') {
    var isFP = true;
} else {
    var isFP = false;
}
 

//var xmlHttp = new XMLHttpRequest();
//xmlHttp.open('GET', 'https://scratch.mit.edu/fragment/account-nav.json, false);
//xmlHttp.send(null);
//var request = xmlHttp.responseText;
//var Scratch.INIT_DATA = JSON.parse(request);
//return parsedData.count;
// Creating an function for getting messages count
// In Scratch, this is like doing a custom block.
// I will only use this on the main page.

function getCount() {
    if (isFP) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', 'https://scratch.mit.edu/messages/ajax/get-message-count/', false);
        xmlHttp.send(null);
        var request = xmlHttp.responseText;
        var parsedData = JSON.parse(request);
        return parsedData.msg_count;
    } else {
        return $('.notificationsCount').html();
    }
}

// Thanks to https://github.com/MegaScratchUserscript/Mega-Scratch-Userscript/blob/master/parts/titlemessages.part.js for the script.
if (isFP === false) {
    var ico = $('<link id="favicon" rel="icon" type="image/x-icon" href="/favicon.ico" />');
    ico.appendTo(document.head);
}
// Creating an function for icon changes
function createIcon() {
    var canvas = document.createElement('canvas'),
        ctx,
        img = document.createElement('img');
    canvas.height = canvas.width = 32;
    ctx = canvas.getContext('2d');
    img.onload = function() {
        ctx.drawImage(this, 0, 0);
        ctx.font = 'bold 21px "helvetica", sans-serif';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        if (count > 99) {
            ctx.strokeText('99+', 0, 31);
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText('99+', 0, 31);
        } else {
            ctx.strokeText(count + '', 0, 31);
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(count + '', 0, 31);
        }
        ico.attr({
            'type': 'image/png',
            'href': canvas.toDataURL('image/png')
        });
    };
    img.src = '/favicon.ico';
}

// Here's the script.
if (getCount() !== undefined) {
setInterval(function() {
    count = getCount();
        if (count == 0) {
            document.title = originalTitle;
            if (isFP === false) {
                ico.attr({
                    'type': 'image/x-icon',
                    'href': '/favicon.ico'
                });
            }
            originalCount = 0;
        } else {
            if (originalCount != count) {
                document.title = '(' + count + ') New message!';
                player.play();
                originalCount = count;
                if (isFP === false) {
                    createIcon();
                }
            } else {
                document.title = '(' + count + ') ' + originalTitle;
            }
        }
    },
    2000);
} else {
        console.log("Not logged in!");
}
