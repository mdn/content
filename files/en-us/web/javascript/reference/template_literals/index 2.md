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

Template literals are literals delimited with backticks (<code>`</code>), allowing embedded expressions called *substitutions*.

* *Untagged* template literals result in strings, which makes them useful for string interpolation (and multiline strings, since unescaped newlines are allowed).

* *Tagged* template literals call a function (the *tag function*) with an array of any text segments from the literal followed by arguments with the values of any substitutions, which is useful for [DSLs](https://en.wikipedia.org/wiki/Domain-specific_language).

Template literals are sometimes informally called *template strings*, but they aren't string literals and can't be used everywhere a string literal can be used. Also, a tagged template literal may not result in a string; it's up to the tag function what it creates (if anything).


## Syntax

```js
// Untagged, these create strings:
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

// Tagged, this calls the function "example" with the template as the
// first argument and substitution values as subsequent arguments:
example`string text ${expression} string text`
```

## Description

Template literals are enclosed by the backtick (\` \`) ([grave accent](https://en.wikipedia.org/wiki/Grave_accent)) character instead
of double or single quotes.

Template literals can contain placeholders. These are indicated by the dollar sign and
curly braces (`${expression}`). The expressions in the
placeholders and the text between the backticks (\` \`) get passed to a function.

The default function just concatenates the parts into a single string. If there is an
expression preceding the template literal (`tag` here), this is
called a **tagged template**. In that case, the tag expression (usually
a function) gets called with the template literal, which you can then manipulate before
outputting.

To escape a backtick in a template literal, put a backslash (`\`) before the
backtick.

```js
`\`` === '`' // --> true
```

### Multi-line strings

Any newline characters inserted in the source are part of the template literal.

Using normal strings, you would have to use the following syntax in order to get
multi-line strings:

```js
console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"
```

Using template literals, you can do the same like this:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### Expression interpolation

In order to embed expressions within normal strings, you would use the following
syntax:

```js
let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."
```

Now, with template literals, you are able to make use of the syntactic sugar, making
substitutions like this more readable:

```js
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

### Nesting templates

In certain cases, nesting a template is the easiest (and perhaps more readable) way to
have configurable strings. Within a backticked template, it is simple to allow inner
backticks by using them inside a placeholder `${ }` within the template.

For instance, if condition a is `true`, then `return` this
templated literal.

In ES5:

```js
let classes = 'header';
classes += (isLargeScreen() ?
  '' : item.isCollapsed ?
    ' icon-expander' : ' icon-collapser');
```

In ES2015 with template literals and without nesting:

```js
const classes = `header ${ isLargeScreen() ? '' :
  (item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;
```

In ES2015 with nested template literals:

```js
const classes = `header ${ isLargeScreen() ? '' :
  `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;
```

### Tagged templates

A more advanced form of template literals are _tagged_ templates.

Tags allow you to parse template literals with a function. The first argument of a tag
function contains an array of string values. The remaining arguments are related to the
expressions.

The tag function can then perform whatever operations on these arguments you wish, and
return the manipulated string. (Alternatively, it can return something completely
different, as described in one of the following examples.)

The name of the function used for the tag can be whatever you want.

```js
let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."

  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${ person } is a ${ age }.`;

console.log(output);
// That Mike is a youngster.
```

Tag functions don't even need to return a string!

```js
function template(strings, ...keys) {
  return (function(...values) {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function(key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

let t1Closure = template`${0}${1}${0}!`;
//let t1Closure = template(["","","","!"],0,1,0);
t1Closure('Y', 'A');                      // "YAY!"

let t2Closure = template`${0} ${'foo'}!`;
//let t2Closure = template([""," ","!"],0,"foo");
t2Closure('Hello', {foo: 'World'}); // "Hello World!"

let t3Closure = template`I'm ${'name'}. I'm almost ${'age'} years old.`;
//let t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
t3Closure('foo', {name: 'MDN', age: 30}); //"I'm MDN. I'm almost 30 years old."
t3Closure({name: 'MDN', age: 30}); //"I'm MDN. I'm almost 30 years old."
```

### Raw strings

The special `raw` property, available on the first argument to the tag
function, allows you to access the raw strings as they were entered, without processing
[escape
sequences](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings).

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
```

In addition, the {{jsxref("String.raw()")}} method exists to create raw strings—just
like the default template function and string concatenation would create.

```js
let str = String.raw`Hi\n${2+3}!`;
// "Hi\\n5!"

str.length;
// 6

Array.from(str).join(',');
// "H,i,\\,n,5,!"
```

### Tagged templates and escape sequences

#### ES2016 behavior

As of ECMAScript 2016, tagged templates conform to the rules of the following escape
sequences:

- Unicode escapes started by "`\u`", for example `\u00A9`
- Unicode code point escapes indicated by "`\u{}`", for example
  `\u{2F804}`
- Hexadecimal escapes started by "`\x`", for example `\xA9`
- Octal literal escapes started by "`\0o`" and followed by one or more
  digits, for example `\0o251`

This means that a tagged template like the following is problematic, because, per
ECMAScript grammar, a parser looks for valid Unicode escape sequences, but finds
malformed syntax:

```js
latex`\unicode`
// Throws in older ECMAScript versions (ES2016 and earlier)
// SyntaxError: malformed Unicode character escape sequence
```

#### ES2018 revision of illegal escape sequences

Tagged templates should allow the embedding of languages (for example [DSLs](https://en.wikipedia.org/wiki/Domain-specific_language), or [LaTeX](https://en.wikipedia.org/wiki/LaTeX)), where other escapes sequences
are common. The ECMAScript proposal [Template Literal
Revision](https://tc39.github.io/proposal-template-literal-revision/) (Stage 4, to be integrated in the ECMAScript 2018 standard) removes the
syntax restriction of ECMAScript escape sequences from tagged templates.

However, illegal escape sequences must still be represented in the “cooked”
representation. They will show up as {{jsxref("undefined")}} element in the “cooked”
array:

```js
function latex(str) {
  return { "cooked": str[0], "raw": str.raw[0] }
}

latex`\unicode`

// { cooked: undefined, raw: "\\unicode" }
```

Note that the escape sequence restriction is only dropped from _tagged_
templates—not from _untagged_ template literals:

```js example-bad
let bad = `bad escape sequence: \unicode`;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Template-like
  strings in ES3 compatible syntax](https://gist.github.com/WebReflection/8f227532143e63649804)
- ["ES6 in
  Depth: Template strings" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/)
