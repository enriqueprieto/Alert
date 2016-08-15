$(document).ready(function(){
	var screen_w = $(window).width();
	var screen_h = $(window).height();
	$('#header').css({'height' : screen_h});
	var appAlert = new Alert();

	if($(window).scrollTop() == 0){
		setTimeout(function(){
			simpleAlert({
				'text' : 'Simple Alert',
				'positionX' : 'center'
			});
		}, 250);
		setTimeout(function(){
			simpleAlert({
				'text' : 'Versão 1.0.0 disponível <a href="#"><i class="material-icons">file_download</i></a>',
				'positionX' : 'center'
			});
		}, 850);
		setTimeout(function(){
			simpleAlert({
				'text' : 'Role a págine e saiba como inserir o Simple Alert em seu projeto',
				'positionX' : 'center'
			});
		}, 5000);
		$(window).on('scroll', function(){
			if(appAlert.exist()){
				appAlert.close();
			}
		});
	}

	$(".alert-btn").on('click', function(){
		var theme = $(this).attr("data-theme");
		simpleAlert({
			'text' : 'Exemplo Simple Alert',
			'theme': theme
		});
	});
});