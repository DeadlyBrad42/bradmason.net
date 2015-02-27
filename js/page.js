(function($, sammy, analytics){
	// initialize the application
	var app = $.sammy('#content', function() {

		this.get('/', function() {
			loadContent('#about', this.$element());
			analytics('/');
		});

		this.get('/#about', function() {
			loadContent('#about', this.$element());
			analytics('/#about');
		});

		this.get('/#games', function() {
			loadContent('#games', this.$element());
			analytics('/#games');
		});

		this.get('/#projects', function() {
			loadContent('#projects', this.$element());
			analytics('/#projects');
		});

		var loadContent = function(source, $destination) {
			$destination.html($(source).html());
		}
	});

	$(function(){
		// start the application
		//console.log('starting sammy...');
		app.run('/');

		console.log("Hello there! If you're here to read the source, it might be easier to do that over at https://github.com/DeadlyBrad42/bradmason.net :)");
	});
})(jQuery, Sammy, gaLog);