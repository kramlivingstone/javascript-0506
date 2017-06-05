// #1

$('#show').click( function(){
	$('#text1').show()
});

$('#hide').click( function(){
	$('#text1').hide()
});



// #2

$('#change').click( function(){
	$('#text2').html('Hello World!')
});

// #3

$('#text3').hover( function(){
	$('#text3').css('color','blue')
});


// #4

$('#change-height').click( function(){
	$('#img').css('width','150px')
});

$('#change-image').click( function(){
	$('#img').attr('src','img/legotwo.png')
});

// #5

$('#add').click( function(){
	// var x = parseInt($('#num1').val());
	// var y = parseInt($('#num2').val());
	
	// var z = x+y;

	// $('#sum').html(z);

	$('#sum').html(
		parseInt($('#num1').val()) 
		+ 
		parseInt($('#num2').val())
		);
});



// #6

// $('.toggle').on("click", function(){
// 	$('#img').toggle("slow");

// 	$('.toggle').text("Slide Down");
// });

$(document).ready( function(){
	$('.slide-down').hide();
	$('#fade-in').hide();
});

$('.slide-up').click( function(){
	$('#img').slideUp("slow");
	$(this).hide();
	$('.slide-down').show();
})

$('.slide-down').click( function(){
	$('#img').slideDown("slow");
	$('.slide-up').show();
	$(this).hide();
})

$('.fade').click( function(){
	$(this).fadeOut("slow");
	$('#fade-in').show();
});

$('#fade-in').click( function(){
	$('p').fadeIn("slow");
	$(this).hide();
});



document.getElementsByClassName('fade').innerHTML = 'Hello';