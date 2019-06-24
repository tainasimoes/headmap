import $ from 'jquery';
import anime from 'animejs'

import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './scss/style.scss';

$(document).ready(function() {
  $("#pedradosal").load("quilombo_pedradosal.html");
  $("#sjserra").load("quilombo_sjserra.html");
  $("#sacopa").load("quilombo_sacopa.html");
  $("#madureira").load("quilombo_madureira.html"); 
  $("#agbaradudu").load("quilombo_agbaradudu.html"); 
  $("#grotao").load("quilombo_grotao.html");

  $("#qui_pedra").load("/titles/qui_pedra.html");
  $("#qui_sacopa").load("/titles/qui_sacopa.html"); 
  $("#qui_sjs").load("/titles/qui_sjs.html"); 
  $("#qui_madureira").load("/titles/qui_madureira.html"); 
  $("#qui_agbara").load("/titles/qui_agbara.html"); 
  $("#qui_grotao").load("/titles/qui_grotao.html");

  $("#quilombo_texto_01").load("/text/quilombo_texto_01.html"); 
  $("#quilombo_texto_02").load("/text/quilombo_texto_02.html"); 
  $("#quilombo_texto_03").load("/text/quilombo_texto_03.html"); 
  $("#quilombo_texto_04").load("/text/quilombo_texto_04.html"); 
  $("#quilombo_texto_05").load("/text/quilombo_texto_05.html"); 
  $("#quilombo_texto_06").load("/text/quilombo_texto_06.html");
  $("#quilombo_texto_07").load("/text/quilombo_texto_07.html"); 
})

var url = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png';

// Quilombo Pedra do Sal - Rio de Janeiro
var mymap1 = L.map('map1').setView([-22.8980357,-43.1853797], 16);
L.tileLayer(url).addTo(mymap1);

// Quilombo São João da Serra - Valença
var mymap2 = L.map('map2').setView([-22.5298981,-44.0724162], 16);
L.tileLayer(url).addTo(mymap2);

// Quilombo de Sacopã - RJ
var mymap3 = L.map('map3').setView([-22.720115,-43.3754691], 16);
L.tileLayer(url).addTo(mymap3);

// Quilombo Madureira
var mymap4 = L.map('map4').setView([-22.8697596,-43.3371972], 16);
L.tileLayer(url).addTo(mymap4);

// Quilombo Agbara Dudu
var mymap5 = L.map('map5').setView([-22.8578807,-43.333236], 16);
L.tileLayer(url).addTo(mymap5);

// Quilombo do Grotão
var mymap6 = L.map('map6').setView([-22.9373052,-43.0084305], 16);
L.tileLayer(url).addTo(mymap6);





