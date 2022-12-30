$( document ).ready(function(e) {
    console.log( "ready!" );
	$( document ).click(function() {
		$( "#target" ).toggle( "explode" );
	});
});