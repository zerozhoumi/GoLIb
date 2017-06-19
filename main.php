<?php
/**
 * Created by PhpStorm.
 * User: 1
 * Date: 2017/6/15
 * Time: 13:54
 */
//加入php的时间检测，界面上显示等待的信息；

//检测类型

$booktype=$_POST["bookType"];
$bookname=$_POST["bookName"];
$my_url="http://211.87.177.4/opac/openlink.php?strSearchType=".$booktype."&match_flag=forward&historyCount=1&strText=".$bookname."&doctype=ALL&lang_code=ALL&match_flag=forward&displaypg=20&showmode=list&orderby=DESC&sort=CATA_DATE&onlylendable=no&with_ebook=off";
//引入自动加载文件
require 'vendor/autoload.php';
use QL\QueryList;
$page=$my_url;
$reg =array(
    //    书名
    'name'=>array('h3 a','html','a'),
//    书籍码
    'code'=>array('h3','html','-span -a '),
    //采集作者，以及出版社,这里用到了QueryList的过滤功能，过滤掉img标签和a标签
    'date' => array('p','html','-img -a')
);
$range='.book_list_info';
$ql=QueryList::Query($page,$reg,$range)->data;
if(count($ql)!==0){
    foreach ($ql as $li){
        print_r("<li><h3>".$li["name"]."</h3>");
        print_r("<h4>".$li["code"]."</h4>");
        print_r($li["date"]."</li>");
    }
}else{
    echo "<p class='bookError'>未找到该书籍，请输入正确书籍信息</p>";
}

