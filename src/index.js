import $ from 'jquery';
import anime from 'animejs'

import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './scss/style.scss';


/*




*/


/*setInterval(function(){
var container = document.getElementById('content');
var tmp = container.innerHTML;
container.innerHTML= tmp;
}, 230000 // length of the whole show in milliseconds
);*/





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
  
  /*$("#qui_pedra").load("/headmap/titles/qui_pedra.html");
  $("#qui_sacopa").load("/headmap/titles/qui_sacopa.html"); 
  $("#qui_sjs").load("/headmap/titles/qui_sjs.html"); 
  $("#qui_madureira").load("/headmap/titles/qui_madureira.html"); 
  $("#qui_agbara").load("/headmap/titles/qui_agbara.html"); 
  $("#qui_grotao").load("/headmap/titles/qui_grotao.html");

  $("#quilombo_texto_01").load("/headmap/text/quilombo_texto_01.html"); 
  $("#quilombo_texto_02").load("/headmap/text/quilombo_texto_02.html"); 
  $("#quilombo_texto_03").load("/headmap/text/quilombo_texto_03.html"); 
  $("#quilombo_texto_04").load("/headmap/text/quilombo_texto_04.html"); 
  $("#quilombo_texto_05").load("/headmap/text/quilombo_texto_05.html"); 
  $("#quilombo_texto_06").load("/headmap/text/quilombo_texto_06.html");
  $("#quilombo_texto_07").load("/headmap/text/quilombo_texto_07.html"); */



 // var absoluteOffset = anime.timeline();

 /* absoluteOffset
    .add({
      targets: '#pds',
      translateX: 0,
      //duration: 800,
      easing: 'easeOutExpo',
      offset: 10000 // Starts at 1000ms of the timeline
    })
    .add({
      targets: '#qui_text_01',
      translateX: 0,
      //duration: 800,
      easing: 'easeOutExpo',
      offset: 20000 // Starts at 500ms of the timeline
    });*/
    /*.add({
      targets: '#sjs',
      translateX: 0,
      //duration: 800,
      easing: 'easeOutExpo',
      offset: 10000 * 2 // Starts at 0ms of the timeline
    })
    .add({
      targets: '#qui_text_02',
      translateX: 0,
      //duration: 800,
      easing: 'easeOutExpo',
      offset: 10000 * 3 // Starts at 0ms of the timeline
    })
    .add({
      targets: '#scp',
      translateX: 0,
      //duration: 800,
      easing: 'easeOutExpo',
      offset: 10000 * 4 // Starts at 0ms of the timeline
    })
    .add({
      targets: '#qui_text_03',
      translateX: 0,
      //duration: 800,
      easing: 'easeOutExpo',
      offset: 10000 * 5 // Starts at 0ms of the timeline
    })
    .add({
      targets: '#mdr',
      translateX: 0,
      //duration: 800,
      easing: 'easeOutExpo',
      offset: 10000 * 6 // Starts at 0ms of the timeline
    })
    .add({
      targets: '#qui_text_04',
      translateX: 0,
      //duration: 800,
      easing: 'easeOutExpo',
      offset: 10000 * 7 // Starts at 0ms of the timeline
    })
    .add({
      targets: '#agb',
      translateX: 0,
      //duration: 800,
      easing: 'easeOutExpo',
      offset: 10000 * 8 // Starts at 0ms of the timeline
    })
    .add({
      targets: '#qui_text_05',
      translateX: 0,
      //duration: 800,
      easing: 'easeOutExpo',
      offset: 10000 * 9 // Starts at 0ms of the timeline
    })
    .add({
      targets: '#grt',
      translateX: 0,
      //duration: 800,
      easing: 'easeOutExpo',
      offset: 10000 * 10 // Starts at 0ms of the timeline
    })
    .add({
      targets: '#qui_text_06',
      translateX: 0,
      //duration: 800,
      easing: 'easeOutExpo',
      offset: 10000 * 11 // Starts at 0ms of the timeline
    });*/
  

  /*var TLParamsInheritance = anime.timeline({
    targets: 'ul',
    delay: function(el, i) { return i * 8000 },
    duration: 500,
    easing: 'easeOutExpo',
    //direction: 'alternate',
    //loop: true
  });

  TLParamsInheritance
    .add({
      translateX: -250,
    })
    .add({
      //opacity: .5,
      translateX: -500,
      //scale: 2,
    })
    .add({
      translateX: -750,
      //scale: 1
  });*/


  /*var basicTimeline = anime.timeline();

  basicTimeline
    .add({
      // targets: '#basicTimeline .square.el',
      targets: 'ul',
      translateX: -1280,
      easing: 'easeOutExpo',
      //offset: '-=6000' // Starts 600ms before the previous animation ends
    })
    .add({
      targets: 'ul',
      translateX: -2560,
      easing: 'easeOutExpo',
      offset: '-=6000' // Starts 600ms before the previous animation ends
    })
    .add({
      targets: 'ul',
      translateX: -3840,
      easing: 'easeOutExpo',
      offset: '-=6000' // Starts 600ms before the previous animation ends
  });*/

  // var oi = $('#pds').position();
  // console.log(oi.left)
  // var e = $('ul').offset().left
  // console.log(e)

  //setTimeout(
    //function(){

      // $('.container').animate({
        // scrollLeft: $("#qui_text_01").offset().left
      // }, 2000);

      //window.location.hash = '#qui_text_01';
    //}, 8000
  //);
  /*$('.container').scroll(function () {
    var epa = e - $('.container').scrollLeft();

    if (epa === 0) {
      $("#pedradosal").load("quilombo_pedradosal.html");
      $("#qui_pedra").load("/titles/qui_pedra.html"); 
    } else {
      //$("#pedradosal").load("");
      //$("#qui_pedra").load(""); //
    }
    // console.log(e - $('.container').scrollLeft());
  });*/

})

$(function(){
  
  
});

/*var count = 13;

var percent = 100 / count;

for (var i = 1; i < count; i++) {
  console.log(percent * i)
}*/






    //Quilombo Pedra do Sal - Rio de Janeiro
//-22.8980357,-43.1853797,19.79z

  // Quilombo São João da Serra - Valença
//-22.5298981,-44.0724162,9z

   // Quilombo de Sacopã - RJ
// -22.720115,-43.3754691,10.49z

  //Quilombo Madureira
//-22.8697596,-43.3371972,10.68z

// Quilombo Agbara Dudu
// -22.8578807,-43.333236,16z

// Quilombo do Grotão
// -22.9373052,-43.0084305,16.06z


  
  // Quilombo Pedra do Sal - Rio de Janeiro
  var mymap1 = L.map('map1').setView([-22.8980357,-43.1853797], 16);

  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap1);

  // Quilombo São João da Serra - Valença
  var mymap2 = L.map('map2').setView([-22.5298981,-44.0724162], 16);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap2);

  // Quilombo de Sacopã - RJ
  var mymap3 = L.map('map3').setView([-22.720115,-43.3754691], 16);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap3);

  // Quilombo Madureira
  var mymap4 = L.map('map4').setView([-22.8697596,-43.3371972], 16);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap4);

  // Quilombo Agbara Dudu
  var mymap5 = L.map('map5').setView([-22.8578807,-43.333236], 16);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap5);

  // Quilombo do Grotão
  var mymap6 = L.map('map6').setView([-22.9373052,-43.0084305], 16);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap6);



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
