import $ from 'jquery';
// import anime from 'animejs'

import leaflet from 'leaflet'


import 'leaflet/dist/leaflet.css'
import './scss/style.scss';

console.log(process.env.NODE_ENV);

var mymap = L.map('map', {
	minZoom: 16,
  maxZoom: 16

}).setView([-22.7173923, -43.4361921], 16);

L.tileLayer(
	// 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}',
	'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png?access_token={accessToken}',
		//'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
	{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'sk.eyJ1IjoidGFpbmFzaSIsImEiOiJjamx2ZXI4eGowdHdxM3ZuMGc0MjV0OHFsIn0.2l1WL-gee7MTZeS7q5UOdQ'
	}
).addTo(mymap);

var CanvasLayer = L.GridLayer.extend({
  createTile: function(coords, done){
    var error;
    // create a <canvas> element for drawing
    var tile = L.DomUtil.create('canvas', 'leaflet-tile');
    // setup tile width and height according to the options
    var size = this.getTileSize();
    tile.width = size.x;
    tile.height = size.y;
    // draw something asynchronously and pass the tile to the done() callback
    setTimeout(function() {
        done(error, tile);
    }, 1000);
    return tile;
  }
});





