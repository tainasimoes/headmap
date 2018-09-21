import $ from 'jquery';
// import anime from 'animejs'

import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './scss/style.scss';
  
  // Quilombo Pedra do Sal - Rio de Janeiro
  var mymap1 = L.map('map1').setView([-22.9032936,-43.1870534], 16);

  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap1);

  // Quilombo São João da Serra - Valença
  var mymap2 = L.map('map2').setView([-22.5298981,-44.0724162], 16);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap2);

  // Quilombo São João da Serra - Valença
  var mymap3 = L.map('map3').setView([-22.5298981,-44.0724162], 16);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap3);

  // Quilombo São João da Serra - Valença
  var mymap4 = L.map('map4').setView([-22.5298981,-44.0724162], 16);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap4);

  /*var q = [
    {'name': 'Quilombo Pedra do Sal'},
    {'name': 'Quilombo São João da Serra'},
    {'name': 'Quilombo de Sacopã'},
    {'name': 'Quilombo Madureira'}
  ];*/

  // Quilombos | Latitude-Longitude:      
  /*var pointList = [];

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
  pointList.push(p);*/

  /*var sec=0;
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
  10000);*/
