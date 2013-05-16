$(document).on('ready', function(){
	$('#saludo').on('click', function(){
		var nombre = $('input').val();
		$('#parrafo').append('<h2>Hola ' + nombre + '</h2>');
	});
});