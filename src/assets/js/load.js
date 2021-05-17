function setCookieValue(vars){
  //alert("ww");
  document.cookie="code="+vars;
}
function setCodeValue(type){
  if(type == 's'){
    return;
  }
  if(type){
      zh_tran(type);
      return;
  }
  var arrCookie=document.cookie.split("; ");
  for(var i=0;i<arrCookie.length;i++){ 
    var arr=arrCookie[i].split("="); 
    if(arr[0]=="code"){
      if(arr[1]=="t"){
        zh_tran(arr[1]);
      }
    }
  }
}

if(top.location!==self.location){ 
            $('img').each(function(){
				var imgs = $(this).attr("data-original");
				var img_src = $(this).attr("src");
                if(imgs && img_src==undefined){
					$(this).attr("src",imgs);
				}
            });
}