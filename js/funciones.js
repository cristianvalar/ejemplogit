$(window).on('ready', function(){
	$('#saludo').on('click', function(){
		var nombre = $('input').val();
		alert('hola k ase? '+nombre);
	});
});