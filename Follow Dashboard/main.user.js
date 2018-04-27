// ==UserScript==
// @name         Hans5958's Follow Dashboard
// @namespace    scratch.mit.edu/users/Hans5958
// @version      1
// @description  A (ugly, but) convinent follow dashboard. Great for follow accounts. Visit scratch.mit.edu/follow to activate the dashboard.
// @author       Hans5958
// @match        https://scratch.mit.edu/follow
// @grant        none
// ==/UserScript==

var userNow=Scratch.INIT_DATA.LOGGED_IN_USER.model.username,content="<div id='content'><div class='container'><h1>Hans5958's Follow Dashboard</h1> <table><tr><td style='padding: 2px; vertical-align: bottom;'><\/script><textarea placeholder='Username' rows='1' cols='40' id='user'></textarea></td><td style='padding: 2px; vertical-align: top;'><form id='form1' action='javascript:f()'><input type='submit' value='Follow' /></form></td><td style='padding: 2px; vertical-align: top;'><form style= id='form2' action='javascript:function f(){$.ajax({type:\"PUT\",url:\"https://scratch.mit.edu/site-api/users/followers/\"+document.getElementById(\"user\").value+\"/add/\",data:{usernames:document.getElementById(\"user\").value}}),parent.document.getElementById(\"iframel\").src=\"https://scratch.mit.edu/users/\"+document.getElementById(\"user\").value,Scratch.AlertView.msg($(\"#alert-view\"),{alert:\"success\",msg:Scratch.ALERT_MSGS.followed+document.getElementById(\"user\").value})}'><input type='submit' value='Declare'/></form></td></tr></table></div><iframe id='iframel' src='https://scratch.mit.edu' height='500' width='49.5%'></iframe><iframe id='iframer' height='500' width='49.5%'></iframe></body></div>";$("div#content").replaceWith(content),parent.document.getElementById("iframer").src="https://scratch.mit.edu/users/"+userNow;