/**
 * 加载头部标题栏
 */
$(document).ready(function(){
    $("#page-header").load("./subHtml/header.html",function (){
        // 核查哪些链接需要密码
        $(".needPasswordLink").click(function(){
            var password = prompt("你知道她么?");
            if(password == "chenqian"){
                alert("密码校验成功");
                var url = $(this).attr("realLink");
                $(location).attr('href', url);
            }else{
                alert("密码校验失败");
            }            
        });
    }); 
    $("#page-footer").load("./subHtml/footer.html");
    
});