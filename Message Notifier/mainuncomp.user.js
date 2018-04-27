// Hey! Thanks for using this userscript!
// Please click the "Install" button to proceed!

// ==UserScript==
// @name          Scratch Message Notifier
// @author        Hans5958
// @namespace     https://scratch.mit.edu/users/Hans5958
// @description   Notifies every message, checks every 2 seconds
// @include       https://scratch.mit.edu/*
// @updateURL     https://github.com/Hans5958/scratch-userscripts/raw/master/Message%20Notifier/main.user.js
// @downloadURL   https://github.com/Hans5958/scratch-userscripts/raw/master/Message%20Notifier/main.user.js
// @version       1.3
// @grant         none
// @icon          https://raw.githubusercontent.com/Hans5958/message-notifier/master/icon.png
// @require       http://code.jquery.com/jquery-3.3.1.min.js
// @run-at        document-idle
// ==/UserScript==

// Initial things to do.
var d = document
var a = "title" 
var m = d[a];
var s = 0;
var g = 0;
var n = d[r]('a');
var o = "html"
var t = d[r]('t')
var i
var f = d[r]('f');
var y = $('<link id="favicon" rel="icon" type="image/x-icon" href="/fav.ico" />');
var r = "createElement"
var b = "src"
var c = "preload"
var e = "length"
var h = ".notificationsCount"
var j = ".message-count"
var k = "strokeText"
var l = "fillStyle"
var p = "fillText"
var q = "height"
var s = "width"
var u = "getContext" 
var v = "drawImage"
var w = "font"
var x = "strokeStyle"
var z = "lineWidth"
var aa = "play"
var bb = "attr"
var cc = "onload"

n[b] = 'https://raw.githubusercontent.com/Hans5958/message-notifier/master/notificationsound.wav';
n[c] = 'auto';
// On frontpage, Scratch doesn't fetch the acg-nav.json
/*
var Scratch;
if (typeof Scratch === 'undefined') {
   var isFP = true;
} else {
   var isFP = false;
}*/

/*
var xmlHttp = new XMLHttpRequest();
xmlHttp.open('GET', 'https://scratch.mit.edu/fragment/acg-nav.json, false);
xmlHttp.send(null);
var request = xmlHttp.responseText;
var Scratch.INIT_DATA = JSON.parse(request);
return parsedData.g;
*/

/*
Creating an function for getting messages g
In Scratch, this is like doing a custom block.
I will only use this on the main page.

this is a dead simple method to check the message
we literally beat world_languages lol
*/

function c() {
    if ($(h)[l]) {
        return $(h)[n]();
    } else {
        return $(j)[n]();
    }
}

/*
    if (isFP === false) {
        if (typeof Scratch === 'undefined') {
           var isFP = true;
        } else {
           var isFP = false;
        }
    }
    if (isFP) {
        //var xmlHttp = new XMLHttpRequest();
        //xmlHttp.open('GET', 'https://scratch.mit.edu/messages/ajax/get-message-g/', false);
        //xmlHttp.send(null);
        //var request = xmlHttp.responseText;
        //var parsedData = JSON.parse(request);
        //return parsedData.msg_g;
        return $('.message-g')[n](); //congratulations now no html request
    } else {
        return $('.notificationsCount')[n]();
    }
}
*/

// Thanks to https://github.com/MegaScratchUserscript/Mega-Scratch-Userscript/blob/master/parts/titlemessages.part.js for the script.

y.appendTo(d.head);
function i() {
    t[q] = t[s] = 32;
    i = t[u]('2d');
    f[cc] = function() {
        i[v](this, 0, 0);
        i[w] = 'bold 21px "helvetica", sans-serif';
        i[x] = 'black';
        i[z] = 3;
        if (g > 99) {
            i[k]('99+', 0, 31);
            i[l] = '#FFFFFF';
            i[p]('99+', 0, 31);
        } else {
            i[k](g + '', 0, 31);
            i[l] = '#FFFFFF';
            i[p](g + '', 0, 31);
        }
        y[bb]({
            'type': 'image/png',
            'href': t.toDataURL('image/png')
        });
    };
    f[b] = '/favicon.y';
}

// Here's the script.
if (c() !== undefined) {
setInterval(function() {
    g = c();;
        if (g == 0) {
            d[a] = m;
            y[bb]({
                'type': 'image/x-icon',
                'href': '/favicon.y'
            });
            s = 0;
            } else {
            if (s != g) {
                d[a] = '(' + g + ') New message!';
                n[aa]();
                s = g;
                i();
            } else {
                d[a] = '(' + g + ') ' + m;
            }
        }
    },
    2000);
}
