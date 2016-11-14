var visitedCity = Array();
// var cityImage = Array();

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
	cityImage.push(cityId);
	var uniqueVisitedCity = $.unique(visitedCity);
	// var uniqueImage = $.unique(cityImage);
	$(".right_pane").empty().append("<img src=\"images/"+cityId+".jpg\">");
	$(".visited").empty();
	for(i=0;i<uniqueVisitedCity.length;i++){

		$(".visited").append("<h3>"+uniqueVisitedCity[i]+"</h3>");
	}

	// for(i=0;i<uniqueImage.length;i++){
	// 		console.log(uniqueImage,'unique');
	// 		$(".visitImage").append("<img src=\"images/"+uniqueImage[i]+".jpg\">");
	// 	}

})

setInterval(function () {
	$(".visitImage").next();
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

function testfun(man) {
	console.log(this + "says hello" + " " + man);

}
window.onload=testfun("man");

$('#myForm').submit(function (e) {
	e.preventDefault();
	var value = $('.comment').val();
	$('.comments').empty().append("<ul><li>"+value+"</li></li></ul>");
})

$(document).ready(function () {
	var imageArray = Array();

	for(var i=1;i<6;i++){
		imageArray.push("images/"+i+".jpg");
	}
	console.log(imageArray);
	var slide_items = setInterval(function () {
		slideImage()
	},3000);

	function slideImage() {


	}
})







