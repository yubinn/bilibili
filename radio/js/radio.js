//获得slider插件对象
var gallery = mui('.mui-slider');
gallery.slider({
  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
});

document.querySelector('.mui-slider').addEventListener('slide', function(event) {
  //注意slideNumber是从0开始的；
  var disc =document.getElementById("disc");
  var lis =disc.getElementsByTagName("li");
  function empty(){
    for(var i=0;i<4;i++){
      lis[i].style.backgroundColor="";
      lis[0].className="";
    }
  }
  if(event.detail.slideNumber==0){
    empty();
    lis[0].style.backgroundColor="#fb7299";
  }
  else if(event.detail.slideNumber==1){
   empty();
    lis[1].style.backgroundColor="#fb7299";
  }
  else if(event.detail.slideNumber==2){
    empty();
    lis[2].style.backgroundColor="#fb7299";
  }
  else if(event.detail.slideNumber==3){
   empty();
    lis[3].style.backgroundColor="#fb7299";
  }
  // document.getElementById("disc").innerText = "你正在看第"+(event.detail.slideNumber+1)+"张图片";
});