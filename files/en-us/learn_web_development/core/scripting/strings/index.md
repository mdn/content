---
title: Handling text — strings in JavaScript
slug: Learn_web_development/Core/Scripting/Strings
page-type: learn-module-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}

Next, we'll turn our attention to strings — this is what pieces of text are called in programming. In this article, we'll look at all the common things that you really ought to know about strings when learning JavaScript, such as creating strings, escaping quotes in strings, and joining strings together.

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
          <li>Creating string literals.</li>
          <li>The requirement for quotes to match.</li>
          <li>String concatenation.</li>
          <li>Escaping characters in strings.</li>
          <li>Template literals, including using variables and multiline template literals.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## The power of words

Words are very important to humans — they are a large part of how we communicate. Since the web is a largely text-based medium designed to allow humans to communicate and share information, it is useful for us to have control over the words that appear on it. {{glossary("HTML")}} provides structure and meaning to text, {{glossary("CSS")}} allows us to precisely style it, and JavaScript offers many features for manipulating strings. These include creating custom welcome messages and prompts, showing the right text labels when needed, sorting terms into the desired order, and much more.

Pretty much all of the programs we've shown you so far in the course have involved some string manipulation.

## Declaring strings

Strings are dealt with similarly to numbers at first glance, but when you dig deeper you'll start to see some notable differences. Let's start by entering some basic lines into the [browser developer console](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) to familiarize ourselves.

To start with, enter the following lines:

```js
const string = "The revolution will not be televised.";
console.log(string);
```

Just like we did with numbers, we are declaring a variable, initializing it with a string value, and then returning the value. The only difference here is that when writing a string, you need to surround the value with quotes.

If you don't do this, or miss one of the quotes, you'll get an error. Try entering the following lines:

```js example-bad
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
```

These lines don't work because any text without quotes around it is interpreted as a variable name, property name, reserved word, or similar. If the browser doesn't recognize the unquoted text, then an error is raised (e.g., "missing; before statement"). If the browser can detect where a string starts but not its end (owing to the missing second quote), it reports an "unterminated string literal" error. If your program is raising such errors, then go back and check all your strings to make sure you have no missing quotation marks.

The following will work if you previously defined the variable `string` — try it now:

```js
const badString = string;
console.log(badString);
```

`badString` is now set to have the same value as `string`.

### Single quotes, double quotes, and backticks

In JavaScript, you can choose single quotes (`'`), double quotes (`"`), or backticks (`` ` ``) to wrap your strings in. All of the following will work:

```js-nolint
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);
```

You must use the same character for the start and end of a string, or you will get an error:

```js-nolint example-bad
const badQuotes = 'This is not allowed!";
```

Strings declared using single quotes and strings declared using double quotes are the same, and which you use is down to personal preference — although it is good practice to choose one style and use it consistently in your code.

Strings declared using backticks are a special kind of string called a [_template literal_](/en-US/docs/Web/JavaScript/Reference/Template_literals). In most ways, template literals are like normal strings, but they have some special properties:

- you can [embed JavaScript](#embedding_javascript) in them
- you can declare template literals over [multiple lines](#multiline_strings)

## Embedding JavaScript

Inside a template literal, you can wrap JavaScript variables or expressions inside `${ }`, and the result will be included in the string:

```js
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"
```

You can use the same technique to join together two variables:

```js
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
```

Joining strings together like this is called _concatenation_.

### Concatenation in context

Let's have a look at concatenation being used in action:

```html live-sample___string-concat
<button>Press me</button>
<div id="greeting"></div>
```

```js live-sample___string-concat
const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);
```

{{EmbedLiveSample('string-concat', , '50', , , , , 'allow-modals')}}

Here, we are using the {{domxref("window.prompt()", "window.prompt()")}} function, which prompts the user to answer a question via a popup dialog box and then stores the text they enter inside a given variable — in this case `name`. We then display a string that inserts the name into a generic greeting message.

### Concatenation using "+"

You can use `${}` only with template literals, not normal strings. You can concatenate normal strings using the `+` operator:

```js
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
```

However, template literals usually give you more readable code:

```js
const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"
```

### Including expressions in strings

You can include JavaScript expressions in template literals, as well as just variables, and the results will be included in the result:

```js
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."
```

## Multiline strings

Template literals respect the line breaks in the source code, so you can write strings that span multiple lines like this:

```js
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

To have the equivalent output using a normal string you'd have to include line break characters (`\n`) in the string:

```js
const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
```

See our [Template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals) reference page for more examples and details of advanced features.

## Including quotes in strings

Since we use quotes to indicate the start and end of strings, how can we include actual quotes in strings? We know that this won't work:

```js-nolint example-bad
const badQuotes = "She said "I think so!"";
```

One common option is to use one of the other characters to declare the string:

```js-nolint
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
```

Another option is to _escape_ the problem quotation mark. Escaping characters means that we do something to them to make sure they are recognized as text, not part of the code. In JavaScript, we do this by putting a backslash just before the character. Try this:

```js-nolint
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

You can use the same technique to insert other special characters. See [Escape sequences](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) for more details.

## Numbers vs. strings

What happens when we try to concatenate a string and a number? Let's try it in our console:

```js
const name = "Front ";
const number = 242;
console.log(name + number); // "Front 242"
```

You might expect this to return an error, but it works just fine. How numbers should be displayed as strings is fairly well-defined, so the browser automatically converts the number to a string and concatenates the two strings.

If you have a numeric variable that you want to convert to a string or a string variable that you want to convert to a number, you can use the following two constructs:

- The {{jsxref("Number/Number", "Number()")}} function converts anything passed to it into a number if it can. Try the following:

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  // number
  ```

- Conversely, the {{jsxref("String/String", "String()")}} function converts its argument to a string. Try this:

  ```js
  const myNum2 = 123;
  const myString2 = String(myNum2);
  console.log(typeof myString2);
  // string
  ```

These constructs can be really useful in some situations. For example, if a user enters a number into a form's text field, it's a string. However, if you want to add this number to something, you'll need it to be a number, so you could pass it through `Number()` to handle this. We did exactly this in our [Number Guessing Game](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html), in the `checkGuess` function.

## Summary

So that's the very basics of strings covered in JavaScript. In the next article, we'll build on this, looking at some of the built-in methods available to strings in JavaScript and how we can use them to manipulate our strings into just the form we want.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}
