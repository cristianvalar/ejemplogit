$(document).on('ready', function(){
	$('#saludo').on('click', function(){
		var nombre = $('input').val();
		$('#parrafo').append('<h2>Ola k ase? ' + nombre + '</h2>');
	});
});