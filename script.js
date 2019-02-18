var wordAdd = {
    nouns:['chair','beaver','plant','street'],
    verbs:['run','dance','defecate','smell'],
    adjectives:['fancy','marron','large','strange'],
    adverbs:['very', 'too', 'like', 'most']
}

var chrisButton = document.getElementById('christmas-button');
var shopButton = document.getElementById('shopping-button'); 
var brainButton = document.getElementById('brainstorming-button');

var generateButton = document.getElementById('generate');

var buildingPlace = document.getElementById("name-add");

var nounTotal =[];

function nounArrayFunction(event){
        nounTotal = wordAdd.nouns;
    var nounInput = document.getElementById('input-nouns').value;
    var nounArray = nounInput.split(',');
    if(nounInput === ''){
       nounTotal;
    }
    else{
     for(var i = 0; i <= nounArray.length; i++){
        nounTotal.unshift(nounArray[i]);
        nounTotal = nounTotal.filter(function(element){
         return element !== undefined;
      });
     }
   } 
}
console.log(nounTotal);
var verbTotal = [];

function verbArrayFunction(event){
    verbTotal = wordAdd.verbs;
    var verbInput = document.getElementById('input-verbs').value;
    var verbArray = verbInput.split(',');
    if(verbInput === ''){
       verbTotal;
    }
    else{
     for(var i = 0; i <= verbArray.length; i++){
        verbTotal.unshift(verbArray[i]);
        verbTotal = verbTotal.filter(function(element){
         return element !== undefined;
      });
     }
   }
     
}
var adjectTotal =[];

function adjectArrayFunction(event){
         adjectTotal = wordAdd.adjectives;
    var adjectInput = document.getElementById('input-adjectives').value;
    var adjectArray = adjectInput.split(',');
    if(adjectInput === ''){
       adjectTotal;
    }
    else{
     for(var i = 0; i <= adjectArray.length; i++){
        adjectTotal.unshift(adjectArray[i]);
        adjectTotal = adjectTotal.filter(function(element){
         return element !== undefined;
      });
     }
   } 
}
var adverbTotal = [];

function adverbArrayFunction(event){
    adverbTotal = wordAdd.adverbs;
    var adverbInput = document.getElementById('input-adverbs').value;
    var adverbArray = adverbInput.split(',');
    if(adverbInput === ''){
       adverbTotal;
    }
    else{
     for(var i = 0; i <= adverbArray.length; i++){
       adverbTotal.unshift(adverbArray[i]);
       adverbTotal = adverbTotal.filter(function(element){
          return element !== undefined;
       });
     }
   }
}
console.log(adverbTotal);
function updateArrays(event){
   nounArrayFunction();
   verbArrayFunction();
   adjectArrayFunction();
   adverbArrayFunction();
}

function radioSelect(){
   if (chrisButton.checked === true){
      shopButton.checked = false;
      brainButton.checked = false;
   }
   else if(shopButton.checked === true){
      chrisButton.checked = false;
      brainButton.checked = false;
   }
   else if(brainButton.checked === true)
      shopButton.checked = false;
      chrisButton.checked = false;
}

function generateMad(event){ 
   updateArrays();
   
   var area = document.createElement('div');
   area.id = "madLibs";

   if(chrisButton.checked === true){
      area.innerHTML = 'Every Christmas we '+  verbTotal[0]  +' to a ' + adjectTotal[0] + ' tree farm far away.'
      +' This is not just any '+ adjectTotal[1] +' tree farm. My dad and I '+  verbTotal[1]  +' onto the ' +nounTotal[0]+' to '
      +verbTotal[2] + ' for the perfect '+nounTotal[1]+'. Some people like them '+ adjectTotal[2] + ' , but I prefer them '+adjectTotal[3] +'.'
      +'After searching for hours I usually ' + adjectTotal[3] + ' exclaim \"Dad! The perfect tree is over '
      +'there!\" Off we ' + verbTotal[3] +' to get the tree. The problem is we always forget the '
      +nounTotal[2]+ ' and the '+nounTotal[3]+'. But at the end of the day we '+ adverbTotal[0] +' get the tree and head home '+ adverbTotal[1] + '.'
      + '\"I wish it was Christmas all year round\"  I '+ adverbTotal[2] + ' think to myself.';
   }
   else if(shopButton.checked === true){
      area.innerHTML = 'Today I went shopping. When I arrived at the store I saw a ' + adjectTotal[0] + ' '
      +nounTotal[0]+'  , who upon noticing me '+ adverbTotal[0]+' said "I need to "'
      + verbTotal[0] +' ". "Well,   that was '+  adjectTotal[1]+'" I thought to myself and walked in the store. '
      +'The store had rearranged it\s inventory, so I felt '+ adverbTotal[1] +' lost. I walked up to store clerk and said '
      + adverbTotal[2]+' "I am looking for a '+  adjectTotal[2] + ' '  + nounTotal[1]+ ' that doesn’t '+ verbTotal[1] +' as often as the last one I had." '
      + 'The store clerk looked at me with a '+  adjectTotal[3]+ ' look in his eye and said, "What you are looking for can be found by the '
      + nounTotal[2] +', if you see a '+ nounTotal[3] + ' that '+ adverbTotal[3] + ' can '+  verbTotal[2] +' , then you\'ve gone too far.\" As I tried to '
      +'understand his directions, I thought to myself, \"I should have just ordered it on amazon.com, Their products seem to '+ verbTotal[3] +' the perfect amount\"';
   }
   else if(brainButton.checked === true){
      area.innerHTML = 'Many say that brainstorming is '+ adjectTotal[0] +' and does not '+  verbTotal[0]  +'. However, with the combination of the right'
      +' computer and ' +nounTotal[0]+' anyone  can lead a good '+  verbTotal[1] +'. When you have ' + adjectTotal[0] + ' pulled together a '
      + adjectTotal[1] + ' group of ' +nounTotal[1]+' in a big room with lots of TVs then  magical things will happen. In the past we have '
      + adverbTotal[0] +' suggested participants work together to find the most '+ adjectTotal[2] +' solution. The most difficult part is many '
      + adjectTotal[3] +' '+nounTotal[2]+ ' like to '+  verbTotal[2] +'. This has proved to be '+ adverbTotal[1] +' problematic.  But in the end the most'
      +' important '+nounTotal[3]+  ' usually is brought to light.  Typically we try to encourage ideas to '+  verbTotal[3] +' , and never shut ideas down. '
      +'This concludes our instructions. Thanks for '+ adverbTotal[2] +' listening!';
   }
   if(document.getElementById("madLibs")){
      buildingPlace.removeChild(document.getElementById("madLibs"));
      buildingPlace.appendChild(area);
  }
  else{
   buildingPlace.appendChild(area);
  }
  shopButton.checked = false;
  chrisButton.checked = false;
  brainButton.checked = false;

}

generateButton.addEventListener('click',generateMad);
chrisButton.addEventListener('click',radioSelect());
shopButton.addEventListener('click',radioSelect());
brainButton.addEventListener('click',radioSelect());



