var express 		= 	require('express'),
	router 			= 	express.Router(),

	books			=	require('google-books-search');

	

	router.get('/show/', function(req, res){
		var mess="*** Please Enter Something to Search ***";
		res.render('Redirect.ejs', {message: mess});
	})


	router.get('/show/:title', function(req, res){
		
		books.search(req.params.title, function(error, Results) {
		    if ( ! error ) {
		        res.render('Show_Books.ejs', {searchResults: Results});
		        console.log(Results);
		    }

		    else {
		        console.log(error);
		    }
		});	
	})

	router.get('/show_more/:id', function(req, res){
		books.search(req.params.id, function(error, Results) {
		    if ( ! error ) {
		        res.render('Show_More.ejs', {searchResults: Results});
		        console.log(Results);
		    }

		    else {
		        console.log(error);
		    }
		});	
	})

module.exports = router;