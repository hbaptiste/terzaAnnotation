var request = require('supertest');
var express = require('express');

var app = require('../app.js');

describe('GET /', function() {
	it('respond with hello word', function (done){
		request(app).get('/').expect('hello word', done);
	});

});