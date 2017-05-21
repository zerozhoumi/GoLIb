
	function getInputName(){
		// 考虑去空格
		var str=$("#input").val().trim();
			console.log(str);
		return str;

	}

	function isNotVoid(str){
		//判断是否为空
		return (str.length!=0);
	}

	function getTypeName(){
		// strSearchType=title
		// strSearchType=author
		// var option=$("#type").children();
		//暂时不知道怎么弄title默认
		var num =$("#selectType").val();
		var type=["title","author","isbn"];
		str=type[num-1];
		console.log(str);
		return str;
	}

	function setUrl(type,name){
		
		//设定好url发给服务器
		////对于中文有没有好的解决方法
	str="http://211.87.177.4/opac/openlink.php?strSearchType="+type
	+"&match_flag=forward&historyCount=1&strText="+name
	+"&doctype=ALL&lang_code=ALL&match_flag=forward&displaypg=40&showmode=list&orderby=DESC&sort=CATA_DATE&onlylendable=no&with_ebook=off";
	console.log(str);
	return str;

	}


	function getBookListNum(){
		//从服务器获得书籍编号
		//   暂定为TP312JA/716-5
		var str="iTP312JA/76-5";
		// console.log(str);
		return str;
	}

	function caculateFloor(str){
		// 计算书籍所在层数
		//文艺馆 I J K社科馆 [A-H]科技  [n-x]
		mystr=str.slice(0,1);
		pattern1=/^[I-K]/i;
		pattern2=/^[A-H]/i;
		pattern3=/^[N-X]/i;
		if (mystr.match(pattern1)) {
			return 1;
		}else if (mystr.match(pattern2)) {
			return 2;
		}else if(mystr.match(pattern3)){
			return 3;
		}	
	}






	function caculateBookList(str){
		// 计算书籍所在书架
		// 
	
	var floor1=["i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i",
				"i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i",
				"i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i",
				"i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i",
				"i",
				"j","j","j","j","j","j","j","j","j","j","j","j","j",
				"k","k","k","k","k","k","k","k","k","k","k","k","k","k"

	];

	var firstStr=str.slice(0,1);
	var endNum=0;
	var count=0;
	for (var i=0;i<floor1.length;i++){
		if (floor1[i].indexOf(firstStr)!=-1){
			endNum=i;
			count++;
		}

	}

	endNum+=1;
	var rangneNum=[endNum-count,endNum];
	console.log(endNum-count,endNum);
		//返回一个数组
	return rangneNum;
		
	}


	function showBook(floor,num){
		//显示该书籍
		var floorList=["#first-floor","#second-floor","#three-floor"];
		var floorName=floorList[floor-1];
		 $(floorName).css("display","block"); 
		 //num是一个数组
		 var toFindLi= $(floorName).find("li");
		 for(var i=num[0];i<num[1];i++){
		 	toFindLi.eq(i).addClass("current");

		 }
		 
	}


$(document).ready(function () {
		
		$("#find").click(function(){
			var bookName=getInputName();


			

				if (isNotVoid(bookName)) {
					$("#head").hide();

					setUrl(getTypeName(),bookName);

					var strNum=getBookListNum();

				showBook(caculateFloor(strNum),caculateBookList(strNum));
				}else{
					console.log("请输入所查书籍");

				}

			


			
			});
		});
	
		
