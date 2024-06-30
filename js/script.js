/**
 * 加载头部标题栏
 */
$(document).ready(function(){
    $("#page-header").load("./subHtml/header.html",function (){
        // 核查哪些链接需要密码
        $(".needPasswordLink").click(function(){
            var password = prompt("我的小可爱是谁呀?");
            if(password == "何姝"){
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