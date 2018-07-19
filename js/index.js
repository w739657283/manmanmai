$(function(){

   //获取本机ip
    var ip = "192.168.13.29";
    //导航栏的展示和隐藏
    $("#mm_more").on("click",function(){
        $(".more").toggle();
    });
    // rendernav();
    renderpro();
     //渲染导航数据
    function rendernav(){
        $.ajax({
            type : "get",
            url: "http://"+ ip+ ":9090/api/getindexmenu",
            success: function(info){
                console.log( info );
                $(".").html( template("tpl1",info) );
            }
        })
    }
    //渲染折扣列表数据
    function renderpro(){
        $.ajax({
            type : "get",
            url: 'http://' + ip + ':9090/api/getmoneyctrl',
            dataType: "json",
            success: function(info){
                console.log( info );
                $(".mmb_product").html( template("tpl2",info) );
            }
        })
    }

   
})