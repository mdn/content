---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Reference
  - String
browser-compat: javascript.builtins.String
---
{{JSRef}}

The **`String`** object is used to represent and manipulate a
sequence of characters.

## Description

Strings are useful for holding data that can be represented in text form. Some of the
most-used operations on strings are to check their {{jsxref("String.length",
  "length")}}, to build and concatenate them using the
[+ and += string operators](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators),
checking for the existence or location of substrings with the
{{jsxref("String.prototype.indexOf()", "indexOf()")}} method, or extracting substrings
with the {{jsxref("String.prototype.substring()", "substring()")}} method.

### Creating strings

Strings can be created as primitives, from string literals, or as objects, using the
{{jsxref("String/String", "String()")}} constructor:

```js
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
```

```js
const string4 = new String("A String object");
```

String primitives and string objects share many behaviors, but have other important differences and caveats.
See "[String primitives and String objects](#string_primitives_and_string_objects)" below.

String literals can be specified using single or double quotes, which are treated
identically, or using the backtick character <kbd>`</kbd>. This last form specifies a [template literal](/en-US/docs/Web/JavaScript/Reference/Template_literals):
with this form you can interpolate expressions.

### Character access

There are two ways to access an individual character in a string. The first is the
{{jsxref("String.prototype.charAt()", "charAt()")}} method:

```js
'cat'.charAt(1) // gives value "a"
```

The other way is to treat the string as an array-like object, where individual characters correspond to a numerical index:

```js
'cat'[1] // gives value "a"
```

When using bracket notation for character access, attempting to delete or assign a
value to these properties will not succeed. The properties involved are neither writable
nor configurable. (See {{jsxref("Object.defineProperty()")}} for more information.)

### Comparing strings

In C, the `strcmp()` function is used for comparing strings. In JavaScript,
you just use the [less-than and greater-than operators](/en-US/docs/Web/JavaScript/Reference/Operators):

```js
const a = 'a';
const b = 'b';
if (a < b) { // true
  console.log(`${a} is less than ${b}`)
} else if (a > b) {
  console.log(`${a} is greater than ${b}`)
} else {
  console.log(`${a} and ${b} are equal.`)
}
```

A similar result can be achieved using the {{jsxref("String.prototype.localeCompare()",
  "localeCompare()")}} method inherited by `String` instances.

Note that `a === b` compares the strings in `a` and
`b` for being equal in the usual case-sensitive way. If you wish
to compare without regard to upper or lower case characters, use a function similar to
this:

```js
function isEqual(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

Upper case is used instead of lower case in this function, due to problems with certain
UTF-8 character conversions.

### String primitives and String objects

Note that JavaScript distinguishes between `String` objects and
{{Glossary("Primitive", "primitive string")}} values. (The same is true of
{{jsxref("Boolean")}} and {{jsxref("Global_Objects/Number", "Numbers")}}.)

String literals (denoted by double or single quotes) and strings returned from
`String` calls in a non-constructor context (that is, called without using
the {{jsxref("Operators/new", "new")}} keyword) are primitive strings. In contexts where a
method is to be invoked on a primitive string or a property lookup occurs, JavaScript
will automatically wrap the string primitive and call the method or perform the property
lookup on the wrapper object instead.

```js
const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // Logs "string"
console.log(typeof strPrim2); // Logs "string"
console.log(typeof strPrim3); // Logs "string"
console.log(typeof strObj);  // Logs "object"
```

> **Warning:** You should rarely find yourself using `String` as a constructor.

String primitives and `String` objects also give different results when
using {{jsxref("Global_Objects/eval", "eval()")}}. Primitives passed to
`eval` are treated as source code; `String` objects are treated as
all other objects are, by returning the object. For example:

```js
const s1 = '2 + 2';              // creates a string primitive
const s2 = new String('2 + 2');  // creates a String object
console.log(eval(s1));           // returns the number 4
console.log(eval(s2));           // returns the string "2 + 2"
```

For these reasons, the code may break when it encounters `String` objects
when it expects a primitive string instead, although generally, authors need not worry
about the distinction.

A `String` object can always be converted to its primitive counterpart with
the {{jsxref("String.prototype.valueOf()", "valueOf()")}} method.

```js
console.log(eval(s2.valueOf()))  // returns the number 4
```

### Escape sequences

Special characters can be encoded using escape sequences:

| Escape sequence                                                                                                                                        | Unicode code point                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `\0`                                                                                                                                                   | null character (U+0000 NULL)                                                                                               |
| `\'`                                                                                                                                                   | single quote (U+0027 APOSTROPHE)                                                                                           |
| `\"`                                                                                                                                                   | double quote (U+0022 QUOTATION MARK)                                                                                       |
| `\\`                                                                                                                                                   | backslash (U+005C REVERSE SOLIDUS)                                                                                         |
| `\n`                                                                                                                                                   | newline (U+000A LINE FEED; LF)                                                                                             |
| `\r`                                                                                                                                                   | carriage return (U+000D CARRIAGE RETURN; CR)                                                                               |
| `\v`                                                                                                                                                   | vertical tab (U+000B LINE TABULATION)                                                                                      |
| `\t`                                                                                                                                                   | tab (U+0009 CHARACTER TABULATION)                                                                                          |
| `\b`                                                                                                                                                   | backspace (U+0008 BACKSPACE)                                                                                               |
| `\f`                                                                                                                                                   | form feed (U+000C FORM FEED)                                                                                               |
| `\uXXXX` …where `XXXX` is exactly 4 hex digits in the range `0000`–`FFFF`; e.g., `\u000A` is the same as `\n` (LINE FEED); `\u0021` is `!`           | Unicode code point between `U+0000` and `U+FFFF` (the Unicode Basic Multilingual Plane)                                    |
| `\u{X}`…`\u{XXXXXX}` …where `X`…`XXXXXX` is 1–6 hex digits in the range `0`–`10FFFF`; e.g., `\u{A}` is the same as `\n` (LINE FEED); `\u{21}` is `!` | Unicode code point between `U+0000` and `U+10FFFF` (the entirety of Unicode)                                               |
| `\xXX` …where `XX` is exactly 2 hex digits in the range `00`–`FF`; e.g., `\x0A` is the same as `\n` (LINE FEED); `\x21` is `!`                       | Unicode code point between `U+0000` and `U+00FF` (the Basic Latin and Latin-1 Supplement blocks; equivalent to ISO-8859-1) |

### Long literal strings

Sometimes, your code will include strings which are very long. Rather than having lines
that go on endlessly, or wrap at the whim of your editor, you may wish to specifically
break the string into multiple lines in the source code without affecting the actual
string contents.

You can use the [`+`](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
operator to append multiple strings together, like this:

```js
const longString = "This is a very long string which needs " +
                   "to wrap across multiple lines because " +
                   "otherwise my code is unreadable."
```

Or you can use the backslash character (`\`) at the end of each line to
indicate that the string will continue on the next line. Make sure there is no space or
any other character after the backslash (except for a line break), or as an indent;
otherwise it will not work.

```js
const longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."
```

Both of the above methods result in identical strings.

### UTF-16 characters, Unicode codepoints, and grapheme clusters

Strings are represented fundamentally as sequences of [UTF-16 code units](https://en.wikipedia.org/wiki/UTF-16). In UTF-16 encoding, every code unit is exact 16 bits long. This means there are a maximum of 2<sup>16</sup>, or 65536 possible characters representable as single UTF-16 code units. This character set is called the [basic multilingual plane (BMP)](https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane), and includes the most common characters like the Latin, Greek, Cyrillic alphabets, as well as many East Asian characters. Each code unit can be written in a string with `\u` followed by exactly four hex digits.

However, the entire Unicode character set is much, much bigger than 65536. The extra characters are stored in UTF-16 as _surrogate pairs_, which are pairs of 16-bit code units that represent a single character. To avoid ambiguity, the two parts of the pair must be between `0xD800` and `0xDFFF`, and these code units are not used to encode single-code-unit characters. Therefore, "lone surrogates" are often not valid values for string manipulation — for example, [`encodeURI()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) will throw a {{jsxref("URIError")}} for lone surrogates. Each Unicode character, comprised of one or two UTF-16 code units, is also called a _Unicode codepoint_. Each Unicode codepoint can be written in a string with `\u{xxxxxx}` where `xxxxxx` represents 1–6 hex digits.

On top of Unicode characters, there are certain sequences of Unicode characters that should be treated as one visual unit, known as a _grapheme cluster_. The most common case is emojis: many emojis that have a range of variations are actually formed by multiple emojis, usually joined by the \<ZWJ> (`U+200D`) character.

You must be careful which level of characters you are iterating on. For example, [`split("")`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) will split by UTF-16 code units and will separate surrogate pairs. String indexes also refer to the index of each UTF-16 code unit. On the other hand, [`@@iterator()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) iterates by Unicode codepoints. Iterating through grapheme clusters will require some custom code.

```js
"😄".split(""); // ['\ud83d', '\ude04']; splits into two lone surrogates

// "Backhand Index Pointing Right: Dark Skin Tone"
[..."👉🏿"]; // ['👉', '🏿']
// splits into the basic "Backhand Index Pointing Right" emoji and
// the "Dark skin tone" emoji

// "Family: Man, Boy"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// splits into the "Man" and "Boy" emoji, joined by a ZWJ

// The United Nations flag
[..."🇺🇳"]; // [ '🇺', '🇳' ]
// splits into two "region indicator" letters "U" and "N".
// All flag emojis are formed by joining two region indicator letters
```

## Constructor

- {{jsxref("String/String", "String()")}}
  - : Creates a new `String` object. It performs type conversion when called as
    a function, rather than as a constructor, which is usually more useful.

## Static methods

- {{jsxref("String.fromCharCode()", "String.fromCharCode(<var>num1</var> [, ...[,
    <var>numN</var>]])")}}
  - : Returns a string created by using the specified sequence of Unicode values.
- {{jsxref("String.fromCodePoint()", "String.fromCodePoint(<var>num1</var> [, ...[,
    <var>numN</var>)")}}
  - : Returns a string created by using the specified sequence of code points.
- {{jsxref("String.raw()")}}
  - : Returns a string created from a raw template string.

## Instance properties

- {{jsxref("String.prototype.length")}}
  - : Reflects the `length` of the string. Read-only.

## Instance methods

- {{jsxref("String.prototype.at()", "String.prototype.at(<var>index</var>)")}}
  - : Returns the character (exactly one UTF-16 code unit) at the specified `index`. Accepts negative integers, which count back from the last string character.
- {{jsxref("String.prototype.charAt()", "String.prototype.charAt(<var>index</var>)")}}
  - : Returns the character (exactly one UTF-16 code unit) at the specified
    `index`.
- {{jsxref("String.prototype.charCodeAt()",
    "String.prototype.charCodeAt(<var>index</var>)")}}
  - : Returns a number that is the UTF-16 code unit value at the given
    `index`.
- {{jsxref("String.prototype.codePointAt()",
    "String.prototype.codePointAt(<var>pos</var>)")}}
  - : Returns a nonnegative integer Number that is the code point value of the UTF-16
    encoded code point starting at the specified `pos`.
- {{jsxref("String.prototype.concat()", "String.prototype.concat(<var>str </var>[,
    ...<var>strN </var>])")}}
  - : Combines the text of two (or more) strings and returns a new string.
- {{jsxref("String.prototype.includes()",
    "String.prototype.includes(<var>searchString</var> [, <var>position</var>])")}}
  - : Determines whether the calling string contains `searchString`.
- {{jsxref("String.prototype.endsWith()",
    "String.prototype.endsWith(<var>searchString</var> [, <var>length</var>])")}}
  - : Determines whether a string ends with the characters of the string
    `searchString`.
- {{jsxref("String.prototype.indexOf()",
    "String.prototype.indexOf(<var>searchValue</var> [, <var>fromIndex</var>])")}}
  - : Returns the index within the calling {{jsxref("String")}} object of the first
    occurrence of `searchValue`, or `-1` if not found.
- {{jsxref("String.prototype.lastIndexOf()",
    "String.prototype.lastIndexOf(<var>searchValue</var> [, <var>fromIndex</var>])")}}
  - : Returns the index within the calling {{jsxref("String")}} object of the last
    occurrence of `searchValue`, or `-1` if not found.
- {{jsxref("String.prototype.localeCompare()",
    "String.prototype.localeCompare(<var>compareString</var> [, <var>locales</var> [,
    <var>options</var>]])")}}
  - : Returns a number indicating whether the reference string
    `compareString` comes before, after, or is equivalent to the
    given string in sort order.
- {{jsxref("String.prototype.match()", "String.prototype.match(<var>regexp</var>)")}}
  - : Used to match regular expression `regexp` against a string.
- {{jsxref("String.prototype.matchAll()",
    "String.prototype.matchAll(<var>regexp</var>)")}}
  - : Returns an iterator of all `regexp`'s matches.
- {{jsxref("String.prototype.normalize()",
    "String.prototype.normalize([<var>form</var>])")}}
  - : Returns the Unicode Normalization Form of the calling string value.
- {{jsxref("String.prototype.padEnd()",
    "String.prototype.padEnd(<var>targetLength</var> [, <var>padString</var>])")}}
  - : Pads the current string from the end with a given string and returns a new string of
    the length `targetLength`.
- {{jsxref("String.prototype.padStart()",
    "String.prototype.padStart(<var>targetLength</var> [, <var>padString</var>])")}}
  - : Pads the current string from the start with a given string and returns a new string
    of the length `targetLength`.
- {{jsxref("String.prototype.repeat()", "String.prototype.repeat(<var>count</var>)")}}
  - : Returns a string consisting of the elements of the object repeated
    `count` times.
- {{jsxref("String.prototype.replace()" ,
    "String.prototype.replace(<var>searchFor</var>, <var>replaceWith</var>)")}}
  - : Used to replace occurrences of `searchFor` using
    `replaceWith`. `searchFor` may be a string
    or Regular Expression, and `replaceWith` may be a string or
    function.
- {{jsxref("String.prototype.replaceAll()" ,
    "String.prototype.replaceAll(<var>searchFor</var>, <var>replaceWith</var>)")}}
  - : Used to replace all occurrences of `searchFor` using
    `replaceWith`. `searchFor` may be a string
    or Regular Expression, and `replaceWith` may be a string or
    function.
- {{jsxref("String.prototype.search()",
    "String.prototype.search(<var>regexp</var>)")}}
  - : Search for a match between a regular expression `regexp` and
    the calling string.
- {{jsxref("String.prototype.slice()", "String.prototype.slice(<var>beginIndex</var>[,
    <var>endIndex</var>])")}}
  - : Extracts a section of a string and returns a new string.
- {{jsxref("String.prototype.split()", "String.prototype.split([<var>sep</var> [,
    <var>limit</var>] ])")}}
  - : Returns an array of strings populated by splitting the calling string at occurrences
    of the substring `sep`.
- {{jsxref("String.prototype.startsWith()",
    "String.prototype.startsWith(<var>searchString</var> [, <var>length</var>])")}}
  - : Determines whether the calling string begins with the characters of string
    `searchString`.
- {{jsxref("String.prototype.substring()",
    "String.prototype.substring(<var>indexStart</var> [, <var>indexEnd</var>])")}}
  - : Returns a new string containing characters of the calling string from (or between)
    the specified index (or indices).
- {{jsxref("String.prototype.toLocaleLowerCase()",
    "String.prototype.toLocaleLowerCase( [<var>locale</var>, ...<var>locales</var>])")}}

  - : The characters within a string are converted to lowercase while respecting the
    current locale.

    For most languages, this will return the same as
    {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()",
    "String.prototype.toLocaleUpperCase( [<var>locale</var>, ...<var>locales</var>])")}}

  - : The characters within a string are converted to uppercase while respecting the
    current locale.

    For most languages, this will return the same as
    {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}}.

- {{jsxref("String.prototype.toLowerCase()")}}
  - : Returns the calling string value converted to lowercase.
- {{jsxref("String.prototype.toString()")}}
  - : Returns a string representing the specified object. Overrides the
    {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Returns the calling string value converted to uppercase.
- {{jsxref("String.prototype.trim()")}}
  - : Trims whitespace from the beginning and end of the string.
- {{jsxref("String.prototype.trimStart()")}}
  - : Trims whitespace from the beginning of the string.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Trims whitespace from the end of the string.
- {{jsxref("String.prototype.valueOf()")}}
  - : Returns the primitive value of the specified object. Overrides the
    {{jsxref("Object.prototype.valueOf()")}} method.
- {{jsxref("String.prototype.@@iterator()", "String.prototype[@@iterator]()")}}
  - : Returns a new iterator object that iterates over the code points of a String value,
    returning each code point as a String value.

## HTML wrapper methods

> **Warning:** Deprecated. Avoid these methods.
>
> They are of limited use, as they provide only a subset of the available HTML tags
> and attributes.

- {{jsxref("String.prototype.anchor()")}} {{Deprecated_Inline}}
  - : {{htmlattrxref("name", "a", "&lt;a name=\"name\"&gt;")}} (hypertext target)
- {{jsxref("String.prototype.big()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("big")}}
- {{jsxref("String.prototype.blink()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("blink")}}
- {{jsxref("String.prototype.bold()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("b")}}
- {{jsxref("String.prototype.fixed()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("tt")}}
- {{jsxref("String.prototype.fontcolor()")}} {{Deprecated_Inline}}
  - : {{htmlattrxref("color", "font", "&lt;font color=\"color\"&gt;")}}
- {{jsxref("String.prototype.fontsize()")}} {{Deprecated_Inline}}
  - : {{htmlattrxref("size", "font", "&lt;font size=\"size\"&gt;")}}
- {{jsxref("String.prototype.italics()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("i")}}
- {{jsxref("String.prototype.link()")}} {{Deprecated_Inline}}
  - : {{htmlattrxref("href", "a", "&lt;a href=\"url\"&gt;")}} (link to URL)
- {{jsxref("String.prototype.small()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("small")}}
- {{jsxref("String.prototype.strike()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("strike")}}
- {{jsxref("String.prototype.sub()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("sub")}}
- {{jsxref("String.prototype.sup()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("sup")}}

## Examples

### String conversion

It's possible to use `String` as a more reliable
{{jsxref("String.prototype.toString()", "toString()")}} alternative, as it works when
used on [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) and {{jsxref("undefined")}}. For example:

```js
const nullVar = null;
nullVar.toString();       // TypeError: nullVar is null
String(nullVar);          // "null"

const undefinedVar = undefined;
undefinedVar.toString();  // TypeError: undefinedVar is undefined
String(undefinedVar);     // "undefined"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Text formatting in the JavaScript Guide](/en-US/docs/Web/JavaScript/Guide/Text_formatting)
- {{jsxref("RegExp")}}
