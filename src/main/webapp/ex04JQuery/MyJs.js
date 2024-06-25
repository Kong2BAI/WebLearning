$(document).ready(function () {
    //默认隐藏
    let registerForm = $("#register :input").prop("disabled", true);
    //设置两个参数方便控制提交键的隐藏与显示
    let userNameValid =false;
    let coursesValid = false
    /* 同意协议复选框 */
    $("input#legal").click(function () {
        let dis = !$(this).prop("checked");
        // 同意，表单内为可用，但提交按钮由独立条件判断
        registerForm.not($("button:submit")).prop("disabled", dis);//not用于排除元素
    });
    /* 去空格后，判断输入长度 */
    $("input[name=username]").change(function () {
        if ($(this).val().trim().length < 6) {
            alert("用户名长度必须大于等于6");
            $(this).val("")
            userNameValid =false
        } else {
            userNameValid = true
        }
    });

    /* 动态添加地址 */
    $("#button_address").click(function () {
        let input = $("input[name=address]");
        let item = $(`<li>${input.val()}</li>`);
        //置空输入框
        input.val("");
        //显示条例
        item.css("display", "none");
        $("#ul_address").append(item);
        item.fadeIn(1000);
    });

    /* checkbox checked数量状态控制 */
    const amount = 2;
    // name=courses的复选框组
    const checkboxes = $("input[name=courses]");
    checkboxes.click(function () {
        // 过滤，复选框组中所有，选中项
        let checked = checkboxes.filter(":checked");
        // 过滤，复选框组中所有，未选择项
        let unChecked = checkboxes.not(":checked");
        //随时控制该参数，若与另一条件都满足则立刻显示提交键
        coursesValid = checked.length >=amount
        // 绑定未选中项状态
        unChecked.prop("disabled",coursesValid);
    });

    /* 同时监听2个状态的改变，但无需重写以上校验代码，仅需判断之前校验产生的状态标识即可 */
    $("input[name=username], input[name=courses]").change(function () {
        let dis = userNameValid && coursesValid;
        // 当2个状态均符合规范时，提交按钮可用
        $("button:submit").prop("disabled", !dis);
    });
    //实现再次点击radio时取消radio的选中状态。
    let radios = $("input[name=purp][type=radio]");
    radios.click(function (e) {
        //判断当前点击的单选框状态
        if ($(this).data("checked")) {
            $(this).prop("checked", false);
            $(this).data("checked", false);
        } else {
            radios.not($(this)).data("checked", false);
            $(this).prop("checked", true);
            $(this).data("checked", true);
        }

    });
})