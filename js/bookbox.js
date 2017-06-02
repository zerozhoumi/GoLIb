
function getFloor1Book(str) {
    //先不分辩朝向
    var pattern=[['i'],['i06.53/7','i109.9/40'],['i109.9/41','i16/95'],
        ['i16/96','i206.2/119'],["i"],//5个一行

        ["i"],["i"],["i"],["i"],["i"],
        ["i"],["i"],["i"],["i247.5"],["i"],
        ["i"],["i"],["i"],["i"],["i"],//20

        ["i"],["i"],["i"],["i"],["i"],
        ["i"],["i"],["i"],["i"],["i"],
        ["i"],["i"],["i"],["i"],["i"],
        ["i"],["i"],["i"],["i"],["i"],//40

        ["i253.2",'i253.7'],["i253.7",'i266'],["i"],["i"],["i"],
        ["i"],["i"],["i"],["i267/2106",'i267/2555'],["i"],
        ["i"],["i"],["i"],["i"],["i"],
        ["i"],["i"],["i"],["i"],["i"],//60

        ["i"],["i"],["i"],["i"],["i"],
        ["i"],["i"],["i"],["i"],["i"],
        ["i"],["i"],["i"],["i"],["i"],
        ["i"],["i"],["i"],["i"],["i"],//80
        ["i"],//91
        ["j"],["j"],["j"],["j"],
        ["j"],["j"],["j"],["j"],["j"],//100

        ["j"],["j"],["j"],["j"],
        ["k"],["k"],["k"],["k"],["k"],
        ["k"],["k"],["k"],["k"],["k"],
        ["k"],["k"],["k"],["k"]

    ];


    //递归
    // function startToEnd() {
		// if (){
    //
		// 	return num;
		// }else {
		// 	startToEnd();
		// }
    // }

    //计算第一个范围
    var firstStr=str.slice(0,1);
    var endNum=pattern.length;
    var count=0;
    var startNum=0;
    for (var i=0;i<pattern.length;i++){
        //indedexof 检索的值没有出现，就-1
        if (pattern[i][0].slice(0,1).indexOf(firstStr)!=-1){
            endNum=i;
            count++;
        }
        startNum=endNum-count;
    }
//    第二个范围，，count，----endnum;

var secondNum=str.slice(1,2);
for (var j=startNum,count=0 ;j<endNum-startNum;j++){
	if (pattern[j][0].slice(1,2)<=secondNum){
		endNum=j;
		count++
	}
	startNum=endNum-count;
}
return [startNum,endNum];

}
console.log(getFloor1Book("i1"));
function getFloor2Book() {
    var floor2=[['a'],['a'],['a'],['b'],['b'],
        ['b'],['b'],['b'],['b'],['b'],
        ['b'],['b'],['b'],['b'],['b'],
        ['b'],['b'],['b'],['b'],['b'],//20

        ['b'],['c'],['c'],['c'],['c'],
        ['c'],['c'],['d'],['d'],['d'],//30

        ['d'],['d'],['d'],['d'],['d'],
        ['d'],['d'],['d'],['d'],['d'],
        ['d'],['d'],['d'],['d'],['d'],
        ['d'],['d'],['d'],['d'],['d'],//50
        ['d'],['d'],['d'],['d'],['d'],
        ['d'],['e'],['f'],['f'],['f'],//60

        ['f'],['f'],['f'],['f'],['f'],
        ['f'],['f'],['f'],['f'],['f'],
        ['f'],['f'],['f'],['f'],['f'],
        ['f'],['f'],['f'],['f'],['f'],//80

        ['f'],['f'],['f'],['f'],['f'],
        ['f'],['f'],['f'],['f'],['f'],
        ['f'],['f'],['f'],['f'],['f'],
        ['f'],['f'],['f'],['f'],['f'],//100

        ['f'],['f'],['g'],['g'],['g'],
        ['g'],['g'],['g'],['g'],['g'],
        ['g'],['g'],['g'],['g'],['g'],
        ['g'],['g'],['g'],['h'],['h'],//120
        ['h'],['h'],['h'],['h'],['h'],
        ['h'],['h'],['h'],['h'],['h'],
        ['h'],['h'],['h'],['h'],['h'],
        ['h'],['h'],['h'],['h'],['h'],//140
        ['h'],['h']//142
    ];
}
function getFloor3Book() {
    var floor3=[['n'],['n'],['n'],['o'],['o'],
        ['o'],['o'],['o'],['o'],['o'],//10
        ['o'],['o'],['o'],['o'],['o'],
        ['o'],['o'],['o'],['o'],['p'],//20

        ['p'],['q','r','s'],['q','r','s'],['tb'],['tb'],
        ['tb'],['tb'],['tb'],['tb'],['te'],//30
        ['te'],['te'],['te'],['te'],['te'],
        ['te'],['te'],['te'],['te'],['te'],//40
        ['te'],['te'],['te'],['te'],['te'],
        ['te'],['tg'],['tg'],['tg'],['th'],//50
        ['th'],['th'],['th'],['th'],['th'],
        ['th'],['th'],['tm'],['tm'],['tm'],//60

        ['tm'],['tm'],['tm'],['tn'],['tn'],
        ['tn'],['tn'],['tn'],['tn'],['tn'],//70
        ['tn'],['tn'],['tn'],['tn'],['tn'],
        ['tn'],['tn'],['tn'],['tp'],

    ];
}
function getFloor4Book() {
	var floor4=[];
}

function caculateBookList(str){
    // 计算书籍所在层数
    //文艺馆 I J K社科馆 [A-H]科技  [n-x]
    var firstStr=str.slice(0,1);
   	var pattern1=/^[i-k]/i;
    var pattern2=/^[a-h]/i;
    var pattern3=/^[n-x]/i;
    if (firstStr.match(pattern1)) {
        return [1,getFloor1Book(str)];
    }else if (firstStr.match(pattern2)) {
        return [2,getFloor2Book(str)];
    }else if(firstStr.match(pattern3)){
        return [3,getFloor3Book(str)];
    }
}


//test




