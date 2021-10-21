---
title: Useful string methods
slug: Learn/JavaScript/First_steps/Useful_string_methods
tags:
  - Article
  - Beginner
  - CodingScripting
  - JavaScript
  - Learn
  - case
  - indexof
  - l10n:priority
  - length
  - lower
  - replace
  - split
  - upper
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

Now that we've looked at the very basics of strings, let's move up a gear and start thinking about what useful operations we can do on strings with built-in methods, such as finding the length of a text string, joining and splitting strings, substituting one character in a string for another, and more.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy, a basic understanding of HTML and CSS, an
        understanding of what JavaScript is.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand that strings are objects, and learn how to use some of the
        basic methods available on those objects to manipulate strings.
      </td>
    </tr>
  </tbody>
</table>

## Strings as objects

Most things are objects in JavaScript. When you create a string, for example by using

```js
let string = 'This is my string';
```

your variable becomes a string object instance, and as a result has a large number of properties and methods available to it. You can see this if you go to the {{jsxref("String")}} object page and look down the list on the side of the page!

**Now, before your brain starts melting, don't worry!** You really don't need to know about most of these early on in your learning journey. But there are a few that you'll potentially use quite often that we'll look at here.

Let's enter some examples into the [browser developer console](/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools).

### Finding the length of a string

This is easy — you use the {{jsxref("String.prototype.length", "length")}} property. Try entering the following lines:

```js
let browserType = 'mozilla';
browserType.length;
```

This should return the number 7, because "mozilla" is 7 characters long. This is useful for many reasons; for example, you might want to find the lengths of a series of names so you can display them in order of length, or let a user know that a username they have entered into a form field is too long if it is over a certain length.

### Retrieving a specific string character

On a related note, you can return any character inside a string by using **square bracket notation** — this means you include square brackets (`[]`) on the end of your variable name. Inside the square brackets you include the number of the character you want to return, so for example to retrieve the first letter you'd do this:

```js
browserType[0];
```

Remember: computers count from 0, not 1! You could use this to, for example, find the first letter of a series of strings and order them alphabetically.

To retrieve the last character of _any_ string, we could use the following line, combining this technique with the `length` property we looked at above:

```js
browserType[browserType.length-1];
```

The length of the string "mozilla" is 7, but because the count starts at 0, the last character's position is 6; using  `length-1` gets us the last character.

### Finding a substring inside a string and extracting it

Sometimes you'll want to find if a smaller string is present inside a larger one (we generally say _if a substring is present inside a string_). This can be done using the {{jsxref("String.prototype.indexOf()", "indexOf()")}} method, which takes a single {{glossary("parameter")}} — the substring you want to search for.

If the substring _is_ found inside the main string, it returns a number representing the index position of the substring — which character number of the main string the substring starts at. If the substring is _not found_ inside the main string, it returns a value of `-1`.

1.  Try this:

    ```js
    browserType.indexOf('zilla');
    ```

    This gives us a result of 2, because the substring "zilla" starts at position 2 (0, 1, 2  — so 3 characters in) inside "mozilla". Such code could be used to filter strings. For example, we may have a list of web addresses and only want to print out the ones that contain "mozilla".

2.  This can be done in another way, which is possibly even more effective. Try the following:

    ```js
    browserType.indexOf('vanilla');
    ```

    This should give you a result of `-1` — this is returned when the substring, in this case 'vanilla', is not found in the main string.

    You could use this to find all instances of strings that **don't** contain the substring 'mozilla' (or **do,** if you use the negation operator, `!==`):

    ```js
    if(browserType.indexOf('mozilla') === -1) {
      // do stuff with the string if the 'mozilla'
      // substring is NOT contained within it
    }

    if(browserType.indexOf('mozilla') !== -1) {
      // do stuff with the string if the 'mozilla'
      // substring IS contained within it
    }
    ```

3.  When you know where a substring starts inside a string, and you know at which character you want it to end, {{jsxref("String.prototype.slice()", "slice()")}} can be used to extract it. Try the following:

    ```js
    browserType.slice(0,3);
    ```

    This returns "moz" — the first parameter is the character position to start extracting at, and the second parameter is the character position after the last one to be extracted. So the slice happens from the first position, up to, but not including, the last position. In this example, since the starting index is 0, the second parameter is equal to the length of the string being returned.

4.  Also, if you know that you want to extract all of the remaining characters in a string after a certain character, you don't have to include the second parameter! Instead, you only need to include the character position from where you want to extract the remaining characters in a string. Try the following:

    ```js
    browserType.slice(2);
    ```

    This returns "zilla" — this is because the character position of 2 is the letter z, and because you didn't include a second parameter, the substring that was returned was all of the remaining characters in the string.

> **Note:** The second parameter of `slice()` is optional: if you don't include it, the slice ends at the end of the original string. There are other options too; study the {{jsxref("String.prototype.slice()", "slice()")}} page to see what else you can find out.

### Changing case

The string methods {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} and {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} take a string and convert all the characters to lower- or uppercase, respectively. This can be useful for example if you want to normalize all user-entered data before storing it in a database.

Let's try entering the following lines to see what happens:

```js
let radData = 'My NaMe Is MuD';
radData.toLowerCase();
radData.toUpperCase();
```

### Updating parts of a string

You can replace one substring inside a string with another substring using the {{jsxref("String.prototype.replace()", "replace()")}} method. This works at a very basic level, although there are some advanced things you can do with it that we won't go into yet.

It takes two parameters — the string you want to replace, and the string you want to replace it with. Try this example:

```js
browserType.replace('moz','van');
```

This returns "vanilla" in the console. But if you check the value of `browserType`, it is still "mozilla". To actually update the value of the `browserType` variable in a real program, you'd have to set the variable value to be the result of the operation; it doesn't just update the substring value automatically. So you'd have to actually write this: `browserType = browserType.replace('moz','van');`

## Active learning examples

In this section we'll get you to try your hand at writing some string manipulation code. In each exercise below, we have an array of strings, and a loop that processes each value in the array and displays it in a bulleted list. You don't need to understand arrays or loops right now — these will be explained in future articles. All you need to do in each case is write the code that will output the strings in the format that we want them in.

Each example comes with a "Reset" button, which you can use to reset the code if you make a mistake and can't get it working again, and a "Show solution" button you can press to see a potential answer if you get really stuck.

### Filtering greeting messages

In the first exercise we'll start you off simple — we have an array of greeting card messages, but we want to sort them to list just the Christmas messages. We want you to fill in a conditional test inside the `if( ... )` structure, to test each string and only print it in the list if it is a Christmas message.

1.  First think about how you could test whether the message in each case is a Christmas message. What string is present in all of those messages, and what method could you use to test whether it is present?
2.  You'll then need to write a conditional test of the form _operand1 operator operand2_. Is the thing on the left equal to the thing on the right? Or in this case, does the method call on the left return the result on the right?
3.  Hint: In this case it is probably more useful to test whether the method call _isn't_ equal to a certain result.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 125px;">

<ul>

</ul>

</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="playable-code" style="height: 290px; width: 95%">
const list = document.querySelector('.output ul');
list.innerHTML = '';
let greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (let i = 0; i < greetings.length; i++) {
  let input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greetings[i]) {
    let listItem = document.createElement('li');
    listItem.textContent = input;
    list.appendChild(listItem);
  }
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution">
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById('code');
const reset = document.getElementById('reset');
const solution = document.getElementById('solution');
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = 'Show solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Show solution') {
    textarea.value = solutionEntry;
    solution.value = 'Hide solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Show solution';
  }
  updateCode();
});

const jsSolution = 'const list = document.querySelector(\'.output ul\');' +
'\nlist.innerHTML = \'\';' +
'\nlet greetings = [\'Happy Birthday!\',' +
'\n                 \'Merry Christmas my love\',' +
'\n                 \'A happy Christmas to all the family\',' +
'\n                 \'You\\\'re all I want for Christmas\',' +
'\n                 \'Get well soon\'];' +
'\n' +
'\nfor (let i = 0; i < greetings.length; i++) {' +
'\n  let input = greetings[i];' +
'\n  if (greetings[i].indexOf(\'Christmas\') !== -1) {' +
'\n    let result = input;' +
'\n    let listItem = document.createElement(\'li\');' +
'\n    listItem.textContent = result;' +
'\n    list.appendChild(listItem);' +
'\n  }' +
'\n}';

let solutionEntry = jsSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = (textarea.value).substring(0, caretPos);
  const back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);

  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if(solution.value === 'Show solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Filtering_greeting_messages', '100%', 600) }}

### Fixing capitalization

In this exercise we have the names of cities in the United Kingdom, but the capitalization is all messed up. We want you to change them so that they are all lower case, except for a capital first letter. A good way to do this is to:

1.  Convert the whole of the string contained in the `input` variable to lower case and store it in a new variable.
2.  Grab the first letter of the string in this new variable and store it in another variable.
3.  Using this latest variable as a substring, replace the first letter of the lowercase string with the first letter of the lowercase string changed to upper case. Store the result of this replace procedure in another new variable.
4.  Change the value of the `result` variable to equal to the final result, not the `input`.

> **Note:** A hint — the parameters of the string methods don't have to be string literals; they can also be variables, or even variables with a method being invoked on them.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 125px;">

<ul>

</ul>

</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="playable-code" style="height: 250px; width: 95%">
const list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  // write your code just below here

  let result = input;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution">
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById('code');
const reset = document.getElementById('reset');
const solution = document.getElementById('solution');
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = 'Show solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Show solution') {
    textarea.value = solutionEntry;
    solution.value = 'Hide solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Show solution';
  }
  updateCode();
});

const jsSolution = 'const list = document.querySelector(\'.output ul\');' +
'\nlist.innerHTML = \'\';' +
'\nlet cities = [\'lonDon\', \'ManCHESTer\', \'BiRmiNGHAM\', \'liVERpoOL\'];' +
'\n' +
'\nfor (let i = 0; i < cities.length; i++) {' +
'\n  let input = cities[i];' +
'\n  let lower = input.toLowerCase();' +
'\n  let firstLetter = lower.slice(0,1);' +
'\n  let capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());' +
'\n  let result = capitalized;' +
'\n  let listItem = document.createElement(\'li\');' +
'\n  listItem.textContent = result;' +
'\n  list.appendChild(listItem);' +
'\n' +
'\n}';

let solutionEntry = jsSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = (textarea.value).substring(0, caretPos);
  const back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);

  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if(solution.value === 'Show solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Fixing_capitalization', '100%', 550) }}

### Making new strings from old parts

In this last exercise, the array contains a bunch of strings containing information about train stations in the North of England. The strings are data items that contain the three-letter station code, followed by some machine-readable data, followed by a semicolon, followed by the human-readable station name. For example:

    MAN675847583748sjt567654;Manchester Piccadilly

We want to extract the station code and name, and put them together in a string with the following structure:

    MAN: Manchester Piccadilly

We'd recommend doing it like this:

1.  Extract the three-letter station code and store it in a new variable.
2.  Find the character index number of the semicolon.
3.  Extract the human-readable station name using the semicolon character index number as a reference point, and store it in a new variable.
4.  Concatenate the two new variables and a string literal to make the final string.
5.  Change the value of the `result` variable to equal to the final string, not the `input`.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 125px;">

<ul>

</ul>

</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="playable-code" style="height: 285px; width: 95%">
const list = document.querySelector('.output ul');
list.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let i = 0; i < stations.length; i++) {
  let input = stations[i];
  // write your code just below here

  let result = input;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution">
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById('code');
const reset = document.getElementById('reset');
const solution = document.getElementById('solution');
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = 'Show solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Show solution') {
    textarea.value = solutionEntry;
    solution.value = 'Hide solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Show solution';
  }
  updateCode();
});

const jsSolution = 'const list = document.querySelector(\'.output ul\');' +
'\nlist.innerHTML = \'\';' +
'\nlet stations = [\'MAN675847583748sjt567654;Manchester Piccadilly\',' +
'\n                \'GNF576746573fhdg4737dh4;Greenfield\',' +
'\n                \'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street\',' +
'\n                \'SYB4f65hf75f736463;Stalybridge\',' +
'\n                \'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield\'];' +
'\n' +
'\nfor (let i = 0; i < stations.length; i++) {' +
'\n  let input = stations[i];' +
'\n  let code = input.slice(0,3);' +
'\n  let semiC = input.indexOf(\';\');' +
'\n  let name = input.slice(semiC + 1);' +
'\n  let result = code + \': \' + name;' +
'\n  let listItem = document.createElement(\'li\');' +
'\n  listItem.textContent = result;' +
'\n  list.appendChild(listItem);' +
'\n}';

let solutionEntry = jsSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = (textarea.value).substring(0, caretPos);
  const back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);

  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if(solution.value === 'Show solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Making_new_strings_from_old_parts', '100%', 600) }}

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Strings](/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Strings).

## Conclusion

You can't escape the fact that being able to handle words and sentences in programming is very important — particularly in JavaScript, as websites are all about communicating with people. This article has given you the basics that you need to know about manipulating strings for now. This should serve you well as you go into more complex topics in the future. Next, we're going to look at the last major type of data we need to focus on in the short term — arrays.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

## In this module

- [What is JavaScript?](/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [A first splash into JavaScript](/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)
- [What went wrong? Troubleshooting JavaScript](/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [Storing the information you need — Variables](/en-US/docs/Learn/JavaScript/First_steps/Variables)
- [Basic math in JavaScript — numbers and operators](/en-US/docs/Learn/JavaScript/First_steps/Math)
- [Handling text — strings in JavaScript](/en-US/docs/Learn/JavaScript/First_steps/Strings)
- [Useful string methods](/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- [Arrays](/en-US/docs/Learn/JavaScript/First_steps/Arrays)
- [Assessment: Silly story generator](/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator)
