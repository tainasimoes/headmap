import $ from 'jquery';
// import anime from 'animejs'

import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './scss/style.scss';

  var mymap = L.map('map').setView([-22.914395,-43.5878726], 11);

  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);

  var q = [
    {'name': 'Quilombo Pedra do Sal'},
    {'name': 'Quilombo São João da Serra'},
    {'name': 'Quilombo de Sacopã'},
    {'name': 'Quilombo Madureira'}
  ];

  // Quilombos | Latitude-Longitude:      
  var pointList = [];

  // Quilombo Pedra do Sal - Rio de Janeiro
  var p = new L.LatLng(-22.9032936,-43.1870534);
  pointList.push(p);

  // Quilombo São João da Serra - Valença
  var p = new L.LatLng(-22.5298981,-44.0724162);
  pointList.push(p);

  // Quilombo de Sacopã - RJ
  var p = new L.LatLng(-22.720115,-43.3754691);
  pointList.push(p);

  // Quilombo Madureira
  var p = new L.LatLng(-22.8697596,-43.3371972);
  pointList.push(p);

  var sec=0;
  var quilombo = $('h1');
  var timer = setInterval(
    function() {
      if( sec<pointList.length ) {

        mymap.setView(pointList[sec], 16, { animation: true });
        quilombo.text(q[sec].name)
        sec++;

      } else if ( sec == pointList.length ) {

        sec=0;
        mymap.setView(pointList[sec], 16, { animation: true });
        quilombo.text(q[sec].name);

      }
    },
  10000);
