/1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

 var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

 var insertX = ['Willy the Goblin',
'Big Daddy',
'Father Christmas']

 var insertY =['the soup kitchen',
'Disneyland',
'the White House']

var insertZ =['spontaneously combusted',
'melted into a puddle on the sidewalk',
'turned into a slug and crawled away']

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

 var newStory = storyText;
 var xItem = randomValueFromArray(insertX);
 var yItem = randomValueFromArray(insertY);
 var zItem = randomValueFromArray(insertZ);

 var newStory = newStory.replace(':insertX', xItem);
 var newStory = newStory.replace(':insertX', xItem);
 var newStory = newStory.replace(':insertY', yItem);
 var newStory = newStory.replace(':zItem', zItem);

  if(customName.value != '') {
    const name = customName.value;
   newStory = newStory.replace('Bob',name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone';
    const temperature =  Math.round((94 - 32)*5/9) +' centigrade'

    var newStory = newStory.replace('94 farenheit', temperature);
    var newStory = newStory.replace('300 pounds', weight);


  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
