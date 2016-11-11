<!DOCTYPE html>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<html>
	<head>
		<title>i-stack登录界面</title>
		<link rel="stylesheet" type="text/css" href="css/Login_style.css" />
		<script type="text/javascript" src="js/Login_javascript.js"></script>
	</head>
	<body>
		<!--<div class="login_frame"></div>-->
		<div class="LoginWindow">
				<form method="post" action="../copy-index.php" onsubmit="return user_input()" class="login">
					
					<h1 class="title">Login In</h1>
					
					<p>
						<!--<label for="login">帐号:</label>-->
						<input type="text" name="id" id="id" value="" placeholder="Username">
					</p>
					<p>
						<!--<label for="password">密码:</label>-->
						<input type="password" name="password" id="password" value="" placeholder="Password">
					</p>
					<!--<p class="login-submit">
						<button type="submit" class="login-button">Login</button>
					</p>-->
					<button type="submit" class="btn-submit">Sign In</button>
				</form>
				
				<!--<p class="registration">
					<a href="http://www.baidu.com">注册</a>
				</p>-->
		</div>
		<!--<div id="timeArea">
			<script>
				LoadBlogParts();
			</script>
		</div>-->
	</body>

</html>