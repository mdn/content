---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
tags:
  - Class
  - JavaScript
  - Reference
  - RegExp
  - Regular Expressions
  - Polyfill
browser-compat: javascript.builtins.RegExp
---
{{JSRef}}

The **`RegExp`** object is used for matching text with a pattern.

For an introduction to regular expressions, read the [Regular Expressions chapter](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) in the [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

## Description

### Literal notation and constructor

There are two ways to create a `RegExp` object: a _literal notation_ and a _constructor_.

- The _literal notation_ takes a pattern between two slashes, followed by optional flags, after the second slash.
- The _constructor function_ takes either a string or a `RegExp` object as its first parameter and a string of optional flags as its second parameter.

The following three expressions create the same regular expression object:

```js
const re = /ab+c/i; // literal notation
// OR
const re = new RegExp('ab+c', 'i'); // constructor with string pattern as first argument
// OR
const re = new RegExp(/ab+c/, 'i'); // constructor with regular expression literal as first argument
```

Before regular expressions can be used, they have to be compiled. This process allows them to perform matches more efficiently. More about the process can be found in [dotnet docs](https://docs.microsoft.com/en-us/dotnet/standard/base-types/compilation-and-reuse-in-regular-expressions).

The literal notation results in compilation of the regular expression when the expression is evaluated. On the other hand, the constructor of the `RegExp` object, `new RegExp('ab+c')`, results in runtime compilation of the regular expression.

Use a string as the first argument to the `RegExp()` constructor when you want to [build the regular expression from dynamic input](#building_a_regular_expression_from_dynamic_inputs).

### Flags in constructor

The expression `new RegExp(/ab+c/, flags)` will create a new `RegExp` using the source of the first parameter and the flags provided by the second.

When using the constructor function, the normal string escape rules (preceding special characters with `\` when included in a string) are necessary.

For example, the following are equivalent:

```js
const re = /\w+/;
// OR
const re = new RegExp('\\w+');
```

### Perl-like RegExp properties

Note that several of the {{JSxRef("RegExp")}} properties have both long and short (Perl-like) names. Both names always refer to the same value. (Perl is the programming language from which JavaScript modeled its regular expressions.) See also [deprecated `RegExp` properties](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp_properties).

## Constructor

- {{jsxref("RegExp/RegExp", "RegExp()")}}
  - : Creates a new `RegExp` object.

## Static properties

- {{jsxref("RegExp.@@species", "get RegExp[@@species]")}}
  - : The constructor function that is used to create derived objects.

## Instance properties

- {{JSxRef("RegExp.prototype.flags")}}
  - : A string that contains the flags of the `RegExp` object.
- {{JSxRef("RegExp.prototype.dotAll")}}
  - : Whether `.` matches newlines or not.
- {{JSxRef("RegExp.prototype.global")}}
  - : Whether to test the regular expression against all possible matches in a string, or only against the first.
- {{JSxRef("RegExp.prototype.hasIndices")}}
  - : Whether the regular expression result exposes the start and end indices of captured substrings.
- {{JSxRef("RegExp.prototype.ignoreCase")}}
  - : Whether to ignore case while attempting a match in a string.
- {{JSxRef("RegExp.prototype.multiline")}}
  - : Whether or not to search in strings across multiple lines.
- {{JSxRef("RegExp.prototype.source")}}
  - : The text of the pattern.
- {{JSxRef("RegExp.prototype.sticky")}}
  - : Whether or not the search is sticky.
- {{JSxRef("RegExp.prototype.unicode")}}
  - : Whether or not Unicode features are enabled.
- {{jsxref("RegExp.lastIndex", "RegExp: lastIndex")}}
  - : The index at which to start the next match.

## Instance methods

- {{JSxRef("RegExp.prototype.compile()")}} {{deprecated_inline}}
  - : (Re-)compiles a regular expression during execution of a script.
- {{JSxRef("RegExp.prototype.exec()")}}
  - : Executes a search for a match in its string parameter.
- {{JSxRef("RegExp.prototype.test()")}}
  - : Tests for a match in its string parameter.
- {{JSxRef("RegExp.prototype.toString()")}}
  - : Returns a string representing the specified object. Overrides the {{JSxRef("Object.prototype.toString()")}} method.
- {{JSxRef("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
  - : Performs match to given string and returns match result.
- {{JSxRef("RegExp.prototype.@@matchAll()", "RegExp.prototype[@@matchAll]()")}}
  - : Returns all matches of the regular expression against a string.
- {{JSxRef("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
  - : Replaces matches in given string with new substring.
- {{JSxRef("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
  - : Searches the match in given string and returns the index the pattern found in the string.
- {{JSxRef("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
  - : Splits given string into an array by separating the string into substrings.

## Examples

### Using a regular expression to change data format

The following script uses the {{jsxref("String.prototype.replace()", "replace()")}} method of the {{jsxref("Global_Objects/String", "String")}} instance to match a name in the format _first last_ and output it in the format _last, first_.

In the replacement text, the script uses `$1` and `$2` to indicate the results of the corresponding matching parentheses in the regular expression pattern.

```js
const re = /(\w+)\s(\w+)/;
const str = 'John Smith';
const newstr = str.replace(re, '$2, $1');
console.log(newstr);
```

This displays `"Smith, John"`.

### Using regular expression to split lines with different line endings/ends of line/line breaks

The default line ending varies depending on the platform (Unix, Windows, etc.). The line splitting provided in this example works on all platforms.

```js
const text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end';
const lines = text.split(/\r\n|\r|\n/);
console.log(lines); // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```

Note that the order of the patterns in the regular expression matters.

### Using regular expression on multiple lines

```js
const s = 'Please yes\nmake my day!';

s.match(/yes.*day/);
// Returns null

s.match(/yes[^]*day/);
// Returns ["yes\nmake my day"]
```

### Using a regular expression with the sticky flag

The {{JSxRef("Global_Objects/RegExp/sticky", "sticky")}} flag indicates that the regular expression performs sticky matching in the target string by attempting to match starting at {{jsxref("RegExp.prototype.lastIndex")}}.

```js
const str = '#foo#';
const regex = /foo/y;

regex.lastIndex = 1;
regex.test(str)      // true
regex.lastIndex = 5;
regex.test(str)      // false (lastIndex is taken into account with sticky flag)
regex.lastIndex      // 0 (reset after match failure)
```

### The difference between the sticky flag and the global flag

With the sticky flag `y`, the next match has to happen at the `lastIndex` position, while with the global flag `g`, the match can happen at the `lastIndex` position or later:

```js
const re = /\d/y;
let r;
while ((r = re.exec("123 456"))) {
  console.log(r, "AND re.lastIndex", re.lastIndex);
}

// [ '1', index: 0, input: '123 456', groups: undefined ] AND re.lastIndex 1
// [ '2', index: 1, input: '123 456', groups: undefined ] AND re.lastIndex 2
// [ '3', index: 2, input: '123 456', groups: undefined ] AND re.lastIndex 3
//   ... and no more match.
```

With the global flag `g`, all 6 digits would be matched, not just 3.

### Regular expression and Unicode characters

`\w` and `\W` only matches ASCII based characters; for example, `a` to `z`, `A` to `Z`, `0` to `9`, and `_`.

To match characters from other languages such as Cyrillic or Hebrew, use `\uhhhh`, where `hhhh` is the character's Unicode value in hexadecimal.

This example demonstrates how one can separate out Unicode characters from a word.

```js
const text = 'Образец text на русском языке';
const regex = /[\u0400-\u04FF]+/g;

const match = regex.exec(text);
console.log(match[0]); // logs 'Образец'
console.log(regex.lastIndex); // logs '7'

const match2 = regex.exec(text);
console.log(match2[0]); // logs 'на' [did not log 'text']
console.log(regex.lastIndex); // logs '15'

// and so on
```

The [Unicode property escapes](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes) feature introduces a solution, by allowing for a statement as simple as `\p{scx=Cyrl}`.

### Extracting sub-domain name from URL

```js
const url = "http://xxx.domain.com";
console.log(/^https?:\/\/(.+?)\./.exec(url)[1]); // logs 'xxx'
```

> **Note:** Instead of using regular expressions for parsing URLs, it is usually better to use the browsers built-in URL parser by using the [URL API](/en-US/docs/Web/API/URL_API).

### Building a regular expression from dynamic inputs

```js
const breakfasts = ['bacon', 'eggs', 'oatmeal', 'toast', 'cereal'];
const order = 'Let me get some bacon and eggs, please';

order.match(new RegExp(`\\b(${breakfasts.join('|')})\\b`, 'g'));
// Returns ['bacon', 'eggs']
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Firefox-specific notes

Starting with Firefox 34, in the case of a capturing group with quantifiers preventing its exercise, the matched text for a capturing group is now `undefined` instead of an empty string:

```js
// Firefox 33 or older
'x'.replace(/x(.)?/g, (m, group) => {
  console.log(`group: ${JSON.stringify(group)}`);
});
// group: ""

// Firefox 34 or newer
'x'.replace(/x(.)?/g, (m, group) => {
  console.log(`group: ${group}`);
});
// group: undefined
```

Note that due to web compatibility, `RegExp.$N` will still return an empty string instead of `undefined` ([bug 1053944](https://bugzilla.mozilla.org/show_bug.cgi?id=1053944)).

## See also

- [Polyfill of many modern `RegExp` features (`dotAll`, `sticky` flags, named capture groups, etc.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Regular Expressions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) chapter in the [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.split()")}}
