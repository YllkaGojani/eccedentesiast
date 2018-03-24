$(document).ready(function(){
	$(".home blockquote.blockquote>p").each(function(i){
		len=$(this).text().length;
		if(len>400)
		{
			$(this).text($(this).text().substr(0,400)+'...');
		}
	});

	$(".posts blockquote.blockquote>p").each(function(i){
		len=$(this).text().length;
		if($(window).width() > 1024)
		{
			if(len>200)
			{$(this).text($(this).text().substr(0,200)+'...');}
		}
		else{
			if(len>100)
			{$(this).text($(this).text().substr(0,100)+'...');}
		}
	});
})