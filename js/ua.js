/**
 * Created by zhaowz on 2018/7/13.
 */

/**
 * 判断浏览器所在机器操作系统
 */
function gotoDownload(){
  var u = navigator.userAgent,version = '';
  if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    //ios
    window.location.href="https://itunes.apple.com/cn/app/guang-hui-yun-you/id1071019636?l=zh&ls=8";
  } else if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1  ) {
    //android
    window.location.href="https://app.brightoilonline.com/c2b/C2B_Phone.apk";
  }
}
