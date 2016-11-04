var visitedCity = Array();

$("li").click(function(){
    $('li').each(function(){
    	if($(this).hasClass("selected_city")){
		$(this).removeClass('selected_city');
        $(this).addClass("visited_city");     
    	}
    });
    $(this).addClass('selected_city');
	var cityId = $(this).attr("img-id");
	var city = $(this).text();
	visitedCity.push(city);
	var uniqueVisitedCity = $.unique(visitedCity);
	$(".right_pane").empty().append("<img src=\"images/"+cityId+".jpg\">");
	$(".visited").empty();
	for(i=0;i<uniqueVisitedCity.length;i++){
		$(".visited").append("<h3>"+uniqueVisitedCity[i]+"</h3>");
	}
})

$(".visited").css("color","blue");


$('.cityName').keyup(function(e){
	e.preventDefault();
	var searchvalue  = $(".cityName").val();
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: "city.json",
		success: function (data) {
			data = data.city;
			$.each(data, function(i,val) {
				if( val.name == searchvalue){
								var cityId = val.id;
								var areasObj =JSON.stringify(val.area) ;
								console.log(areasObj);

					$(".right_pane").empty().append("<img src=\"images/"+cityId+".jpg\">");
							for(var i = 0 ;i<=areasObj.length;i++) {
								$(".area").append("<button>" + areasObj[i]+ "</button>");
							}
						}
				});

		}
	});

})

