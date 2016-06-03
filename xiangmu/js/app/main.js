require.config({
	baseUrl:"js/lib",
	paths:{
		"myJs":"myJs",	
		"comms":"comms",
		"jquery":"jquery"
	}
})
//很遗憾的是本地JSON 跨域问题没有解决
require(["myJs","comms","jquery"],function(a,b,$){
	console.log("12")
   	$.ajax("http://localhost:2403/nva2",{
	  		success:function(data){
	  			 var ul=$("<ul></ul>")
	  		   for(var prop in data[0]){
                    // console.log(prop)
                  if(prop!="id"){
                  var a= $("<a></a>").text(data[0][prop]);
                      a.attr("href","#");
                  var li=$("<li></li>").html(a);
                    ul.append(li);
                  }
	  		   }

	  		  $(".nva_right").append(ul);

	  		}
	  	 })
   	 //logo
    $.ajax("http://localhost:2403/logo",{
	  		success:function(data){
	  			 var ul=$("<ul></ul>")
	  		   for(var prop in data[0]){
                   if(prop!="id"){    
                   var a= $("<a></a>").text(data[0][prop]);
                       a.attr("href","#")
                   var li=$("<li></li>").html(a);
                     ul.append(li);
                  }
	  		   }
	  		  $(".logo_right").append(ul);

	  		}
	  	 })
     // abnner
    $("#banner_float1").mouseenter(function(){
       $("div").finish();
   	 $("#banner_float1_div").css({
   	 	display:"block",
   	 	width:"700px"
   	 })
    }).mouseout(function(){
     $("#banner_float1_div").animate({
     	width:"0px"
     },500,function(){
       $("#banner_float1_div").css("display","none")	
     });     
    });
    
     $(".banner_float2").mouseenter(function(){
       $("div").finish();
   	 $(".banner_float2_div").css({
   	 	display:"block",
   	 	width:"700px"
   	 })
    }).mouseout(function(){
     $(".banner_float2_div").animate({
     	width:"0px"
     },500,function(){
       $(".banner_float2_div").css("display","none")	
     });     
    });
     $(".banner_float3").mouseenter(function(){
       $("div").finish();
   	 $(".banner_float3_div").css({
   	 	display:"block",
   	 	width:"700px"
   	  })
     }).mouseout(function(){
     $(".banner_float3_div").animate({
     	width:"0px"
     },500,function(){
       $(".banner_float3_div").css("display","none")
      });     
     });
     $(".banner_float4").mouseenter(function(){
      $("div").finish();
   	 $(".banner_float4_div").css({
   	 	display:"block",
   	 	width:"700px"
   	  })
    }).mouseout(function(){
     $(".banner_float4_div").animate({
     	width:"0px"
     },500,function(){
       $(".banner_float4_div").css("display","none")	
      });     
    });
 //-------------  轮播 ---------------- 
  //轮播 1
   $(".baner_lunbo1").click(function(){ 
   	 $("div").finish();
     $(".banner_noFloat").animate({
      	left:"0px",     	
      },1000)
  	});
   //2
   $(".baner_lunbo2").click(function(){ 
    $("div").finish();	
      $(".banner_noFloat").animate({
      	left:"-1200px",     	
      },1000)
  	});
  //3
  $(".baner_lunbo3").click(function(){ 	
   	  $("div").finish();
      $(".banner_noFloat").animate({
      	left:"-2400px",     	
      },1000)
  	});
  //4
  $(".baner_lunbo4").click(function(){ 
  	  $("div").finish();
      $(".banner_noFloat").animate({
      	left:"-3600px",     	
      },1000)
  	});
   $(".baner_lunbo5").click(function(){ 
  	  $("div").finish();
      $(".banner_noFloat").animate({
      	left:"-4800px",     	
      },1000)
  	});
 //  取数据  JSON

    $.ajax({
         url:"JSON/1.json",
         type:"get",
         // data["shop_data"] 是个对象 本身 数组
         //data["shop_data"][prop] 单个对象 本身对象
         //
         success:function (data) {
         	for(var prop=0;prop<5;prop++){
         		//单个数据对象;
         		 var dataN=data["shop_data"]
         		 // img        左
         	     var img=$("<img class='main_left_bottom_div1_img'/>").attr("src",dataN[prop]["shop_ico"]);
         	     var div1=$("<div class='main_left_bottom_div1'></div>");
         	     var div=$("<div class='main_left_bottom_div'></div>");              
                     div1.append(img);
                     div.append(div1);                             
                 // 店铺名称   中                        
                 var a=$("<a class='main_left_bottom_div2_div1_ap_a'></a>").text(dataN[prop]["shop_name"]);
                     a.attr("href",dataN[prop]["shop_addr"]) 
               
                 // 店铺等级
                 var span=$("<span class='main_left_bottom_div2_div1_ap_apan'></span>").text("店铺等级:"); 
                 var div2_div1_ap=$("<div class='main_left_bottom_div2_div1_ap'></div>");
         	     var div2_div1=$("<div class='main_left_bottom_div2_div1'></div>");
         	     div2_div1.append(div2_div1_ap);
         	       // 店铺等级图标
         	     var level=parseInt(dataN[prop]["level"]/6);
         	     for(var i=0;i<level;i++){
         	    	 var div2_div1_tu=$("<div class='main_left_bottom_div2_div1_tu'></div>");
         	    	     div2_div1.append(div2_div1_tu);        	    	    	    	
         	     } 
                 // 主营               
         	     var div2_div2=$("<div class='main_left_bottom_div2_div2'></div>").
         	                                  text(dataN[prop]["main"]);
                 // 地址
                 var div2_div3=$("<div class='main_left_bottom_div2_div3'></div>").
         	                                  text(dataN[prop]["addr"]);
         	     var div2=$("<div class='main_left_bottom_div2'></div>");
         	         div.append(div2);
         	         div2.append(div2_div1);
         	         div2.append(div2_div2);
         	         div2.append(div2_div3);         	         
         	         div2_div1_ap.append(a);
         	         div2_div1_ap.append(span);    
         	     $(".main_left_bottom").append(div);
         	}
        }
     });
     $(".main_left_end div").click(function(e){ 
        $(".main_left_bottom").html(""); 
     	var a=$(this).index();
        console.log(a)
    
      var a_count=a*5;
     $.ajax({
         url:"JSON/1.json",
         type:"get",
         // data["shop_data"] 是个对象 本身 数组
         //data["shop_data"][prop] 单个对象 本身对象
         //
         success:function (data) {
         	for(var prop=a_count;prop<5+a_count;prop++){
         		//单个数据对象;
         		 var dataN=data["shop_data"]
         		 // img        左
         	     var img=$("<img class='main_left_bottom_div1_img'/>").attr("src",dataN[prop]["shop_ico"]);
         	     var div1=$("<div class='main_left_bottom_div1'></div>");
         	     var div=$("<div class='main_left_bottom_div'></div>");              
                     div1.append(img);
                     div.append(div1);                             
                 // 店铺名称   中                        
                 var a=$("<a class='main_left_bottom_div2_div1_ap_a'></a>").text(dataN[prop]["shop_name"]);
                     a.attr("href",dataN[prop]["shop_addr"]) 
               
                 // 店铺等级
                 var span=$("<span class='main_left_bottom_div2_div1_ap_apan'></span>").text("店铺等级:"); 
                 var div2_div1_ap=$("<div class='main_left_bottom_div2_div1_ap'></div>");
         	     var div2_div1=$("<div class='main_left_bottom_div2_div1'></div>");
         	     div2_div1.append(div2_div1_ap);
         	       // 店铺等级图标
         	     var level=parseInt(dataN[prop]["level"]/6);
         	     for(var i=0;i<level;i++){
         	    	 var div2_div1_tu=$("<div class='main_left_bottom_div2_div1_tu'></div>");
         	    	     div2_div1.append(div2_div1_tu);        	    	    	    	
         	     } 
                 // 主营               
         	     var div2_div2=$("<div class='main_left_bottom_div2_div2'></div>").
         	                                  text(dataN[prop]["main"]);
                 // 地址
                 var div2_div3=$("<div class='main_left_bottom_div2_div3'></div>").
         	                                  text(dataN[prop]["addr"]);
         	     var div2=$("<div class='main_left_bottom_div2'></div>");
         	         div.append(div2);
         	         div2.append(div2_div1);
         	         div2.append(div2_div2);
         	         div2.append(div2_div3);         	         
         	         div2_div1_ap.append(a);
         	         div2_div1_ap.append(span);    
         	     $(".main_left_bottom").append(div);
         	}
        }
     });
   });
})