window.onload=function(){
   searchEffect();
   timeBack();
}

function searchEffect(){
    var banner=document.querySelector(".jd_banner");
    var bannerHeight=banner.offsetHeight;
    var search=document.querySelector(".jd_search");
    window.onscroll=function(){
        // var offsetTop=document.body.scrollTop;
        //页面指定了DTD，即指定了DOCTYPE时，使用document.documentElement.scrollTop。
        // 页面没有DTD，即没指定DOCTYPE时，使用document.body.scrollTop。
        var offsetTop=document.documentElement.scrollTop;
        
        var opacity=0;
        if(offsetTop < bannerHeight){
            opacity=offsetTop/bannerHeight;
            search.style.backgroundColor="rgba(233,25,34,"+opacity+")";
          
        }else{

        }
       
    }
}

function timeBack(){
    var spans=document.querySelector(".jd_sk_time").querySelectorAll("span");
    var totalTime=3400;

    var timeId=setInterval(function(){
        totalTime--;
        if(totalTime<0){
            clearInterval(timerId);
            return;
        }
        var hour=Math.floor(totalTime/3600);
        var minute=Math.floor(totalTime%3600/60);
        var second=Math.floor(totalTime%60);
        spans[0].innerHTML=Math.floor(hour/10);
        spans[1].innerHTML=Math.floor(hour%10);
        spans[3].innerHTML=Math.floor(minute/10);
        spans[4].innerHTML=Math.floor(minute%10);
        spans[6].innerHTML=Math.floor(second/10);
        spans[7].innerHTML=Math.floor(second%10);
    },1000);
}