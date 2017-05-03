/*
 *@Name:   common.js
 *@Object: MOBILE
 *@Author: XiaoYu
 *@E-mail: 592429285@qq.com;
 *@Time:   2015.05.18
 */

var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    App = {
    init: function () {
        console.log('hello world!');
        $('#header').load('common/header.html', function () {
            App.navbarToggle();
        });
        $('#bxslider').load('common/banner.html', function () {
            $('#bxslider img').width(viewportWidth);
        });
        $('#footer').load('common/footer.html');


        var srcUrl = $('#secImg img').attr('src');
        $('#secImg').css('background', 'url('+srcUrl+')');

        
        
        

        
        
    },

    //顶部导航栏在移动客户端下的显示切换
    navbarToggle: function () {
        $('#header').on('click', '.navbar-toggle', function () {
            var _this = $(this).parents('.navbar-header').siblings('.navbar-collapse');
            if (!_this.hasClass('in')) {
                _this.addClass('in');
            } else {
                _this.removeClass('in');
            }
        });
    }




};

$(function() {alert();
    App.init();
});