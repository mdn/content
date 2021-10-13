---
title: Handling text — strings in JavaScript
slug: Learn/JavaScript/First_steps/Strings
tags:
  - Article
  - Beginner
  - CodingScripting
  - Guide
  - JavaScript
  - Join
  - Quotes
  - concatenation
  - l10n:priority
  - strings
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

Next, we'll turn our attention to strings — this is what pieces of text are called in programming. In this article, we'll look at all the common things that you really ought to know about strings when learning JavaScript, such as creating strings, escaping quotes in strings, and joining strings together.

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
      <td>To gain familiarity with the basics of strings in JavaScript.</td>
    </tr>
  </tbody>
</table>

## The power of words

Words are very important to humans — they are a large part of how we communicate. Since the Web is a largely text-based medium designed to allow humans to communicate and share information, it is useful for us to have control over the words that appear on it. {{glossary("HTML")}} provides structure and meaning to our text, {{glossary("CSS")}} allows us to precisely style it, and JavaScript contains a number of features for manipulating strings, creating custom welcome messages and prompts, showing the right text labels when needed, sorting terms into the desired order, and much more.

Pretty much all of the programs we've shown you so far in the course have involved some string manipulation.

## Strings — the basics

Strings are dealt with similarly to numbers at first glance, but when you dig deeper you'll start to see some notable differences. Let's start by entering some basic lines into the [browser developer console](/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools) to familiarize ourselves.

### Creating a string

1.  To start with, enter the following lines:

    ```js
    let string = 'The revolution will not be televised.';
    string;
    ```

    Just like we did with numbers, we are declaring a variable, initializing it with a string value, and then returning the value. The only difference here is that when writing a string, you need to surround the value with quotes.

2.  If you don't do this, or miss one of the quotes, you'll get an error. Try entering the following lines:

    ```js example-bad
    let badString1 = This is a test;
    let badString2 = 'This is a test;
    let badString3 = This is a test';
    ```

    These lines don't work because any text without quotes around it is assumed to be a variable name, property name, a reserved word, or similar. If the browser can't find it, then an error is raised (e.g. "missing; before statement"). If the browser can see where a string starts, but can't find the end of the string, as indicated by the 2nd quote, it complains with an error (with "unterminated string literal"). If your program is raising such errors, then go back and check all your strings to make sure you have no missing quote marks.

3.  The following will work if you previously defined the variable `string` — try it now:

    ```js
    let badString = string;
    badString;
    ```

    `badString` is now set to have the same value as `string`.

### Single quotes vs. double quotes

1.  In JavaScript, you can choose single quotes or double quotes to wrap your strings in. Both of the following will work okay:

    ```js
    let sgl = 'Single quotes.';
    let dbl = "Double quotes";
    sgl;
    dbl;
    ```

2.  There is very little difference between the two, and which you use is down to personal preference. You should choose one and stick to it, however; differently quoted code can be confusing, especially if you use two different quotes on the same string! The following will return an error:

    ```js example-bad
    let badQuotes = 'What on earth?";
    ```

3.  The browser will think the string has not been closed because the other type of quote you are not using to contain your strings can appear in the string. For example, both of these are okay:

    ```js
    let sglDbl = 'Would you eat a "fish supper"?';
    let dblSgl = "I'm feeling blue.";
    sglDbl;
    dblSgl;
    ```

4.  However, you can't include the same quote mark inside the string if it's being used to contain them. The following will error, as it confuses the browser as to where the string ends:

    ```js example-bad
    let bigmouth = 'I've got no right to take my place...';
    ```

    This leads us very nicely into our next subject.

### Escaping characters in a string

To fix our previous problem code line, we need to escape the problem quote mark. Escaping characters means that we do something to them to make sure they are recognized as text, not part of the code. In JavaScript, we do this by putting a backslash just before the character. Try this:

```js
let bigmouth = 'I\'ve got no right to take my place...';
bigmouth;
```

This works fine. You can escape other characters in the same way, e.g. `\"`,  and there are some special codes besides. See [Escape sequences](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences) for more details.

## Concatenating strings

1.  Concatenate is a fancy programming word that means "join together". Joining together strings in JavaScript uses the plus (+) operator, the same one we use to add numbers together, but in this context it does something different. Let's try an example in our console.

    ```js
    let one = 'Hello, ';
    let two = 'how are you?';
    let joined = one + two;
    joined;
    ```

    The result of this is a variable called `joined`, which contains the value "Hello, how are you?".

2.  In the last instance, we joined only two strings, but you can join as many as you like, as long as you include a `+` between each pair. Try this:

    ```js
    let multiple = one + one + one + one + two;
    multiple;
    ```

3.  You can also use a mix of variables and actual strings. Try this:

    ```js
    let response = one + 'I am fine — ' + two;
    response;
    ```

> **Note:** When you enter an actual string in your code, enclosed in single or double quotes, it is called a **string literal**.

### Concatenation in context

Let's have a look at concatenation being used in action — here's an example from earlier in the course:

```html
<button>Press me</button>
```

```js
const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}
```

{{ EmbedLiveSample('Concatenation_in_context', '100%', 50, "", "", "hide-codepen-jsfiddle") }}

Here we're using a {{domxref("window.prompt()", "window.prompt()")}} function in line 4, which asks the user to answer a question via a popup dialog box then stores the text they enter inside a given variable — in this case `name`. We then use a {{domxref("window.alert()", "window.alert()")}} function in line 5 to display another popup containing a string we've assembled from two string literals and the `name` variable, via concatenation.

### Numbers vs. strings

1.  So what happens when we try to add (or concatenate) a string and a number? Let's try it in our console:

    ```js
    'Front ' + 242;
    ```

    You might expect this to return an error,  but it works just fine. Trying to represent a string as a number doesn't really make sense, but representing a number as a string does, so the browser rather cleverly converts the number to a string and concatenates the two strings.

2.  You can even do this with two numbers — you can force a number to become a string by wrapping it in quote marks. Try the following (we are using the `typeof` operator to check whether the variable is a number or a string):

    ```js
    let myDate = '19' + '67';
    typeof myDate;
    ```

3.  If you have a numeric variable that you want to convert to a string but not change otherwise, or a string variable that you want to convert to a number but not change otherwise, you can use the following two constructs:

    - The {{jsxref("Number")}} object converts anything passed to it into a number, if it can. Try the following:

      ```js
      let myString = '123';
      let myNum = Number(myString);
      typeof myNum;
      ```

    - Conversely, every number has a method called [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) that converts it to the equivalent string. Try this:

      ```js
      let myNum2 = 123;
      let myString2 = myNum2.toString();
      typeof myString2;
      ```

    These constructs can be really useful in some situations. For example, if a user enters a number into a form's text field, it's a string. However, if you want to add this number to something, you'll need it to be a number, so you could pass it through `Number()` to handle this. We did exactly this in our [Number Guessing Game, in line 54](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L54).

## Template literals

Another type of string syntax that you may come across is **template literals** (sometimes referred to as template strings). This is a newer syntax that provides more flexible, easier to read strings.

> **Note:** Try entering the below examples into your browser's JavaScript console, to see what results you get.

To turn a standard string literal into a template literal, you have to replace the quote marks (`' '`, or `" "`) with backtick characters (`` ` ` ``). So, taking a simple example:

```js
let song = 'Fight the Youth';
```

Would be turned into a template literal like so:

```js
song = `Fight the Youth`;
```

If we want to concatenate strings, or include expression results inside them, traditional strings can be fiddly to write:

```js
let score = 9;
let highestScore = 10;
let output = 'I like the song "' + song + '". I gave it a score of ' + (score/highestScore * 100) + '%.';
```

Template literals simplify this enormously:

```js
output = `I like the song "${ song }". I gave it a score of ${ score/highestScore * 100 }%.`;
```

There is no more need to open and close multiple string pieces — the whole lot can just be wrapped in a single pair of backticks. When you want to include a variable or expression inside the string, you include it inside a `${ }` construct, which is called a _placeholder_.

You can include complex expressions inside template literals, for example:

```js
let examScore = 45;
let examHighestScore = 70;
examReport = `You scored ${ examScore }/${ examHighestScore } (${ Math.round(examScore/examHighestScore*100) }%). ${ examScore >= 49 ? 'Well done, you passed!' : 'Bad luck, you didn\'t pass this time.' }`;
```

- The first two placeholders here are pretty simple, only including a simple value in the string.
- The third one calculates a percentage result and rounds it to the nearest integer.
- The fourth one includes a ternary operator to check whether the score is above a certain mark and print a pass or fail message depending on the result.

Another point to note is that if you want to split a traditional string over multiple lines, you need to include a newline character, `\n`:

```js
output = 'I like the song "' + song + '".\nI gave it a score of ' + (score/highestScore * 100) + '%.';
```

Template literals respect the line breaks in the source code, so newline characters are no longer needed. This would achieve the same result:

```js
output = `I like the song "${ song }".
I gave it a score of ${ score/highestScore * 100 }%.`;
```

We would recommend that you get used to using template literals as soon as possible. They are well-supported in modern browsers, and the only place you'll find a lack of support is Internet Explorer. Many of our examples still use standard string literals, but we will include more template literals going forward.

See our [Template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals) reference page for more examples and details of advanced features.

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Strings](/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Strings). Note that this also requires knowledge from the next article, so you might want to read that first.

## Conclusion

So that's the very basics of strings covered in JavaScript. In the next article, we'll build on this, looking at some of the built-in methods available to strings in JavaScript and how we can use them to manipulate our strings into just the form we want.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

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
