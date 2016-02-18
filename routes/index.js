var projects = require('../projects.json');

/*
 * GET home page.
 */

projects['grid'] = false;

exports.view = function(req, res){
  	res.render('index', projects);
};

exports.gridView = function(req, res){
	projects['grid'] = true;
  	res.render('index', projects);
};