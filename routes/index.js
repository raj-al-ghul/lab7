var projects = require('../projects.json');

/*
 * GET home page.
 */

projects['grid'] = false;

exports.view = function(req, res){

	var random_num = Math.random();
	console.log(random_num);

	//if (random_num > 0.5) {
	if (random_num >= 0) {
		projects['grid'] = false;
		res.render('index', projects);
	} else {
		res.redirect('/grid');
	}

  	//res.render('index', projects);
};

exports.gridView = function(req, res){
	projects['grid'] = true;
  	res.render('index', projects);
};