// ==UserScript==
// @name          Hans5958's Scratch Userscripts
// @copyright     Hans5958, 2018+
// @license       MIT
// @namespace     https://scratch.mit.edu/users/Hans5958
// @description   Scripts that will make your Scratch experience better.
// @include       http*://scratch.mit.edu/*
// @updateURL     https://github.com/Hans5958/scratch-userscripts/raw/master/mergemain.user.js
// @downloadURL   https://github.com/Hans5958/scratch-userscripts/raw/master/mergemain.user.js
// @version       0.1
// @grant         none
// @run-at        document-idle
// ==/UserScript==

/*
Curator Links
*/

var curator=document.getElementsByTagName("h4")[7].innerHTML.slice(20,99);document.getElementsByTagName("h4")[7].innerHTML='Projects Curated by <a class="curator-links" href="https://scratch.mit.edu/users/'+curator+'">'+curator+"</a>",document.getElementsByTagName("head")[0].innerHTML+="<style>a.curator-links {color: #6b6b6b; font-weight: bold;} a.curator-links:hover {text-decoration: underline;}</style>";

/*
Follow Dashboard
*/

var userNow=Scratch.INIT_DATA.LOGGED_IN_USER.model.username,content="<div id='content'><div class='container'><h1>Hans5958's Follow Dashboard</h1> <table><tr><td style='padding: 2px; vertical-align: bottom;'><\/script><textarea placeholder='Username' rows='1' cols='40' id='user'></textarea></td><td style='padding: 2px; vertical-align: top;'><form id='form1' action='javascript:f()'><input type='submit' value='Follow' /></form></td><td style='padding: 2px; vertical-align: top;'><form style= id='form2' action='javascript:function f(){$.ajax({type:\"PUT\",url:\"https://scratch.mit.edu/site-api/users/followers/\"+document.getElementById(\"user\").value+\"/add/\",data:{usernames:document.getElementById(\"user\").value}}),parent.document.getElementById(\"iframel\").src=\"https://scratch.mit.edu/users/\"+document.getElementById(\"user\").value,Scratch.AlertView.msg($(\"#alert-view\"),{alert:\"success\",msg:Scratch.ALERT_MSGS.followed+document.getElementById(\"user\").value})}'><input type='submit' value='Declare'/></form></td></tr></table></div><iframe id='iframel' src='https://scratch.mit.edu' height='500' width='49.5%'></iframe><iframe id='iframer' height='500' width='49.5%'></iframe></body></div>";$("div#content").replaceWith(content),parent.document.getElementById("iframer").src="https://scratch.mit.edu/users/"+userNow;

/*
Message Notifier
*/

function MSGLog(t){console.log("[MSG] "+t)}MSGLog("Preparing...");var originalTitle=document.title,originalCount=0,count=0,player=document.createElement("audio");function getCount(){try{return $(".notificationsCount").html()}catch(t){return document.getElementsByClassName("message-count")[0].innerHTML}}player.src="https://raw.githubusercontent.com/Hans5958/message-notifier/master/Message%20Notifier/notificationsound.wav",player.preload="auto";var ico=$('<link id="favicon" rel="icon" type="image/x-icon" href="/favicon.ico" />');function createIcon(){var t,e=document.createElement("canvas"),o=document.createElement("img");e.height=e.width=32,t=e.getContext("2d"),o.onload=function(){t.drawImage(this,0,0),t.font='bold 21px "helvetica", sans-serif',t.strokeStyle="black",t.lineWidth=3,count>99?(t.strokeText("99+",0,31),t.fillStyle="#FFFFFF",t.fillText("99+",0,31)):(t.strokeText(count+"",0,31),t.fillStyle="#FFFFFF",t.fillText(count+"",0,31)),ico.attr({type:"image/png",href:e.toDataURL("image/png")})},o.src="/favicon.ico"}ico.appendTo(document.head),void 0!==getCount()?(MSGLog("Starting..."),setInterval(function(){0==(count=getCount())?(document.title=originalTitle,ico.attr({type:"image/x-icon",href:"/favicon.ico"}),originalCount=0):originalCount!=count?(document.title="("+count+") New message!",player.play(),originalCount=count,createIcon()):document.title="("+count+") "+originalTitle},2e3)):MSGLog("User not logged in.");

/*
Remove Description Box
*/

document.getElementsByTagName("b")[0].innerHTML="Instructions <a href=javascript:$('#description')[0].attributes.style='height:310px',$('.text-block')[0].remove()>❌</a>",document.getElementsByTagName("b")[1].innerHTML="Notes and Credits <a href=javascript:$('#instructions')[0].attributes.style='height:310px',$('.tooltip-target')[0].remove()>❌</a>";