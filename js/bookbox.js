function getFloor1Book(str) {
    //不在分辩朝向
    var pattern = ['i0', 'i06.53/7', 'i109.9/41', 'i16/96', 'i206.2/160',
        'i207.7/72', 'i207.22/78', 'i207.23/91', 'i207.42/38', 'i210.4/15',
        'i216.02/7', 'i217.2/06', 'i217.62/19', 'i222.749/11', 'i227/330',
        'i242.4/15', 'i246.4/51', 'i247.4/153', 'i247.5/983', 'i247.5/1574',
        //20
        'i247.5/1819', 'i247.5/2194', 'i247.5/2454', 'i247.5/2803', 'i247.52/66',
         'i247.53/285', 'i247.55/79', 'i247.57/498', 'i247.57/927','i247.57/1410',
        'i247.57/1782', 'i247.57/1998','i247.57/2437', 'i247.57/2983', 'i247.57/3389',
        'i247.6/45', 'i247.7/688', 'i247.7/957', 'i247.77/4', 'i25/887',
        //40

        'i253./20', 'i253.2/25', 'i26/29', 'i266./283', 'i267/846',

        'i267/1184', 'i267./1470', 'i267./1780', 'i267./2106', 'i267./2555',

        //40
        'i267.1/278', 'i267.1/682', 'i267.4/40', 'i313.72/2', 'i./',//40

        // ["i253.2",'i253.7'],["i253.7",'i266'],["i"],["i"],["i"],
        // ["i"],["i"],["i"],["i267/2106",'i267/2555'],["i"],
        ["i"], ["i"], ["i"], ["i"], ["i"],
        ["i"], ["i"], ["i"], ["i"], ["i"],//60

        ["i"], ["i"], ["i"], ["i"], ["i"],
        ["i"], ["i"], ["i"], ["i"], ["i"],
        ["i"], ["i"], ["i"], ["i"], ["i"],
        ["i"], ["i"], ["i"], ["i"], ["i"],//80
        ["i"],//91
        ["j"], ["j"], ["j"], ["j"],
        ["j"], ["j"], ["j"], ["j"], ["j"],//100

        ["j"], ["j"], ["j"], ["j"],
        ["k"], ["k"], ["k"], ["k"], ["k"],
        ["k"], ["k"], ["k"], ["k"], ["k"],
        ["k"], ["k"], ["k"], ["k"]

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
    //该范围是一定存在的，如i1，i2 ；
    var firstStr = str.slice(0, 2);
    var endNum = pattern.length;
    var count = 0;
    var startNum = 0;
    for (var i = 0; i < pattern.length; i++) {
        //indedexof 检索的值没有出现，就-1
        if (pattern[i].slice(0, 2).indexOf(firstStr) != -1) {
            endNum = i;
            count++;
        }
        startNum = endNum - count;
    }

//    第二个范围，，count，----endnum;
//筛选的字符是i233，中的233；
//     var firstNum = str;
// var secondNum=str.slice(1,2);
// for (var j=startNum,count=0 ;j<endNum-startNum;j++){
// 	if (pattern[j][0].slice(1,2)<=secondNum){
// 		endNum=j;
// 		count++
// 	}
// 	startNum=endNum-count;
// }
// return [startNum,endNum];
//
// }
}



// function getFloor2Book(str){
//     var floor2=[['a'],['a'],['a'],['b'],['b'],
//         ['b'],['b'],['b'],['b'],['b'],
//         ['b'],['b'],['b'],['b'],['b'],
//         ['b'],['b'],['b'],['b'],['b'],//20
//
//         ['b'],['c'],['c'],['c'],['c'],
//         ['c'],['c'],['d'],['d'],['d'],//30
//
//         ['d'],['d'],['d'],['d'],['d'],
//         ['d'],['d'],['d'],['d'],['d'],
//         ['d'],['d'],['d'],['d'],['d'],
//         ['d'],['d'],['d'],['d'],['d'],//50
//         ['d'],['d'],['d'],['d'],['d'],
//         ['d'],['e'],['f'],['f'],['f'],//60
//
//         ['f'],['f'],['f'],['f'],['f'],
//         ['f'],['f'],['f'],['f'],['f'],
//         ['f'],['f'],['f'],['f'],['f'],
//         ['f'],['f'],['f'],['f'],['f'],//80
//
//         ['f'],['f'],['f'],['f'],['f'],
//         ['f'],['f'],['f'],['f'],['f'],
//         ['f'],['f'],['f'],['f'],['f'],
//         ['f'],['f'],['f'],['f'],['f'],//100
//
//         ['f'],['f'],['g'],['g'],['g'],
//         ['g'],['g'],['g'],['g'],['g'],
//         ['g'],['g'],['g'],['g'],['g'],
//         ['g'],['g'],['g'],['h'],['h'],//120
//         ['h'],['h'],['h'],['h'],['h'],
//         ['h'],['h'],['h'],['h'],['h'],
//         ['h'],['h'],['h'],['h'],['h'],
//         ['h'],['h'],['h'],['h'],['h'],//140
//         ['h'],['h']//142
//     ];
// };
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




