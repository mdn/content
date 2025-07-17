---
title: A first splash into JavaScript
short-title: JavaScript walkthrough
slug: Learn_web_development/Core/Scripting/A_first_splash
page-type: learn-module-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}

Now you've learned something about the theory of JavaScript and what you can do with it, we are going to give you an idea of what the process of creating a simple JavaScript program is like, by guiding you through a practical tutorial. Here you'll build up a simple "Guess the number" game, step by step.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>An understanding of <a href="/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> and the <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">fundamentals of CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>Thinking like a programmer.</li>
          <li>Experience of what writing JavaScript is like.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

We want to set really clear expectations here: You won't be expected to learn JavaScript by the end of this article, or even understand all the code we are asking you to write. Instead, we want to give you an idea of how JavaScript's features work together, and what writing JavaScript feels like. In subsequent articles you'll revisit all the features shown here in a lot more detail, so don't worry if you don't understand it all immediately!

> [!NOTE]
> Many of the code features you'll see in JavaScript are the same as in other programming languages — functions, loops, etc. The code syntax looks different, but the concepts are still largely the same.

## Introducing our "Number guessing game" example

In this article we'll show you how to build up the game you can see below:

```html hidden live-sample___guess-the-number
<h1>Number guessing game</h1>

<p>
  We have selected a random number between 1 and 100. See if you can guess it in
  10 turns or fewer. We'll tell you if your guess was too high or too low.
</p>

<div class="form">
  <label for="guessField">Enter a guess: </label>
  <input
    type="number"
    min="1"
    max="100"
    required
    id="guessField"
    class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
</div>

<div class="resultParas">
  <p class="guesses"></p>
  <p class="lastResult"></p>
  <p class="lowOrHi"></p>
</div>
```

```css hidden live-sample___guess-the-number
html {
  font-family: sans-serif;
}

body {
  width: 50%;
  max-width: 800px;
  min-width: 480px;
  margin: 0 auto;
}

.form input[type="number"] {
  width: 200px;
}

.lastResult {
  color: white;
  padding: 3px;
}
```

```js hidden live-sample___guess-the-number
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }

  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

{{EmbedLiveSample("guess-the-number", "100%", 300)}}

Have a go at playing it — familiarize yourself with the game before you move on.

## Thinking like a programmer

One of the hardest things to learn in programming is not the syntax you need to learn, but how to apply it to solve real-world problems. You need to start thinking like a programmer — this generally involves looking at descriptions of what your program needs to do, working out what code features are needed to achieve those things, and how to make them work together.

This requires a mixture of hard work, experience with the programming syntax, and practice — plus a bit of creativity. The more you code, the better you'll get at it. We can't promise that you'll develop "programmer brain" in five minutes, but we will give you plenty of opportunities to practice thinking like a programmer here, and throughout the rest of the course.

## The initial design brief

Let's imagine your boss has given you the following brief for creating this game:

> I want you to create a simple "guess the number" type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn, the player should be told if they are right or wrong, and if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again.

Upon looking at this brief, the first thing we can do is to start breaking it down into simple actionable tasks, in as much of a programmer mindset as possible:

1. Generate a random number between 1 and 100.
2. Record the turn number the player is on. Start it on 1.
3. Provide the player with a way to guess what the number is.
4. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
5. Next, check whether it is the correct number.
6. If it is correct:
   1. Display congratulations message.
   2. Stop the player from being able to enter more guesses (this would mess the game up).
   3. Display control allowing the player to restart the game.

7. If it is wrong and the player has turns left:
   1. Tell the player they are wrong and whether their guess was too high or too low.
   2. Allow them to enter another guess.
   3. Increment the turn number by 1.

8. If it is wrong and the player has no turns left:
   1. Tell the player it is game over.
   2. Stop the player from being able to enter more guesses (this would mess the game up).
   3. Display control allowing the player to restart the game.

9. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.

Let's now move forward, looking at how we can turn these steps into code, building up the example, and exploring JavaScript features as we go.

## Initial setup

To begin this tutorial, we'd like you to make a local copy of the following code in a new HTML file using your code editor.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />

    <title>Number guessing game</title>

    <style>
      html {
        font-family: sans-serif;
      }

      body {
        width: 50%;
        max-width: 800px;
        min-width: 480px;
        margin: 0 auto;
      }

      .form input[type="number"] {
        width: 200px;
      }

      .lastResult {
        color: white;
        padding: 3px;
      }
    </style>
  </head>

  <body>
    <h1>Number guessing game</h1>

    <p>
      We have selected a random number between 1 and 100. See if you can guess
      it in 10 turns or fewer. We'll tell you if your guess was too high or too
      low.
    </p>

    <div class="form">
      <label for="guessField">Enter a guess: </label>
      <input
        type="number"
        min="1"
        max="100"
        required
        id="guessField"
        class="guessField" />
      <input type="submit" value="Submit guess" class="guessSubmit" />
    </div>

    <div class="resultParas">
      <p class="guesses"></p>
      <p class="lastResult"></p>
      <p class="lowOrHi"></p>
    </div>

    <script>
      // Your JavaScript goes here
    </script>
  </body>
</html>
```

Keep it open in your text editor, and also open it in your web browser. At the moment you'll see a simple heading, paragraph of instructions and form for entering a guess, but the form won't currently do anything.

You'll be adding all your JavaScript code inside the {{htmlelement("script")}} element at the bottom of the HTML:

```html
<script>
  // Your JavaScript goes here
</script>
```

## Adding variables to store our data

Let's get started. First of all, add the following lines inside your {{htmlelement("script")}} element:

```js
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
```

This section of the code sets up the variables (and constants) we need to store the data our program will use.

Variables are basically names for values (such as numbers, or strings of text). You create a variable with the keyword `let` followed by a name for your variable.

Constants are also used to name values, but unlike variables, you can't change the value once set. In this case, we are using constants to store references to parts of our user interface. The text inside some of these elements might change, but each constant always references the same HTML element that it was initialized with. You create a constant with the keyword `const` followed by a name for the constant.

You can assign a value to a variable or constant with an equals sign (`=`) followed by the value you want to give it.

In our example:

- The first variable — `randomNumber` — is assigned a random number between 1 and 100, calculated using a mathematical algorithm.
- The first three constants are each made to store a reference to the results paragraphs in our HTML, and are used to insert values into the paragraphs later on in the code (note how they are inside a `<div>` element, which is itself used to select all three later on for resetting, when we restart the game):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- The next two constants store references to the form text input and submit button and are used to handle submitting the guess later on.

  ```html
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- Our final two variables store a guess count of 1 (used to keep track of how many guesses the player has had), and a reference to a reset button that doesn't exist yet (but will later).

## Functions

Next, add the following below your previous JavaScript:

```js
function checkGuess() {
  console.log("I am a placeholder");
}
```

Functions are reusable blocks of code that you can write once and run again and again, saving the need to keep repeating code over and over again. There are several ways to define functions, but for now we'll concentrate on one simple type. Here we have defined a function by using the keyword `function`, followed by a name, with parentheses put after it. After that, we put two curly braces (`{ }`). Inside the curly braces goes all the code that we want to run whenever we call the function.

When we want to run the code, we type the name of the function followed by the parentheses.

Let's try that now. Save your code and refresh the page in your browser. Then go into the [developer tools JavaScript console](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), and enter the following line:

```js
checkGuess();
```

After pressing <kbd>Return</kbd>/<kbd>Enter</kbd>, you should see `I am a placeholder` logged to the console; we have defined a function in our code that outputs a placeholder message whenever we call it.

## Text strings

Strings are used for representing text. We've already seen a string variable: in the following code, `"I am a placeholder"` is a string:

```js
function checkGuess() {
  console.log("I am a placeholder");
}
```

You can declare strings using double quotes (`"`) or single quotes (`'`), but you must use the same form for the start and end of a single string declaration: you can't write `"I am a placeholder'`.

You can also declare strings using backticks (`` ` ``). Strings declared like this are called _template literals_ and have some special properties. In particular, you can embed other variables or even expressions in them:

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

This gives you a mechanism to join strings together.

## Conditionals

**Conditional** code blocks allows you to run code selectively, depending on whether a certain condition is true or not. They look a bit like a function, but they are different. Let's explore conditionals by adding to our example.

I think it's safe to say that we don't want our `checkGuess()` function to just spit out a placeholder message. We want it to check whether a player's guess is correct or not, and respond appropriately.

At this point, replace your current `checkGuess()` function with this version instead:

```js
function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses:";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
```

This is a lot of code — phew! Let's go through each section and explain what it does.

- The first line declares a constant called `userGuess` and sets its value to the current value entered inside the text field. We also run this value through the built-in `Number()` constructor, just to make sure the value is definitely a number.
- Next, we encounter our first conditional code block. The simplest form of conditional block starts with the keyword `if`, then some parentheses, then some curly braces. Inside the parentheses, we include a test. If the test returns `true`, we run the code inside the curly braces. If not, we don't, and move on to the next bit of code. In this case, we test whether the `guessCount` variable is equal to `1` (that is, whether this is the player's first go or not):

  ```js
  guessCount === 1;
  ```

  If it is, we make the guesses paragraph's text content equal to `Previous guesses:`. If not, we don't.

- Next, we use a template literal to append the current `userGuess` value onto the end of the `guesses` paragraph, with a blank space in between.
- The next block does a few checks:
  - The first `if (){ }` checks whether the user's guess is equal to the `randomNumber` set at the top of our JavaScript. If it is, the player has guessed correctly and the game is won, so we show the player a congratulations message with a nice green color, clear the contents of the Low/High guess information box, and run a function called `setGameOver()`, which we'll discuss later.
  - Now we've chained another test onto the end of the last one using an `else if (){ }` structure. This one checks whether this turn is the user's last turn. If it is, the program does the same thing as in the previous block, except with a game over message instead of a congratulations message.
  - The final block chained onto the end of this code (the `else { }`) contains code that is only run if neither of the other two tests returns true (the player didn't guess correctly, but they have more guesses left). In this case we tell them they are wrong, then we perform another conditional test to check whether the guess was higher or lower than the answer, displaying a further message as appropriate to tell them higher or lower.

- The last three lines in the function get us ready for the next guess to be submitted. We add 1 to the `guessCount` variable so the player uses up their turn (`++` is an increment operation — increase by 1), and empty the value out of the form text field and focus it again, ready for the next guess to be entered.

## Events

At this point, we have a nicely implemented `checkGuess()` function, but it won't do anything because we haven't called it yet. Ideally, we want to call it when the "Submit guess" button is pressed, and to do this we need to use an **event**. Events are things that happen in the browser — a button being clicked, a page loading, a video playing, etc. — in response to which we can run blocks of code. **Event listeners** observe specific events and call **event handler functions**, which run in response to an event firing.

Add the following line below your `checkGuess()` function:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Here we are adding an event listener to the `guessSubmit` button. This is a method that takes two input values (called _arguments_) — the type of event we are listening out for (in this case `click`) as a string, and the function we want to run when the event occurs (in this case, `checkGuess()`). Note that we don't need to specify the parentheses when writing it inside {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

Try saving and refreshing your code now, and your example should work — to a point. The only problem now is that if you guess the correct answer or run out of guesses, the game will break because we've not yet defined the `setGameOver()` function that is supposed to be run once the game is over. Let's add our missing code now and complete the example functionality.

## Finishing the game functionality

Let's add the `setGameOver()` function to the bottom of our code and then walk through it. Add this now, below the rest of your JavaScript:

```js
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}
```

- The first two lines disable the form text input and button by setting their `disabled` properties to `true`. This is necessary, because if we didn't, the user could submit more guesses after the game is over, which would mess things up.
- The next three lines generate a new {{htmlelement("button")}} element, set its text label to "Start new game", and add it to the bottom of our existing HTML.
- The final line sets an event listener on our new button so that when it is clicked, a function called `resetGame()` is run.

Now we need to define `resetGame()` too! Add the following code, again to the bottom of your JavaScript:

```js
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

This rather long block of code completely resets everything to how it was at the start of the game, so the player can have another go.

Specifically, it:

- Sets the `guessCount` back to 1.
- Empties all the text out of the information paragraphs. We select all paragraphs inside `<div class="resultParas"></div>`, then loop through each one, setting their `textContent` to `""` (an empty string).
- Removes the reset button from our code.
- Re-enables the form elements, and empties and focuses the text field, ready for a new guess to be entered.
- Removes the background color from the `lastResult` paragraph.
- Generates a new random number so that you are not just guessing the same number again!

**At this point, you should have a basic fully working game — congratulations!**

All we have left to do now in this article is to talk about a few other important code features that you've already seen, although you may have not realized it.

## Loops

Above, we mentioned **Loops**, a very important concept in programming, which allow you to keep running a piece of code over and over again, until a certain condition is met.

Let's explore a basic example to show you with this means. Go to your [browser developer tools JavaScript console](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) again, paste the following code into it, and press <kbd>Enter</kbd>/<kbd>Return</kbd>:

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

What happened? The strings `'apples', 'bananas', 'cherries'` were printed out in your console.

This is because of the loop. The line `const fruits = ['apples', 'bananas', 'cherries'];` creates an array, which is a collection of values (in this case strings).

We then use a [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop to get each item in the array and run some JavaScript on it. The line `for (const fruit of fruits)` says:

1. Get the first value in `fruits` and store it in a variable called `fruit`.
2. Run the code between the `{}` curly braces (which in this case, logs the `fruit` value to the console).
3. Store the next array value in `fruit`, and repeat 2, until you reach the end of the `fruits` array.

Now let's look at the loop in our number guessing game — the following can be found inside the `resetGame()` function:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

This code creates a variable containing a list of all the paragraphs inside `<div class="resultParas">` using the {{domxref("Document.querySelectorAll", "querySelectorAll()")}} method, then it loops through each one, removing the text content of each.

Note that even though `resetPara` is a constant, we can change its internal properties like `textContent`.

## Summary

So that's it for building the example. You got to the end — well done! Try your final code out, or [play with our finished version here](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). If you can't get your version of the example to work, check it against the [source code](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

The next lesson may also help — in it, we discuss what can go wrong when writing JavaScript code, referring back to the "Guess the number" game in the process.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}
