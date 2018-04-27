/*
Hey! Thanks for using this userscript!
Please click the "Install" button to proceed!

For a fancy view of this script, visit the link below.
https://github.com/Hans5958/scratch-userscripts/raw/master/Message%20Notifier/complexmain.user.js
*/

// ==UserScript==
// @name          Scratch Message Notifier
// @author        Hans5958
// @namespace     https://scratch.mit.edu/users/Hans5958
// @description   Notifies every message, checks every 2 seconds
// @include       https://scratch.mit.edu/*
// @updateURL     https://github.com/Hans5958/scratch-userscripts/raw/master/Message%20Notifier/main.user.js
// @downloadURL   https://github.com/Hans5958/scratch-userscripts/raw/master/Message%20Notifier/main.user.js
// @version       1.3.1
// @grant         none
// @icon          https://raw.githubusercontent.com/Hans5958/scratch-userscripts/master/Message%20Notifier/icon.png
// @require       http://code.jquery.com/jquery-3.3.1.min.js
// @run-at        document-idle
// ==/UserScript==

function MSGLog(t){console.log("[MSG]"+t)}MSGLog("Preparing...");var originalTitle=document.title,originalCount=0,count=0,player=document.createElement("audio");function getCount(){return $(".notificationsCount").length?$(".notificationsCount").html():$(".message-count").html()}player.src="https://raw.githubusercontent.com/Hans5958/message-notifier/master/Message%20Notifier/notificationsound.wav",player.preload="auto";var ico=$('<link id="favicon" rel="icon" type="image/x-icon" href="/favicon.ico" />');function createIcon(){var t,e=document.createElement("canvas"),o=document.createElement("img");e.height=e.width=32,t=e.getContext("2d"),o.onload=function(){t.drawImage(this,0,0),t.font='bold 21px "helvetica", sans-serif',t.strokeStyle="black",t.lineWidth=3,count>99?(t.strokeText("99+",0,31),t.fillStyle="#FFFFFF",t.fillText("99+",0,31)):(t.strokeText(count+"",0,31),t.fillStyle="#FFFFFF",t.fillText(count+"",0,31)),ico.attr({type:"image/png",href:e.toDataURL("image/png")})},o.src="/favicon.ico"}ico.appendTo(document.head),void 0!==getCount()?setInterval(function(){MSGLog("Starting..."),0==(count=getCount())?(document.title=originalTitle,ico.attr({type:"image/x-icon",href:"/favicon.ico"}),originalCount=0):originalCount!=count?(document.title="("+count+") New message!",player.play(),originalCount=count,createIcon()):document.title="("+count+") "+originalTitle},2e3):MSGLog("User not logged in.");