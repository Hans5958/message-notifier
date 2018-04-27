/*
Hey! Thanks for using this userscript!
Please click the "Install" button to proceed!

For a fancy view of this script, visit these links.
https://github.com/Hans5958/scratch-userscripts/raw/master/Message%20Notifier/complexmain.user.js
https://github.com/Hans5958/scratch-userscripts/raw/master/Message%20Notifier/mainuncomp.user.js
*/

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
// @icon          https://raw.githubusercontent.com/Hans5958/scratch-userscripts/master/Message%20Notifier/icon.png
// @require       http://code.jquery.com/jquery-3.3.1.min.js
// @run-at        document-idle
// ==/UserScript==

var i,d=document,a="title",m=d[a],s=0,g=0,n=d[r]("a"),o="html",t=d[r]("t"),f=d[r]("f"),y=$('<link id="favicon" rel="icon" type="image/x-icon" href="/fav.ico" />'),r="createElement",b="src",c="preload",e="length",h=".notificationsCount",j=".message-count",k="strokeText",l="fillStyle",p="fillText",q="height",u=(s="width","getContext"),v="drawImage",w="font",x="strokeStyle",z="lineWidth",aa="play",bb="attr",cc="onload";function c(){return $(h)[l]?$(h)[n]():$(j)[n]()}function i(){t[q]=t[s]=32,i=t[u]("2d"),f[cc]=function(){i[v](this,0,0),i[w]='bold 21px "helvetica", sans-serif',i[x]="black",i[z]=3,g>99?(i[k]("99+",0,31),i[l]="#FFFFFF",i[p]("99+",0,31)):(i[k](g+"",0,31),i[l]="#FFFFFF",i[p](g+"",0,31)),y[bb]({type:"image/png",href:t.toDataURL("image/png")})},f[b]="/favicon.y"}n[b]="https://raw.githubusercontent.com/Hans5958/message-notifier/master/Message%20Notifier/notificationsound.wav",n[c]="auto",y.appendTo(d.head),void 0!==c()&&setInterval(function(){0==(g=c())?(d[a]=m,y[bb]({type:"image/x-icon",href:"/favicon.y"}),s=0):s!=g?(d[a]="("+g+") New message!",n[aa](),s=g,i()):d[a]="("+g+") "+m},2e3);