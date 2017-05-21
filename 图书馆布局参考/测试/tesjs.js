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


	console.log(caculateBookList("j33.444"));