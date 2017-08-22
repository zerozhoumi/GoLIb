var app1 = new Vue({
    el: '.error1',
    data: {
        message:'test error',
        seen:true
    }
});


var app2=new Vue({
    el:'#inputBookName',
    data:{
        msg:'书名'
    }
});



app1.message='sssss';
app1.seen=false;

app1;
app2;
app2.msg='lllllfdf';