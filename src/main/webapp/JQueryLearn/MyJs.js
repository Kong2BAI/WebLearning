function c(){
    alert("start")
    $("form#f").submit()
}
$(document).ready(function (){
    $("div.di p:eq(1) span:eq(0)").click(function (){
        alert( $(this).html())
    })
    /*鼠标的移入与移出用到的方法*/
    $("div.di p:eq(1) span:eq(1)").hover(
        function (){
            $(this).data("Init",$(this).html())
            $(this).html("123")
        },
        function (){
            $(this).html($(this).data("Init"))
        }
    )
    /*
    提交表单时对信息可以处理，利用val取到用户输入信息
    */
    $("form#f").submit(function (e){
        if ($("#name").val() === "baidu"){
            alert("输入正确")
            return true
        }
        else{
            alert("wrong")
            return false
        }

    })
    $("#t").click(function (){
        $("#f").slideToggle(1000);
    })


})