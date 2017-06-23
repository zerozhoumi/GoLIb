<!--加入易班授权-->
<?php
include 'iapp.php';
?>
<!DOCTYPE html>
<html lang="zh-CN">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<meta charset="utf-8">
<head>
	<title>mybook</title>
</head>
<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="css/style.css">
<body>
<!-- nav -->
<nav class="navbar navbar-default navbar-fixed-top">
	<div class="container">
		<ul class="nav nav-pills">
			<li class="navbar-brand" >
				<span class="glyphicon glyphicon-education" aria-hidden="true"></span>
			</li>

			<li role="presentation" ><a href="index.html">借书
				<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
			</a></li>

			<li role="presentation" ><a href="reback.html">
				<span class="glyphicon glyphicon-ice-lolly-tasted" aria-hidden="true"></span>
				吐槽</a></li>

			<li role="presentation" class="active"><a href="mybook.php">
				<span class="glyphicon glyphicon-book" aria-hidden="true"></span>
				我的书单</a></li>
		</ul>
	</div>
</nav>


<!-- 登陆 -->

<button>快捷登陆-易班账号</button>
正在开发中
<!-- 书单列表 -->
<!-- 我的书单 -->
<div class="book-show">
	<ul>
		<!--<li><h3>1.Java程序设计实验指导.双语版</h3><h4>i312JA/1422</h4><span>馆藏复本：3 <br>-->
		<!--可借复本：0</span> 主编高永平 <br>-->
		<!--电子工业出版社&nbsp;2017 <br>(0)</li>-->
		<!--<li><h3>1.Java程序设计实验指导.双语版</h3><h4>i312JA/1422</h4><span>馆藏复本：3 <br>-->
		<!--可借复本：0</span> 主编高永平 <br>-->
			<!--电子工业出版社&nbsp;2017 <br>(0)</li>-->
	</ul>

</div>

<!--footer-->
<footer class="footer text-center">
	<address>
		developed by<a href="https://github.com/zerozhoumi/GoLIb">zhoumi<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></a>
	</address>
</footer>
</body>
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
</html>