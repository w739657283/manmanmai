$(function(){

    var page= 1;
    var pageSize = 10;
    //获取本机ip
    var ip = "192.168.13.29";
    render();
    function render(){
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