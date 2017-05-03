/**
 *@Name:    bOilPlugIn.js插件说明
 *@Object:  mobile
 *@Author:  XiaoYu/Guo CJ
 *@E-mail:  592429285@qq.com
 *@Time:    2017.01.12
*/

/*
概述：

1、从名称开始，bOilPlugIn采用光汇云油brightOil的缩写bOil为前缀结合插件plugin，以骆锋式的形式书写。这也是本插件所有变量名、函数名（方法名）以及属性名的书写规则。

2、本插件主要涵括有
①终端设备（安卓/苹果），浏览器，应用平台（微信/QQ/手机WEB）等的判断；
②表单数据的前端校验；
③倒计时调用；
④半透明浮动层弹窗提示；
⑤带“关闭，确定，取消”按钮的普通浮动弹层；
⑥底部固定按钮；
⑦苹果设备的活动声明；*/

//使用：

//本插件针对光汇活动项目而设计，必须高度结合活动开发模板使用，必须搭配global-mobile.css样式文件一起使用,且依赖于jQuery。

//起步，分别在页头引入global-mobile.css，如
//<link rel="stylesheet" href="css/global-mobile.css" />

//以及在页尾引入jQuery和bOilPlugIn.js文件
//<script src="js/jquery-1.11.3.min.js"></script>
//<script src="js/bOilPlugIn/bOilPlugIn.js"></script>

//引入文件后，创建构造函数bOilPlugIn的对象实例
var bOilApp = new bOilPlugIn();

//对象实例创建完成后，便可以直接调用对象实例里面的原型方法,如：
//1
//inputIdArray属性，预定义的表单校验对象的id值，需要校验的表单对象的id只能从[inputIdArray]数组里产生，否则无效
inputIdArray: [
    //检验手机号码的
    'userPhone', 

    //用户名
    'userName', 

    //真实姓名
    'realName', 

    //简单密码（6-16位数字和字母的组合）
    'passWordLoose', 

    //重复密码
    'rePassWordLoose', 

    //严格密码（6-16位字符，包含数字、大小写字母、符号中的2种）
    'passWord', 

    //重复密码
    'rePassWord', 

    //图形验证码
    'imgCode', 

    //短信验证码
    'phoneCode', 

    //交易密码
    'dealPassword',

    //中文汉字
    'chinese',

    //简单金额
    'amountLoose',

    //严格金额
    'amount',

    //简单身份证
    'chinaIdLoose',

    //严格身份证
    'chinaId',

    //银行卡号
    'bankCard',

    //油卡号码
    'oilCard',

    //重复油卡号码
    'reOilCard'
]


//2
//getPhoneCord方法，用于表单获取验证码时候的校验
var res = bOilApp.getPhoneCord(_this, 'userPhone', 'passWordLoose', 'imgCode');
/*
参数说明：
_this, 该参数为触发该事件的对象自身，一般是表单“获取验证码”按钮，必选项
从第二个参数开始依次为获取验证码时所需要校验的表单对象的id，如："#userPhone"或"userPhone"（"#"可省略），
所有的id值必须与[inputIdArray]里的值匹配，否则报错
*/

//3
//codeTime()方法，用于执行验证码倒计时
if (res) {
    thisId = _this.attr('id');
    bOilApp.codeTime(thisId);
}
/*
参数说明：
getPhoneCord()方法校验通过，返回true,此时执行codeTime()方法，
thisId, 该参数是需要显示倒计时数字的对象，一般是“获取验证码”按钮对象，必选项
*/


//4
//submintForm方法，用于提交表单数据时对表单进行校验
res = bOilApp.submintForm(_this, '#userPhone', '#passWordLoose', '#imgCode', '#phoneCode');
/*
参数说明：
_this, 该参数为触发该事件的对象自身，一般是表单“提交”按钮,必选项
从第二个参数开始依次为获取验证码时所需要校验的表单对象的id，如："#userPhone"或"userPhone"（"#"可省略），
所有的id值必须与[inputIdArray]里的值匹配，否则报错
*/


//5
//alertMsg()方法，以弹层的形式显示提示信息
alertMsg: function (text, thisElement, icon, isClear) {}
/*
参数说明：
text, 需要显示的提示内容，必选项
thisElement, 触发该事件的对象自身，一般是表单的“获取验证码”按钮或“提交”按钮，可选
icon, 需要显示的对应的图标，可选，可选值为[success, fail, warning, loading]
isClear, 弹层提示框是否可手动关闭或2秒后自动关闭，可选，可选值[noclear, noClear]
*/


//6
//tips()方法，普通弹层，数据量大小都适用，右上角带关闭按钮，底部可带按钮和回调函数
tips({
    title: '提示标题',          //title, 提示框标题，必选项
    closeId: 'tipsCloseBtn',    //closeId, 提示框右上角关闭按钮的id，自定义
                                //content, 提示框内容，必选项
    content: '恭喜您成功调用碳层组件!\\这里是一个多行列表的弹层\\用"双反斜杠"可以实现分行，不信你可以试试。',
    btn: {                      //btn, 提示框底部操作按钮，可选
        btnSure: {              //btnSure, 确定按钮，相对于btn对象的必选项，即：如果btn存在，则btnSure必须存在
            text: '确定按钮',   //text, 确定按钮标示文本，自定义，相对于btn对象的必选项，即：如果btn存在，则text必须存在
                                //href, 固定值为'javascript:void(0);'，不可更改，相对于btn对象的必选项，即：如果btn存在，则href必须存在
            href: 'javascript:void(0);',
            fun: function () {  //fun, 确定按钮的回调函数，可选项
                return callback;//回调函数执行动作,可选项，适用带有表单操作的提示框
            },
            display: false,     //display, 可选项Boolean（省略时，默认值为false），（true，回调函数执行完不关闭弹层提示框,false执行回调函数后关闭弹层)
            refresh: false      //refresh, 可选项Boolean（省略时，默认值为false），（true，点击确定按钮后，刷新页面）
        },
        btnCancle: {            //btnCancle, 取消按钮，相对于btn对象的必选项，即：如果btn存在，则btnCancle必须存在
            text: '取消按钮',   //text, 取消按钮标示文本，自定义，相对于btn对象的必选项，即：如果btn存在，则text必须存在
                                //href, 固定值为'javascript:void(0);'，不可更改，相对于btn对象的必选项，即：如果btn存在，则href必须存在
            href: 'javascript:void(0);',
            fun: function () {  //fun, 确定按钮的回调函数，可选项
                alert(321);     //回调函数执行动作
            },
            display: false      //display, 可选项Boolean（省略时，默认值为false），（true，回调函数执行完不关闭弹层提示框,false执行回调函数后关闭弹层)
        }
    },
    btnNums: 2,                 //btnNums, 与btn对象互相关联，共同存在或省略，可选参数（1代表一个按钮，2代表2个按钮）
    alone: false,               //alone, 可选项Boolean（省略时，默认值为false），适用简短内容型的提示框，特点是内容上下内边距参数为3rem，可选
    fixedHeight: false          //fixedHeight, 可选项Boolean（省略时，默认值为false，当内容高度大于视口高度减掉100px的高度值后，自动变成固定高度），（true，提示框高度统一固定，高度值等于视口高度减去100px）
});
//
//
//
//小结：getPhoneCord()方法与submintForm()的用法和传参都很相似










