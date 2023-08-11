---
title: Handling text — strings in JavaScript
slug: Learn/JavaScript/First_steps/Strings
page-type: learn-module-chapter
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

Words are very important to humans — they are a large part of how we communicate. Since the Web is a largely text-based medium designed to allow humans to communicate and share information, it is useful for us to have control over the words that appear on it. {{glossary("HTML")}} provides structure and meaning to our text, {{glossary("CSS")}} allows us to precisely style it, and JavaScript contains a number of features for manipulating strings, creating custom welcome messages and prompts, showing the right text labels when needed, sorting terms into the desired order, and much more.

Pretty much all of the programs we've shown you so far in the course have involved some string manipulation.

## Strings — the basics

Strings are dealt with similarly to numbers at first glance, but when you dig deeper you'll start to see some notable differences. Let's start by entering some basic lines into the [browser developer console](/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) to familiarize ourselves.

### Creating a string

1. To start with, enter the following lines:

   ```js
   const string = "The revolution will not be televised.";
   console.log(string);
   ```

   Just like we did with numbers, we are declaring a variable, initializing it with a string value, and then returning the value. The only difference here is that when writing a string, you need to surround the value with quotes.

2. If you don't do this, or miss one of the quotes, you'll get an error. Try entering the following lines:

   ```js example-bad
   const badString1 = This is a test;
   const badString2 = 'This is a test;
   const badString3 = This is a test';
   ```

   These lines don't work because any text without quotes around it is assumed to be a variable name, property name, a reserved word, or similar. If the browser can't find it, then an error is raised (e.g. "missing; before statement"). If the browser can see where a string starts, but can't find the end of the string, as indicated by the 2nd quote, it complains with an error (with "unterminated string literal"). If your program is raising such errors, then go back and check all your strings to make sure you have no missing quote marks.

3. The following will work if you previously defined the variable `string` — try it now:

   ```js
   const badString = string;
   console.log(badString);
   ```

   `badString` is now set to have the same value as `string`.

### Single quotes vs. double quotes

1. In JavaScript, you can choose single quotes or double quotes to wrap your strings in. Both of the following will work okay:

   ```js-nolint
   const sgl = 'Single quotes.';
   const dbl = "Double quotes";
   console.log(sgl);
   console.log(dbl);
   ```

2. There is very little difference between the two, and which you use is down to personal preference. You should choose one and stick to it, however; differently quoted code can be confusing, especially if you use two different quotes on the same string! The following will return an error:

   ```js-nolint example-bad
   const badQuotes = 'What on earth?";
   ```

3. The browser will think the string has not been closed because the other type of quote you are not using to contain your strings can appear in the string. For example, both of these are okay:

   ```js
   const sglDbl = 'Would you eat a "fish supper"?';
   const dblSgl = "I'm feeling blue.";
   console.log(sglDbl);
   console.log(dblSgl);
   ```

4. However, you can't include the same quote mark inside the string if it's being used to contain them. The following will error, as it confuses the browser as to where the string ends:

   ```js-nolint example-bad
   const bigmouth = 'I've got no right to take my place…';
   ```

   This leads us very nicely into our next subject.

### Escaping characters in a string

To fix our previous problem code line, we need to escape the problem quote mark. Escaping characters means that we do something to them to make sure they are recognized as text, not part of the code. In JavaScript, we do this by putting a backslash just before the character. Try this:

```js-nolint
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

This works fine. You can escape other characters in the same way, e.g. `\"`, and there are some special codes besides. See [Escape sequences](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) for more details.

## Concatenating strings

Concatenate just means "join together". To join together strings in JavaScript you can use a different type of string, called a _template literal_.

A template literal looks just like a normal string, but instead of using single or double quote marks (`'` or `"`), you use backtick characters (`` ` ``):

```js
const greeting = `Hello`;
```

This can work just like a normal string, except you can include variables in it, wrapped inside `${ }` characters, and the variable's value will be inserted into the result:

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

### Concatenation in context

Let's have a look at concatenation being used in action:

```html
<button>Press me</button>
```

```js
const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener("click", greet);
```

{{ EmbedLiveSample('Concatenation_in_context', '100%', 50) }}

Here we're using the {{domxref("window.prompt()", "window.prompt()")}} function, which asks the user to answer a question via a popup dialog box then stores the text they enter inside a given variable — in this case `name`. We then use the {{domxref("window.alert()", "window.alert()")}} function to display another popup containing a string which inserts the name into a generic greeting message.

### Concatenation using "+"

You can also concatenate strings using the `+` operator:

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

## Numbers vs. strings

So what happens when we try to combine a string and a number? Let's try it in our console:

```js
const name = "Front ";
const number = 242;
console.log(`${name}${number}`); // "Front 242"
```

You might expect this to return an error, but it works just fine. Trying to represent a string as a number doesn't really make sense, but representing a number as a string does, so the browser converts the number to a string and concatenates the two strings.

If you have a numeric variable that you want to convert to a string but not change otherwise, or a string variable that you want to convert to a number but not change otherwise, you can use the following two constructs:

- The {{jsxref("Number/Number", "Number()")}} function converts anything passed to it into a number, if it can. Try the following:

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  ```

- Conversely, every number has a method called [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) that converts it to the equivalent string. Try this:

  ```js
  const myNum2 = 123;
  const myString2 = myNum2.toString();
  console.log(typeof myString2);
  ```

These constructs can be really useful in some situations. For example, if a user enters a number into a form's text field, it's a string. However, if you want to add this number to something, you'll need it to be a number, so you could pass it through `Number()` to handle this. We did exactly this in our [Number Guessing Game, in line 59](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L59).

## Including expressions in strings

You can include JavaScript expressions in template literals, as well as simple variables, and the results will be included in the result:

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
const output = `I like the song.
I gave it a score of 90%.`;
console.log(output);

/*
I like the song.
I gave it a score of 90%.
*/
```

To have the equivalent output using a normal string you'd have to include line break characters (`\n`) in the string:

```js
const output = "I like the song.\nI gave it a score of 90%.";
console.log(output);

/*
I like the song.
I gave it a score of 90%.
*/
```

See our [Template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals) reference page for more examples and details of advanced features.

## Conclusion

So that's the very basics of strings covered in JavaScript. In the next article, we'll build on this, looking at some of the built-in methods available to strings in JavaScript and how we can use them to manipulate our strings into just the form we want.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}
