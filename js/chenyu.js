    $(document).ready(function () {
      document.oncontextmenu = function () {
        return false;
      }
      //document.onselectstart = function () {
       // return false;
     // }
      //document.oncopy = function () {
        //return false;
     // }
      document.onkeydown = function () {
        //f12
        if (window.event && window.event.keyCode == 123) {
          event.keyCode = 0;
          event.returnValue = false;

      //询问框
      layer.confirm('<p>最怕问初衷，大梦成空。</p><p>眉间鬓上老英雄，剑甲鞮鍪封厚土，说甚擒龙。 </p><p>壮志付西风，逝去无踪。</p><p>少年早作一闲翁，诗酒琴棋终日里，岁月匆匆。</p>', {
        btn: ['对不起','寒山别哭'] //按钮
      }, function(){
        layer.msg('<p>我怀念的不是哪个人，而是我那回不去的曾经，</p><p>突然很想跟自己说声对不起，对不起再也找不回原来的自己了。</p>', {icon: 1});
      }, function(){
        layer.msg('我说寒山别哭，你说嘴巴嘟嘟……', {
          time: 20000, //20s后自动关闭
          btn: ['别哭', '嘟嘟']
        });
      });  

          return false;
        }
        //ctrl+u
        if (event.ctrlKey && window.event.keyCode == 85) {
          return false;
        }
        //ctrl+shift+i
        if ((event.ctrlKey) && (event.shiftKey) && (event.keyCode == 73)) {
          return false;
        }
        // Ctrl+S
        else if ((event.ctrlKey) && (event.keyCode == 83)) {
          return false;
        }
      };

    });
    
    
    Function.prototype.getMultiLine = function () {
            var lines = new String(this);
            lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
            return lines;
        }
 
        var string = function () {
/*

          _____                _____                    _____          
         /\    \              |\    \                  /\    \         
        /::\    \             |:\____\                /::\____\        
       /::::\    \            |::|   |               /:::/    /        
      /::::::\    \           |::|   |              /:::/    /         
     /:::/\:::\    \          |::|   |             /:::/    /          
    /:::/  \:::\    \         |::|   |            /:::/    /           
   /:::/    \:::\    \        |::|   |           /:::/    /            
  /:::/    / \:::\    \       |::|___|______    /:::/    /      _____  
 /:::/    /   \:::\    \      /::::::::\    \  /:::/____/      /\    \ 
/:::/____/     \:::\____\    /::::::::::\____\|:::|    /      /::\____\
\:::\    \      \::/    /   /:::/~~~~/~~      |:::|____\     /:::/    /
 \:::\    \      \/____/   /:::/    /          \:::\    \   /:::/    / 
  \:::\    \              /:::/    /            \:::\    \ /:::/    /  
   \:::\    \            /:::/    /              \:::\    /:::/    /   
    \:::\    \           \::/    /                \:::\__/:::/    /    
     \:::\    \           \/____/                  \::::::::/    /     
      \:::\    \                                    \::::::/    /      
       \:::\____\                                    \::::/    /       
        \::/    /                                     \::/____/        
         \/____/                                       ~~              
                                                                       

*/
        }
      window.console.log(string.getMultiLine());
      window.console.log("他们都说时光太瘦，指缝太宽");
	window.console.log("所以很多东西");
	window.console.log("包括记忆，也不会积存太久");
	window.console.log("于是，倾其所能");
	window.console.log("守住一座城，守住一个人");
	window.console.log("守住一颗心，守住一段情");
	window.console.log("一生相随，看尽人间细水长流");
	window.console.log("不思量，自难忘");
      window.console.log("%c对自己好点，因为一生不长；对身边的人好点，因为来生不一定遇见", "font-size:18px;color:red;");
      window.console.log("%c尘遇 | ChenYu.Me", "color:#fff; background: linear-gradient(270deg, #986fee, #8695e6, #68b7dd, #18d7d3); padding: 8px 15px; border-radius: 0 15px 0 15px")
      window.console.log("%chttps://chenyu.me"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");

  /*  动态网页标题*/
 var OriginTitile = document.title,
  titleTime;
 document.addEventListener("visibilitychange",
 function() {
  if (document.hidden) {
    $('[rel="shortcut icon"]').attr("href", "https://cdn.jsdelivr.net/gh/cy-i/chenyu@1.0.0/y.ico");
    document.title = "青青子衿";
    clearTimeout(titleTime)
} else {
    $('[rel="shortcut icon"]').attr("href", "https://cdn.jsdelivr.net/gh/cy-i/chenyu@1.0.0/favicon.ico");
    document.title = "悠悠我心 - " + OriginTitile;
    titleTime = setTimeout(function() {
        document.title = OriginTitile
    },
    2000)
}
});

  /*  哀悼日网站变灰*/
if(aidaori()){
    $("html").css({
        "filter":"gray !important",
        "filter":"progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",
        "filter":"grayscale(100%)",
        "-webkit-filter":"grayscale(100%)",
        "-moz-filter":"grayscale(100%)",
        "-ms-filter":"grayscale(100%)",
        "-o-filter":"grayscale(100%)" 
    });
}

function aidaori(){
    var aidaoriarr=new Array("0403","0404","0405","0406","0414","0512","0807","0909","1213");
    //2020年4月4日 新冠肺炎哀悼日，清明节
    //2010年4月14日，青海玉树地震
    //2008年5月12日，四川汶川地震
    //2010年8月7日，甘肃舟曲特大泥石流
    //1976年9月9日，毛泽东逝世
    //1937年12月13日，南京大屠杀
    var mydate = new Date();
    var str = "";// + mydate.getFullYear();
    var mm = mydate.getMonth()+1;
    if(mydate.getMonth()>9){
      str += mm;
    }else{
      str += "0" + mm;
    }
    if(mydate.getDate()>9){
      str += mydate.getDate();
    }else{
      str += "0" + mydate.getDate();
    }
    if(aidaoriarr.indexOf(str)>-1){
        return 1;
    }else{
        return 0;
    }
}