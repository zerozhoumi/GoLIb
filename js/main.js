	function getInputBookName(){
		//判断是否为空
		var str=$("#inputBookName").val().trim();
		if (str.length!==0) {
			return str;
		}else{
			return false;
		}
	}
	function getTypeName(){
        //strSearchType=title，author,isbn
		var num =$("#selectType").val();
		var type=["title","author","isbn"];
		str=type[num-1];
		return str;
	}
        //在写一个函数，用于改变placeholder
	function changePlaceHolder() {


	}

	function setUrl(type,name){
        //设定好url发给服务器
		str="http://211.87.177.4/opac/openlink.php?strSearchType="+type
		+"&match_flag=forward&historyCount=1&strText="+name
		+"&doctype=ALL&lang_code=ALL&match_flag=forward&displaypg=40&showmode=list&orderby=DESC&sort=CATA_DATE&onlylendable=no&with_ebook=off";

		return str;
	}

	function changeUrl(str) {
		//用于改变跳转标签页的url
		$("#infoPage a").attr("href",str);
    }
    function getInputBookCode(){
        //判断是否为空
        var str=$("#inputBookCode").val().trim();
        if (str.length!==0) {
            //记得变大写为小写
            return str.toLowerCase();
        }else{
            return false;
        }
    }

	function showBook(numArr){
		//显示该书籍
		var floorList=["#first-floor","#second-floor","#three-floor"];
		var floorName=floorList[numArr[0]-1];
		 $(floorName).css("display","block");
		 var toFindLi= $(floorName).find("li");
             //注意数组的起始以及要显示的数字；
		 	toFindLi.eq(numArr[1]).html(numArr[1]+1).addClass("current");

	}


$(function () {
    
        //下拉选框是否改变了


        //当点击查询按钮时
		$("#findBtn").click(function(){
			var bookName=getInputBookName();
				if (bookName) {
                    var type=getTypeName();
					var myUrl= setUrl(type,bookName);
					//改变跳转标签页的url
					changeUrl(myUrl);
				//	跳转到该页

				}else{
					$("#findBookPage .error").css("display","block");
				}
			});
		//当点击查询编码页时
		$("#findCodeBtn").click(function () {
			var codeName=getInputBookCode();
			if (codeName){
				// var numArr=caculateBookList(codeName);
				showBook([1,3]);
                //	跳转到该页

			}else {
				$("#infoPage .error").css("display","block");
			}

        })
});
	
		
