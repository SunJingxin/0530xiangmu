function  createXHR(){
   	if( typeof XMLHttpRequest!="undefined"){
   	 return new XMLHttpRequest();  	
   	}   
   	//IE
   else if(typeof arguments.callee.activeXString!="string"){
   		//MSXML2是微软
   		var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0",
   		     "MSXML2.XMLHttp"],i,len;
   		for(i=0;len=versions.length;i++){
   			
   			try{
   				new ActiveXObject(versions[i]);
   			    arguments.callee.activeXString=versions[i]
   			    break;
   			}catch(ex){
   				
   			}	
   		}	
   		return new ActiveXObject(arguments.callee.activeXString)
   	}else {
   		throw new Error("没有异步对象");
   	}
   }