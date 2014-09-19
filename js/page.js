(function($, sammy){
	// initialize the application
	var app = $.sammy('#content', function() {

		this.get('/', function() {
			this.$element().html('A new route! (default)');
			//redirect('/about');
		});

		this.get('/about', function() {
			this.$element().html('A new route! (about)');
		});

		this.get('/games', function() {
			this.$element().html('A new route! (games)');
		});

		this.get('/projects', function() {
			this.$element().html('A new route! (projects)');
		});
	});

	$(function(){
		// start the application
		app.run('/');
		console.log('starting sammy...');
	});
})(jQuery, Sammy);