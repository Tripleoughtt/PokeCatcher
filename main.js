'use strict';

$(document).ready(init)
var pokemon;
function init(){

  $('#get').click(getClicked)
  console.log('OK!')

  $.ajax({
    method: 'get',
    url: 'http://pokeapi.co/api/v1/pokedex/1/',
    success: function(data, status){
      pokemon = data
      console.log(pokemon)
    }
  })
}
var pokeCard;
function getClicked(){
  pokeCard = $('<div/>',{
    class: 'card'
  });
  var  pokename = $('#pokename').val();
  $.ajax({
    method: 'get',
    url: 'http://pokeapi.co/api/v1/pokemon/' + pokename + '/',
    success: function(pokeman, status){
      console.log(pokeman)
      var attack = $('<div>').text('Attack:' +  pokeman.attack);
      var defense = $('<div>').text('Defense:' +  pokeman.defense)
      var spAttack =  $('<div>').text('Special Attack:' + pokeman.sp_atk)
      var spDefense =  $('<div>').text('Special Defense:' + pokeman.sp_def)
      var speed =  $('<div>').text('Speed:' + pokeman.speed)
      var id =  $('<div>').text('National ID:' + pokeman.national_id)
      var hp =  $('<div>').text('HP:' + pokeman.hp)
      var name = $('<div>').text(pokeman.name)
      hp.appendTo(pokeCard)
      attack.appendTo(pokeCard);
      defense.appendTo(pokeCard);
      spAttack.appendTo(pokeCard)
      spDefense.appendTo(pokeCard)
      speed.appendTo(pokeCard)
      id.appendTo(pokeCard)
      $.ajax({
        method: 'get',
        url: 'http://pokeapi.co' + pokeman.sprites[0].resource_uri,
        success: function(pokepic, status){
         console.log(pokepic) 
          $('<img/>',{
            src: 'http://pokeapi.co' + (pokepic.image)
          }).prependTo(pokeCard);
        }
      })
    name.prependTo(pokeCard)
    }
  });
  pokeCard.appendTo($('.pokeDiv'))
  pokeCard.fadeIn(1500)
  pokeCard.css({'display' : 'inline-block'})
}
