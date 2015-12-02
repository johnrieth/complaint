'use strict';

var gulp = require( 'gulp' );
var del = require( 'del' );
var config = require( '../config' ).clean;

gulp.task( 'clean', function() {
  del( config.dest );
} );

gulp.task( 'clean:assets', function() {
  del( config.templ );
} );
