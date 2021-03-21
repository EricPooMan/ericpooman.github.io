function cset(name,value,expiredays){
    var date = new Date();
    date.setTime(date.getTime()+(expiredays*24*60*60*1000));
    var expires = "expires="+date.toUTCString();
    document.cookie=name+"="+value+";"+expiredays+";path=/";
}
function cget(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' '){
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
    }
    return "";
}
function onLoad(){
    var firstvisit = cget("firstvisit")
    if (firstvisit == "" || firstvisit == null || firstvisit == 0){
        cmessage()
        cset("firstuser",1,999999)
    }
}
function cmessage(){
    var popup = document.getElementById("cookiemsg");
    popup.classList.toggle("load");
}
function cagree(){
    var popup = document.getElementById("cookiemsg");
    popup.classList.toggle("load","idle");
    cset("cookieagree",true,999999)
}
onLoad()
//from https://www.w3schools.com/js/js_cookies.asp thanks a lot