---
title: Template literals (Template strings)
slug: Web/JavaScript/Reference/Template_literals
tags:
  - ECMAScript 2015
  - Guide
  - JavaScript
  - React
  - String
  - Template Strings
  - Template literals
  - Template string
  - strings
browser-compat: javascript.grammar.template_literals
---
{{JsSidebar("More")}}

Template literals are literals delimited with backtick (\`) characters, allowing for [multi-line strings](#multi-line_strings), for [string interpolation](#string_interpolation) with embedded expressions, and for special constructs called [tagged templates](#tagged_templates).

Template literals are sometimes informally called _template strings_, because they are used most commonly for [string interpolation](#string_interpolation) (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom [tag function](#tagged_templates) to perform whatever operations you want on the different parts of the template literal.

## Syntax

```js
// Untagged, these create strings:
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

// Tagged, this calls the function "tagFunction" with the template as the
// first argument and substitution values as subsequent arguments:
tagFunction`string text ${expression} string text`
```

## Description

Template literals are enclosed by backtick (\`) characters instead of double or single quotes.

Along with having normal strings, template literals can also contain other parts called _placeholders_, which are embedded expressions delimited by a dollar sign and curly braces: `${expression}`. The strings and placeholders get passed to a function — either a default function, or a function you supply. The default function (when you don't supply your own) just performs [string interpolation](#string_interpolation) to do substitution of the placeholders and then concatenate the parts into a single string.

To supply a function of your own, precede the template literal with a function name; the result is called a [**tagged template**](#tagged_templates). In that case, the template literal is passed to your tag function, where you can then perform whatever operations you want on the different parts of the template literal.

To escape a backtick in a template literal, put a backslash (`\`) before the backtick.

```js
`\`` === '`' // --> true
```

Dollar signs can be escaped as well to prevent interpolation.

```js
`\${1}` === '${1}' // --> true
```

### Multi-line strings

Any newline characters inserted in the source are part of the template literal.

Using normal strings, you would have to use the following syntax in order to get multi-line strings:

```js
console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"
```

Using template literals, you can do the same with this:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### String interpolation

Without template literals, when you want to combine output from expressions with strings, you'd [concatenate them](/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenation_using_) using the [addition operator](/en-US/docs/Web/JavaScript/Reference/Operators/Addition) `+`:

```js
const a = 5;
const b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."
```

That can be hard to read – especially when you have multiple expressions.

With template literals, you can avoid the concatenation operator — and improve the readability of your code — by using placeholders of the form `${expression}` to perform substitutions for embedded expressions:

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Note that there's a mild difference between the two syntaxes. Addition would coerce the expression to a _primitive_, which calls [`valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) in priority; on the other hand, template literal would coerce the expression to a _string_, which calls [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) in priority. If the expression has a [`@@toPrimitive`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) method, string concatenation calls it with `"default"` as hint, while template literals use `"string"`. This is important for objects that have different string and primitive representations — such as [Temporal](https://github.com/tc39/proposal-temporal), whose `valueOf()` method throws.

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
```

### Nesting templates

In certain cases, nesting a template is the easiest (and perhaps more readable) way to have configurable strings. Within a backtick-delimited template, it is simple to allow inner backticks by using them inside an `${expression}` placeholder within the template.

For example, without template literals, if you wanted to return a certain value based on a particular condition, you could do something like the following:

```js example-bad
let classes = 'header';
classes += (isLargeScreen() ?
  '' : item.isCollapsed ?
    ' icon-expander' : ' icon-collapser');
```

With a template literal but without nesting, you could do this:

```js example-bad
const classes = `header ${ isLargeScreen() ? '' :
  (item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;
```

With nesting of template literals, you can do this:

```js example-good
const classes = `header ${ isLargeScreen() ? '' :
  `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;
```

### Tagged templates

A more advanced form of template literals are _tagged_ templates.

Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.

The tag function can then perform whatever operations on these arguments you wish, and return the manipulated string. (Alternatively, it can return something completely different, as described in one of the following examples.)

The name of the function used for the tag can be whatever you want.

```js
const person = 'Mike';
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? 'centenarian' : 'youngster';

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.
```

Tag functions don't even need to return a string!

```js
function template(strings, ...keys) {
  return (...values) => {
    const dict = values[values.length - 1] || {};
    const result = [strings[0]];
    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  };
}

const t1Closure = template`${0}${1}${0}!`;
// const t1Closure = template(["","","","!"],0,1,0);
t1Closure('Y', 'A');                      // "YAY!"

const t2Closure = template`${0} ${'foo'}!`;
// const t2Closure = template([""," ","!"],0,"foo");
t2Closure('Hello', { foo: 'World' }); // "Hello World!"

const t3Closure = template`I'm ${'name'}. I'm almost ${'age'} years old.`;
// const t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
t3Closure('foo', { name: 'MDN', age: 30 }); // "I'm MDN. I'm almost 30 years old."
t3Closure({ name: 'MDN', age: 30 }); // "I'm MDN. I'm almost 30 years old."
```

The first argument received by the tag function is an array of strings. For any template literal, its length is equal to the number of substitutions (occurrences of `${…}`) plus one, and is therefore always non-empty.

For any particular tagged template literal expression, the tag function will always be called with the exact same literal array, no matter how many times the literal is evaluated.

```js
const callHistory = [];

function tag(strings, ...values) {
  callHistory.push(strings);
  // Return a freshly made object
  return {};
}

function evaluateLiteral() {
  return tag`Hello, ${'world'}!`;
}

console.log(evaluateLiteral() === evaluateLiteral()); // false; each time `tag` is called, it returns a new object
console.log(callHistory[0] === callHistory[1]); // true; all evaluations of the same tagged literal would pass in the same strings array
```

This allows the tag to cache the result based on the identity of its first argument. To further ensure the array value's stability, the first argument and its [`raw` property](#raw_strings) are both [frozen](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen), so you can't mutate them in any way.

### Raw strings

The special `raw` property, available on the first argument to the tag function, allows you to access the raw strings as they were entered, without processing [escape sequences](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings).

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
```

In addition, the {{jsxref("String.raw()")}} method exists to create raw strings just like the default template function and string concatenation would create.

```js
const str = String.raw`Hi\n${2+3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(',');
// "H,i,\\,n,5,!"
```

`String.raw` functions like an "identity" tag if the literal doesn't contain any escape sequences. In case you want an actual identity tag that always works as if the literal is untagged, you can make a custom function that passes the "cooked" (i.e. escape sequences are processed) literal array to `String.raw`, pretending they are raw strings.

```js
const identity = (strings, ...values) => String.raw({ raw: strings }, ...values);
console.log(identity`Hi\n${2 + 3}!`);
// Hi
// 5!
```

This is useful for many tools which give special treatment to literals tagged by a particular name.

```js
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Some formatters will format this literal's content as HTML
const doc = html`<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
`;
```

### Tagged templates and escape sequences

In normal template literals, the following escape sequences are allowed:

- Unicode escapes started by `\u`, for example `\u00A9`
- Unicode code point escapes indicated by `\u{}`, for example `\u{2F804}`
- Hexadecimal escapes started by `\x`, for example `\xA9`
- Octal literal escapes started by `\0o` and followed by one or more digits, for example `\0o251`

Any other non-well-formed escape sequence (e.g. one that begins with `\u` but is not followed by a four-digit hex sequence) is a syntax error. However, this is problematic for tagged templates, which, in addition to the "cooked" literal, also have access to the raw literals (escape sequences are preserved as-is).

Tagged templates should allow the embedding of languages (for example [DSLs](https://en.wikipedia.org/wiki/Domain-specific_language), or [LaTeX](https://en.wikipedia.org/wiki/LaTeX)), where other escapes sequences are common. Therefore, the syntax restriction of well-formed escape sequences is removed from tagged templates.

```js
latex`\unicode`
// Throws in older ECMAScript versions (ES2016 and earlier)
// SyntaxError: malformed Unicode character escape sequence
```

However, illegal escape sequences must still be represented in the "cooked" representation. They will show up as {{jsxref("undefined")}} element in the "cooked" array:

```js
function latex(str) {
  return { "cooked": str[0], "raw": str.raw[0] }
}

latex`\unicode`

// { cooked: undefined, raw: "\\unicode" }
```

Note that the escape-sequence restriction is only dropped from _tagged_ templates—not from _untagged_ template literals:

```js example-bad
const bad = `bad escape sequence: \unicode`;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Template-like strings in ES3 compatible syntax](https://gist.github.com/WebReflection/8f227532143e63649804)
- ["ES6 in Depth: Template strings" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/)
