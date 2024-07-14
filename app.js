var express 		= 	require ('express'),
	app				=	express(),
	path			=	require('path'),
	
	booksRoutes		=	require('./routes/books');

	app.use(express.static(path.join(__dirname, 'assets'))); 
	
	app.use(booksRoutes);



//==============================================
//					Routes
//==============================================

	app.get('/', function(req, res){
		res.render('Home.ejs');
	})


//==============================================
//					Port
//==============================================

app.listen('3000', function(){
	console.log('Sever Request on Port 3000');
});
