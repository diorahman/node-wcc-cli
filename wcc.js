var util = require('util');
var opt = require('optimist').argv;
var argv = process.argv;
var wcc = require('node-wcc');

var WccError = function(msg){
	Error.call(this);
	Error.captureStackTrace(this, arguments.callee);
	this.message = msg;
	this.name = 'WccError';
}

WccError.prototype.__proto__ = Error.prototype;

function login(opt){
	
	if(!opt.username || !opt.password) throw new WccError('username and password are needed');
	
	wcc.ssoLogin(opt.username, opt.password, function(err, result){
		if(err) throw WccError('error login');
		console.log(result);
	});
}

function build(opt){
	if(!opt.sessionId) throw new WccError('sessionId is needed, please login');
	
	var options = {
		zipFile : opt.zipFile,
		sessionId : opt.sessionId,
		flag : opt.flag ? opt.flag : 'debPkgUserDir',
		os : opt.os ? opt.os : 'meego_1_2_harmattan',
		qt : opt.qt ? opt.qt : '4_7_4'
	}
	
	wcc.build(options, function(err, result){
		if(err) throw WccError('error build');
		console.log(result);
	});
}
function checkStatus(opt){
	
	var options = {
		projectId : opt.projectId,
		sessionId : opt.sessionId,
		os : opt.os ? opt.os : 'meego_1_2_harmattan',
		qt : opt.qt ? opt.qt : '4_7_4'
	}
	
	wcc.checkStatus(options, function(err, result){
		if(err) throw WccError('error build');
		console.log(result.status);
	});
}

function download(opt){
	
	var options = {
		projectId : opt.projectId,
		sessionId : opt.sessionId,
		os : opt.os ? opt.os : 'meego_1_2_harmattan',
		qt : opt.qt ? opt.qt : '4_7_4'
	}
	
	wcc.download(options, function(err, result){
		if(err) throw WccError('error build');
		console.log(result);
	});
}

if(argv.length < 3){ throw new WccError('missing arguments');}
else{

	var command = argv[2];
	
	switch(command){
		case 'login' : login(opt); break;
		case 'build' : build(opt); break;
		case 'status' : checkStatus(opt); break;
		case 'download' : download(opt); break;
		default : throw new WccError('wrong command');
	}
}



