    function getInputBookName(){
		//判断是否为空
		var str=$("#inputBookName").val().trim();
		if (str.length!==0) {
			return str;
		}else{
            $(".error").css("display","block");
            //改变输入后隐藏信息
            $("#inputBookName").on("click",function () {
                $(".error").css("display","none");
            });
            return false;
		}
	}
    function getTypeName(){
        //strSearchType=title，author,isbn
		var num =$("#selectType").val();
		var type=["title","author","isbn"];
		return type[num-1];
	}
	function postUrl(type,name) {
        //就在这个函数里让爬虫返回数据
        $(document).ajaxStart(function(){
            $('.loading').show();
        }).ajaxStop(function(){
            $(".loading").hide();
        });
        $.post('main.php',{'bookType':type,'bookName':name},function (data) {
            $(".book-show").css("display","block").html(data);
        });
    }
    function clickLI() {
        $(".book-show").off("click").on("click","li",function () {
            $(this).css("background-color","#eee");
            var bookCode=$(this).children("h4").text();
            if (bookCode.length!==0){
                var num=getAsciiFloorBook(bookCode);
                showBook(num);
                $(".need-book").append("<li>"+$(this).html()+
                    "<p>" +"该书籍在第"+(num[0]+1)+"层"+(num[1]+1)+"书架"+"<p>"
                    +"</li>");
                $(this).siblings().hide("slow");
                $("#inputBookName").on("click",function () {
                    // $(".book-show").css("display","none");
                    $(".book-show ").empty();
                    hideBook(num);
                });
            }else{
                alert("这本书没有馆藏");
            }
        });
    }
    function clickNeed() {

        $(".need-book").off("click").on("click","li",function () {
            $(this).css("background-color","#eee");
            var bookCode=$(this).children("h4").text();
            var num=getAsciiFloorBook(bookCode);
            showBook(num);
            $(".book-show ").empty();
            // $("#inputBookName").click(function () {
            //     hideBook(num);
            // });

        });
    }
    function getAsciiFloorBook(upstr) {
        //变大写为小写
        var str=upstr.toLowerCase();
        // 图书馆的书其实是按，编码排的，除个别前几位数字比较相同的；被同学按数字大小排乱了
        var floor=null;
        // 比较出floor；
        var floorPattern=[/^[i-kz]/i,/^[a-h]/i,/^[n-x]/i];
        for (var i = 0; i < floorPattern.length; i++) {
            if(floorPattern[i].exec(str.slice(0,1))!==null){
                floor=i;
            }
        }
        // 现在floor已经有楼层的值了
        var floor1 = ['i0', 'i06-53/7', 'i109.9/41', 'i16/96', 'i206.2/160',
            'i206.7/72', 'i207.22/78', 'i207.23/91', 'i207.42/38', 'i210.4/15',
            'i216.02/7/1', 'i217.2/06/16', 'i217.62/29/2', 'i222.749/11', 'i227/330',
            'i242.4/15-36/1', 'i246.4/51', 'i247.4/153-2/1', 'i247.5/0983-2/2', 'i247.5/1574',
            //20
            'i247.5/1819', 'i247.5/2194', 'i247.5/2454', 'i247.5/2803', 'i247.52/66',
            'i247.53/285', 'i247.55/79', 'i247.57/498', 'i247.57/0927','i247.57/1410',
            'i247.57/1782', 'i247.57/1998','i247.57/2437', 'i247.57/2983', 'i247.57/3389',
            'i247.6/45', 'i247.7/688', 'i247.7/957', 'i247.77/4', 'i25/877',
            //40
            'i250/20', 'i253.2/25', 'i26/59', 'i260/283', 'i260/846',
            'i260/1184', 'i260/1470', 'i260/1780', 'i260/2106', 'i260/2555',
            'i267.1/278', 'i267.1/682', 'i267.4/40', 'i313.072/2', 'i313.45/355/2',
            'i313.45/878','i404.5/1','i512.4/85','i512.45/24','i5109/1',
            //60
            'i516.45/125','i524.45/11','i546.45/2','i561.13/02/7','i561.44/9-4',
            'i561.45/175','i561.45/323','i561.45/731','i562.45/2','i565.4/80',
            'i565.44/114','i565.6/7',
            // 前面全部测试，后面为很小的数其实不影响大局
            'i711.45/42','i712.45/5','i712.45/84',
            'i712.45/395','i712.45/669','i712.45/1071','i712.45/1397','i712.45/1716',
            //80
            'i712.65/17','j0','j06/84','j110.95/1','j210/36',
            'j228.2/33','j292.28/14','j292.75/2','j605/03','j61/3',
            'j623.26/23','j647.41/24','j657.65/94','j90/15','k0.1',
            'k120/26','k203-53/5','k210.9/1','k2407/1','k261.1/9',
            //100
            'k295.8/199','k710/13','k825.2/115','k825.2/244','k827.52/84',
            'k835.12/53','k837.12/540','k926.5/3','z109.5/4','z999.999/999'
            // 最后一个防止溢出
        ];
        var floor2=[
            'a0.0','a760/1','a841.692/8','b0.99','b080/1',
            'b21/7','b2205/90','b223.1/8','b2405/15','b260/20',
            'b502.43/4','b520/12','b804.4/47','b82.53/2','b821.49/431',
            'b83.692/13','b842.4/2','b848.4/279','b848.4/321','b945/1',
            //20
            'b959.92/3','c0.0','c53/130','c91/25','c912.49/26',
            'c910/26','c910/15','c93.49/2','c933.2/47','c960/33',
            'd030/138','d091.5/26','d230/5','d520/21','d610/204',
            'd660/11','d691.5/10','d756.56/1','d814.1/4','d871.20/38',
            // 40
            'd90/280','d909.5/2','d912.290/40','d9101/27','d918.9/1',
            'd920.5/83','d922.149/6','d922.290/1','d922.294/9','d9204/74',
            'd923.64/34','d9205/46','d925.204/2','d937.1/1','d99/33',
            'e0.0','e892.25/40','f0./2','f010/79','f061.5/5',
            //60
            'f069.9/17','f097.12/12','f119.9/22','f123.9/53','f129.5/24',
            'f220/50','f224.5/187','f230/342','f234.2/33','f230/142',
            'f250/154','f270/578','f270/1089','f270/71','f272.9/119',
            'f272.92/275','f273.4/47','f270/347','f275.4/10','f276.7/99',
            // 80
            'f279.243/44','f280/44','f300/01','f416.471/1','f451.26/0',
            'f713.3/15','f713.36/187','f713.5/82','f713.52/26','f710/19',
            'f740/97','f746.41/1','f810.42/11','f812.42/31','f827.12/4',
            'f830.33/22','f830.59/82','f830.9/241','f830.91/394','f830/133',
            // 100
            'f832.51/51','f840.32/9','g12/37','g200/31','g210/59',
            'g219.29/14','g250.53/9','g257.36/3','g300/73','g4054/23',
            'g440/11','g529.7/01','g640/51','g645.541/48','g649.28/1',
            'g78/104','g841.2/7','g852.4/42','h0.06','h010/155',
            // 120
            'h050/61','h109.4/22','h149/2','h152.3/185','h195.4/64',
            'h31/620','h31/990','h310.41/60','h313.62/9','h310/340',
            'h319.4/302','h319.4/1021','h319.4/1510','h319.4/2000','h319.4/2407',
            'h319.9/353','h32/31','h999.999/999'
            // 139,最后一个防止溢出
        ];
        var floor3=['n0/0','n091/51','n49/208/1','o1-0/66','o13/208',
            'o13/394','o13.44/91','o141/39','o151.2/343', 'o159/30',
            'o172/137','o185.2/72','o21.42/','o231/54','o34.53/6',
            'o4/495','o415.5/6','o6.3/70','o643.1/10','p208/10',
            //20
            'p57/22','q95/0','r212/154','r395.6/43','to.19/1',
            'tb22/34','tb3/202','tb33-53/2','535.0/0','te-120/1',
            'te-9/76','te12/97','te12/268','te121.3/11','te13/40',
            'te155/1','te271/1','te34/46/1','te345/27','te357.44/5',
            //40
            'te375/5','te624.8/4','te65/65','te86/10','te96/24',
            'te974.1/1','tg14-62/29','tg423/01','tg659/219','tg8-62/18',
            'th039/219','th122/251','th122/518','th122/1005','th126/163',
            'th13-62/9','th16/141','th45/10','tk01/08','tl7/11',

			//60
            'tm-33/73','tm1/328','tm13/239','tm3/120','tm571.2/72',
            'tm7/101','tm8/01','tm930.7/1','tn01/16','tn1/83',
            'tn4/11','tn43/13','tn702/39','tn710/127','tn710.02/32',
            'tn79/227','tn91/134','tn911.6/142','tn912/35','tn915.05/62',
			//80
            'tn918.1/39','tn919.8/26','tn929.5/158','tn929.53/301','tn949.12/111',
            'tp13/271','tp212/354','tp273/356','tp273-44/2','tp274/419',
            'tp3/538','tp3/721','tp3/844','tp3/1010','tp3/1629',
            'tp301.6/84','tp307/46','tp311.1/30','tp311.12/147','tp311.12/338',
            //100
            'tp311.13/30','tp311.138fo/226','tp311.5/04','tp311.5/409','tp311.56/373',
            'tp312/405','tp312ba/486','tp312c/463','tp312c/949','tp312c/1391',
            'tp312c/1807','tp312ja/138','tp312ja/637','tp312ja/1270','tp312vh/0',
            'tp316/331','tp316.2/25','tp361.81/72','tp316.86/170','tp317.1/143',
            //120
            'tp332/106','tp332.3/213','tp36/597','tp368.1/12','tp368.1/13',
            'tp39/156','tp391.41/292','tp391.41/1671','tp391.412/1','tp391.72/653',
            'tp393/424','tp393-05/11','tp393-092/399','tp393-092/1441','tq0',
            'tq085/9','ts03.1/8','tu093.13/5','tu204.39/71','tu238-64/34',
             //140
            'tu318-62/54','tu392.5/1','tu56/15','tu74/66','tu973/33',
            'tv13/21','v13/21','v463/11','v4-49/1','x172/7','x703/13'];
        // 得到楼层的数组
        var pattern=[floor1,floor2,floor3];
        var floorArr=pattern[floor];
        var finalArr=$.grep(floorArr,function (n,i) {
            //还需要写个，刚刚提到过的特殊情况；
            if (n>str) {
                return i;
            }
        });
        var mystr=finalArr[0];
        var num=null;
        $.each(floorArr,function(index,value){
            if (value===mystr) {
                num=index;
            }
        });
        return [floor,num];
    }
    //特殊调用，当出现没库存，去单本库时，使用，后面考虑；
	function showBook(numArr){
		//显示该书籍
		var floorList=["#first-floor","#second-floor","#three-floor"];
		var floorName=floorList[numArr[0]];
		 $(floorName).css("display","block");
		 var toFindLi= $(floorName).find("li");
        //注意数组的起始以及要显示的数字；
        toFindLi.eq(numArr[1]).html(numArr[1]+1).addClass("current");
	}
	function hideBook(numArr) {
    //    隐藏该书籍
        var floorList=["#first-floor","#second-floor","#three-floor"];
        var floorName=floorList[numArr[0]];
        $(floorName).css("display","none");
        var toFindLi= $(floorName).find("li");
        toFindLi.eq(numArr[1]).html('').removeClass("current");
    }
    function setUrl(type,name) {
        return "http://211.87.177.4/opac/openlink.php?strSearchType="+type+
            "&match_flag=forward&historyCount=1&strText="+name+"&doctype=ALL&lang_code=ALL&match_flag=forward&displaypg=20&showmode=list&orderby=DESC&sort=CATA_DATE&onlylendable=no&with_ebook=off";
    }

	$(function () {

        //随时准备
        clickNeed();

        //当点击编码查询按钮时
        $("#findCodeBtn").click(function () {
            var str=$("#codeInput").val().trim();
            var num=getAsciiFloorBook(str);
            showBook(num);
        });
        //当点击查询按钮时
		$("#findBtn").click(function(){
			var bookName=getInputBookName();
				if (bookName) {
                    var type=getTypeName();
					postUrl(type,bookName);
                    clickLI();
				}
            $("#errorBtn").one("click",function () {
                var myUrl=setUrl(type,bookName);
                window.open(myUrl);
            })
        });

	});



