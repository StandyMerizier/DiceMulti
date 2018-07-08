//user enters number which reps number of sides on dice
//User clicks button
//Dice with x sides rolls and number of dices
//Result is entered in the console

//event listner for button

//function for rolls

//value out of input

//get result of die rolls

//get results of multiple dice roll

//display result in the console

document.getElementsByTagName('button')[0].onclick = roll

function roll(){
  var numOfSides = document.getElementsByTagName('input')[0].value
  var numOfDices = document.getElementsByTagName('input')[1].value
  var numOfDicesIgn = document.getElementsByTagName('input')[2].value
  $('li').remove()
  for (var count = 0; count <= numOfDices; count++) {
    var results = Math.ceil(Math.random()*numOfSides)
    if (count < numOfDices - numOfDicesIgn){
      console.log(results)
    }else{
      $('#display').append('<li>'+results+'</li>')
    }
  }

}
