function mySearch(){

	$.getJSON("http://www.kuaidi100.com/query?type=yuantong&postid=700074134800&id=1&valicode=&temp=0.23018059972673655?callback=?",function(data){
		   $("#message").empty();
		   $("#message").append("<tr><th>时间</th><th>地点和跟踪进度</th></tr>")
           $.each(data,function(index,message){
                $("#message").append("<tr><td>"+message["time"]+"</td><td>"+message["message"]+"</td></tr>");
           });  
	});
}