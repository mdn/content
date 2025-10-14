---
title: "Challenge: Silly story generator"
short-title: "Challenge: Story generator"
slug: Learn_web_development/Core/Scripting/Silly_story_generator
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}

In this challenge you are tasked with taking some of the knowledge you've picked up in this module so far and applying it to creating a fun app that generates random silly stories. Along the way, we'll test your knowledge of variables, math, strings, and arrays. Have fun!

## Starting point

To begin, click the **Play** button in one of the code panels below to open the provided example in the MDN Playground. You'll then follow the instructions in the [Project brief](#project_brief) section to complete the JavaScript functionality.

```html live-sample___silly-story-start live-sample___silly-story-finish
<div>
  <label for="custom-name">Enter custom name:</label>
  <input id="custom-name" type="text" placeholder="" />
</div>
<fieldset>
  <legend>Choose locale:</legend>
  <label for="us">US</label
  ><input id="us" type="radio" name="uk-us" value="us" checked />
  <label for="uk">UK</label
  ><input id="uk" type="radio" name="uk-us" value="uk" />
</fieldset>
<div>
  <button class="generate">Generate random story</button>
</div>
<!-- Thanks a lot to Willy Aguirre for his help with the code for this assessment -->
<p class="story"></p>
```

```css hidden live-sample___silly-story-start live-sample___silly-story-finish
body {
  font: 1.2em / 1.5 system-ui;
  margin: 0 auto;
  width: 500px;
}

fieldset {
  border: 0;
}

fieldset,
legend {
  padding: 0;
  margin: 0;
}

input[type="text"] {
  margin-top: 5px;
  padding: 5px;
  width: 50%;
  display: block;
}

div,
fieldset {
  margin-top: 20px;
}

p {
  margin-top: 10px;
  background: #ffc125;
  padding: 20px;
  visibility: hidden;
}
```

```js live-sample___silly-story-start
// Complete variable definitions and random functio

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

// Willy the Goblin
// Big Daddy
// Father Christmas

// the soup kitchen
// Disneyland
// the White House

// spontaneously combusted
// melted into a puddle on the sidewalk
// turned into a slug and slithered away

// Partial return random string function

function returnRandomStoryString() {
  // It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  if (customName.value !== "") {
    const name = customName.value;
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);
  }

  // TODO: replace "" with the correct expression
  story.textContent = "";
  story.style.visibility = "visible";
}
```

{{EmbedLiveSample("silly-story-start", "100%", 300)}}

## Project brief

You have been provided with a few text strings and JavaScript functions; you need to write the necessary JavaScript to turn this into a working program, which does the following:

- Generates a silly story when the "Generate random story" button is pressed.
- Replaces the default name "Bob" in the story with a custom name, only if a custom name is entered into the "Enter custom name" text field before the generate button is pressed.
- Converts the default US weight and temperature quantities and units in the story into UK equivalents if the UK radio button is checked before the generate button is pressed.
- Generates a new random silly story every time the button is pressed.

### Initial variables and functions

In the JavaScript, below the "Complete variable definitions and random function" comment, you've got three constants that store references to:

- The "Enter custom name" text field: `customName`.
- The "Generate random story" button: `generateBtn`.
- The {{htmlelement("p")}} element at the bottom of the HTML body that the story will be copied into: `story`.

In addition, you've got a function called `randomValueFromArray()` that takes an array as input and returns one of the items stored inside the array at random.

Below the "Raw text strings" comment, you've got some commented text strings that will act as input into our program. We'd like you to uncomment these strings and store them inside constants like so:

1. Store the first set of three strings inside an array called `characters`.
2. Store the second set of three strings inside an array called `places`.
3. Store the third set of three strings inside an array called `events`.

### Completing the `returnRandomStoryString()` function

Below the "Partial return random string function" comment you've got a partially-completed `returnRandomStoryString()` containing a long, commented string of text and a `return` statement that returns a value called `storyText`.

To complete this function:

1. Uncomment the long string of text and store it inside a variable called `storyText`. This should be a template literal.
2. Add three constants called `randomCharacter`, `randomPlace`, and `randomEvent` just above the template literal. These should be set equal to three `randomValueFromArray()` calls, which should return a random string from the `characters`, `places`, and `events` arrays, respectively.
3. In the template literal, replace the instances of `:insertx:`, `:inserty:`, and `:insertz:` with embedded expressions containing `randomCharacter`, `randomPlace`, and `randomEvent`, respectively.

### Completing the `generateStory()` function

Below the "Event listener and partial generate function definition" comment, you've got a couple of code items:

- A line that adds a `click` event listener to the `generateBtn` variable so that when the button it represents is clicked, the `generateStory()` function is run.
- A partially-completed `generateStory()` function definition. For the remainder of the challenge, you'll be filling in lines inside this function to complete it and make it work properly.

Follow these steps to complete the function:

1. Create a new variable called `newStory`, and set its value to equal a `returnRandomStoryString()` call. This function is needed so we can create a new random story each time the button is pressed. If we set `newStory` directly to `storyText`, we'd only be able to generate a new story once.
2. Inside the first `if` block, add a string replacement method call to replace the name `Bob` found in the `newStory` string with the `name` variable. In this block we are saying "If a value has been entered into the `customName` text input, replace `Bob` in the story with that custom name."
3. Inside the second `if` block, we are checking to see if the `uk` radio button has been selected. If so, we want to convert the weight and temperature values in the story from pounds and Fahrenheit into stones and Celsius. What you need to do is as follows:
   1. Look up the formulas for converting pounds to stone, and Fahrenheit to Celsius.
   2. Inside the line that defines the `weight` constant, replace `300` with a calculation that converts 300 pounds into stones. Concatenate `" stone"` onto the end of the result of the overall `Math.round()` call.
   3. Inside the line that defines the `temperature` variable, replace `94` with a calculation that converts 94 Fahrenheit into Celsius. Concatenate `" Celsius"` onto the end of the result of the overall `Math.round()` call.
   4. Just under the two variable definitions, add two more string replacement lines that replace `300 pounds` with the contents of the `weight` variable, and `94 Fahrenheit` with the contents of the `temperature` variable.
4. Finally, in the second-to-last line of the function, make the `textContent` property of the `story` variable (which references the paragraph) equal to `newStory`.

## Hints and tips

- You don't need to edit the HTML and CSS in any way.
- [`Math.round()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) is a built-in JavaScript method that rounds the result of a calculation to the nearest whole number.
- There are three instances of strings that need to be replaced. You could use the `replace()` method, or some other solution.

## Example

Your finished app should work like the following live example:

{{EmbedLiveSample("silly-story-finish", "100%", 500)}}

<details>
<summary>Click here to show the solution</summary>

The finished JavaScript should look something like this:

```js live-sample___silly-story-finish
// Complete variable definitions and random function

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Solution: Raw text strings

const characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const places = ["the soup kitchen", "Disneyland", "the White House"];
const events = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and slithered away",
];

// Solution: Partial return random string function

function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  let storyText = `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`;

  return storyText;
}

// Solution: Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature = `${Math.round((94 - 32) * (5 / 9))} Celsius`;
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
```

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting/Conditionals", "Learn_web_development/Core/Scripting")}}
