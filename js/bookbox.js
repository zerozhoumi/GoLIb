function getFloor1Book(str) {
    var pattern = ['i0.0/0', 'i06.53/7', 'i109.9/41', 'i16.0/96', 'i206.2/160',
        'i207.7/72', 'i207.22/78', 'i207.23/91', 'i207.42/38', 'i210.4/15',
        'i216.02/7', 'i217.2/06', 'i217.62/19', 'i222.749/11', 'i227.0/330',
        'i242.4/15', 'i246.4/51', 'i247.4/153', 'i247.5/983', 'i247.5/1574',
        //20
        'i247.5/1819', 'i247.5/2194', 'i247.5/2454', 'i247.5/2803', 'i247.52/66',
         'i247.53/285', 'i247.55/79', 'i247.57/498', 'i247.57/927','i247.57/1410',
        'i247.57/1782', 'i247.57/1998','i247.57/2437', 'i247.57/2983', 'i247.57/3389',
        'i247.6/45', 'i247.7/688', 'i247.7/957', 'i247.77/4', 'i25.0/887',
        //40

        'i253.0/20', 'i253.2/25', 'i26.0/29', 'i266.0/283', 'i267.0/846',
        'i267.0/1184', 'i267.0/1470', 'i267.0/1780', 'i267.0/2106', 'i267.0/2555',
        'i267.1/278', 'i267.1/682', 'i267.4/40', 'i313.72/2', 'i313.45/355',
        'i313.45/878','i404.5/1','i512.4/85','i512.45/24','i515.09/1',
        //60
        'i516.45/125','i524.45/11','i546.45/2','i561.13/2','i561.44/9',
        'i561.45/175','i561.45/323','i561.45/731','i562.45/2','i565.4/80',
        'i565.44/114','i565.6/7','i711.45/42','i712.45/5','i712.45/84',
        'i712.45/395','i712.45/669','i712.45/1071','i712.45/1397','i712.45/1716',
        //80
        'i712.65/17','j0.0/1','j06.0/84','j110.95/1','j212.0/36',
        'j228.2/33','j292.28/14','j292.75/2','j605.0/03','j61.0/3',
        'j623.26/23','j647.41/24','j657.65/94','j90.0/15','k0.0/1',
        'k126.0/26','k203.53/5','k210.9/1','k247.07/1','k261.1/9',
        //100
        'k295.8/199','k712.0/13','k825.2/115','k825.2/244','k827.52/84',
        'k835.12/53','k837.12/540','k926.5/3','z109.5/4','z228.1/3'
    //    剩下一个是空的热门书架和新书架
        ];
        //计算第一个范围
        //该范围是一定存在的，如i1，i2 ；
        // i2
        var firstStrPattern=/[a-z]{1,}\d/;
        //i247.
        var firstNumPattern=/[a-z]{1,}\d{1,}\./g;
        //   .7/
        var middleNumPattern=/\.\d{1,}\//g;
        //   /7
        var lastNumPattern=/\/\d{1,}/g;

        var firstStr = str.match(firstStrPattern)[0];
        var firstNum=str.match(firstNumPattern)[0].slice(1,-1);
        var middleNum=str.match(middleNumPattern)[0].slice(1,-1);
        var lastNum=str.match(lastNumPattern)[0].slice(1);

        console.log(firstStr);
        console.log(firstNum);
        console.log(middleNum);
        console.log(lastNum);
    
        //不用自己的方法，效率太低
        var beginArr=$.grep(pattern,function (n,i) {
            //不一定有首字母吧，i6就没有；
            
            if (n.match(firstStrPattern)[0]===firstStr) {
                var beginRange = n.match(firstNumPattern)[0].slice(1, -1);
                if (beginRange === firstNum) {
                    //如果有相等的，继续比较啊
                    var middleRange = n.match(middleNumPattern)[0].slice(1, -1);
                    
                    if (middleRange === middleNum) {
                        //如果有相等的，继续比较啊
                        var lastRange = n.match(lastNumPattern)[0].slice(1);
                        if (lastRange ===lastNum) {
                            //不可能还有多个了
                            return i;
                        }else if (lastRange<lastNum) {
                        	return i;
                        }
                    } else if (middleRange < middleNum) {
                        return i;
                    }

                } else if (beginRange < firstNum) {
                    return i;
                }
                
            }
            // }else if(n.slice(1,2)<firstStr.slice(1,2)){
            //     return i;
            //
            // }

            //    如果前2个字母都不在那就好办，肯定是前一个；


        });

        
return beginArr;
        



}
console.log(getFloor1Book("i247.5/1128"));


function getFloor2Book(str){
    var floor2=[
    'a0.0/0','a762.0/1','a841.692/8','b0.0/99','b089.0/1',
    'b21.0/7','b222.05/90','b223.1/8','b244.05/15','b261.0/20',
    'b502.43/4','b521.0/12','b804.4/47','b82-53.0/2','82-49.0/431',
    // 第15，14有问题
    'b83-692.0/13','b842.4/2','b848.4/279','b848.4/321','b94.05/1',
     //20
    'b959.92/3','c0.0/0','c53.0/130','c91.0/25','c912-49./26',
   

        //30

       //140
       //142
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
        ['tn'],['tn'],['tn'],['tp']

    ];
}
function getFloor4Book() {
	var floor4=[];
}

function caculateBookList(str){
	//记得变大写为小写
	var lowerStr=str.toLowerCase();
            // 让输入的字符串变得规范--我的库里的规范 “字母+数字1+.+数字2+/+数字3”
            // 其中数字2在库中已经用0添加；
            
           var notNullPattern=/\.\d{1,}\//g;
           var firendStr="";
       //    语法允许直接加
       if (lowerStr.match(notNullPattern)) {
       		firendStr=lowerStr;
       }else{
       	// i16/96
            // 这样的，匹配不到加上加上0；i16.0/96
            // 
            // 
       }
           
         
    // 计算书籍所在层数
    //文艺馆 I J K社科馆 [A-H]科技  [n-x]
    var firstStr=firendStr.slice(0,1);
   	var pattern1=/^[i-k]/i;
    var pattern2=/^[a-h]/i;
    var pattern3=/^[n-x]/i;
    //貌似得改改
    if (firstStr.search(pattern1)) {
        return [1,getFloor1Book(firendStr)];
    }else if (firstStr.match(pattern2)) {
        return [2,getFloor2Book(firendStr)];
    }else if(firstStr.match(pattern3)){
        return [3,getFloor3Book(firendStr)];
    }
}


//test




