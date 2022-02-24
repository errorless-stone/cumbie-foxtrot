$(document).ready(function () {
  console.log("doc is ready");
 
  let revName; 


  $
    ("#btnGetFacts").click(function (){

      // handle it if input is blank

      let userName = $("#userName").val();
      let coolFacts = generateCoolNameFacts(userName); 

      console.log('you clicked the button');
      console.log('from ln 12', generateCoolNameFacts(userName));
      
      $("#coolNameFactsOutput").html(coolFacts);

      $('#btnGetFacts').html(
        '<button id="btnGetFacts" class="btn btn-secondary">click to play again</button>'
      )

      $('#btnGetFacts').click(function(){
        location.reload();
      });
  


    });


});

function generateCoolNameFacts(userName) {
  let coolFacts = ''; 
  
  coolFacts = nameLength(userName);
  coolFacts += " <br> " + nameStart(userName);
  coolFacts += "<br>" + nameEnd(userName);
  coolFacts += "<br>" + "Your Lucky number is " + userLuckyNum;

  console.log("initialized the'm coolFacts variable: " + coolFacts); 

  return coolFacts;
}

function nameLength(name) {
  return "Your name is " + name.length + " letters long!"; 
}

function nameStart(name) {
  return "the first letter of your name is " + name[0]
}

function nameEnd(name) {
  
  let lastIndex = name.length - 1

  return "the last letter of your name is " + name[lastIndex]
}

var userLuckyNum = 1 + Math.floor(Math.random() * 100);
