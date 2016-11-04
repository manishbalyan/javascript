
$(document).ready(function(e){
    $('#calendar').fullCalendar({
    })

    $("#calendar").hide();

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: "doctor.json",
        success: function (data) {
            data = data.doctor;
            console.log(JSON.stringify(data));
            $.each(data, function(i,val) {
                var dname = val.name;
                console.log(dname);
                var newParagraph = document.createElement('p');
                newParagraph.textContent = dname;
                document.getElementById("doctor_list").appendChild(newParagraph);

            });

        }
    });

})

$(document).on('click','#doctor_list p',function(){
    $("#calendar").show();
});