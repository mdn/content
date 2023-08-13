---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
page-type: javascript-class
browser-compat: javascript.builtins.String
---

{{JSRef}}

The **`String`** object is used to represent and manipulate a
sequence of characters.

## Description

Strings are useful for holding data that can be represented in text form. Some of the
most-used operations on strings are to check their {{jsxref("String/length",
  "length")}}, to build and concatenate them using the
[+ and += string operators](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators),
checking for the existence or location of substrings with the
{{jsxref("String.prototype.indexOf()", "indexOf()")}} method, or extracting substrings
with the {{jsxref("String.prototype.substring()", "substring()")}} method.

### Creating strings

Strings can be created as primitives, from string literals, or as objects, using the
{{jsxref("String/String", "String()")}} constructor:

```js-nolint
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
with this form you can interpolate expressions. For more information on the syntax of string literals, see [lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals).

### Character access

There are two ways to access an individual character in a string. The first is the
{{jsxref("String.prototype.charAt()", "charAt()")}} method:

```js
"cat".charAt(1); // gives value "a"
```

The other way is to treat the string as an array-like object, where individual characters correspond to a numerical index:

```js
"cat"[1]; // gives value "a"
```

When using bracket notation for character access, attempting to delete or assign a
value to these properties will not succeed. The properties involved are neither writable
nor configurable. (See {{jsxref("Object.defineProperty()")}} for more information.)

### Comparing strings

Use the [less-than and greater-than operators](/en-US/docs/Web/JavaScript/Reference/Operators) to compare strings:

```js
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
```

Note that all comparison operators, including [`===`](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) and [`==`](/en-US/docs/Web/JavaScript/Reference/Operators/Equality), compare strings case-sensitively. A common way to compare strings case-insensitively is to convert both to the same case (upper or lower) before comparing them.

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

The choice of whether to transform by [`toUpperCase()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) or [`toLowerCase()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) is mostly arbitrary, and neither one is fully robust when extending beyond the Latin alphabet. For example, the German lowercase letter `ß` and `ss` are both transformed to `SS` by `toUpperCase()`, while the Turkish letter `ı` would be falsely reported as unequal to `I` by `toLowerCase()` unless specifically using [`toLocaleLowerCase("tr")`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase).

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
```

A locale-aware and robust solution for testing case-insensitive equality is to use the {{jsxref("Intl.Collator")}} API or the string's [`localeCompare()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) method — they share the same interface — with the [`sensitivity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity) option set to `"accent"` or `"base"`.

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

The `localeCompare()` method enables string comparison in a similar fashion as `strcmp()` — it allows sorting strings in a locale-aware manner.

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

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"
```

> **Warning:** You should rarely find yourself using `String` as a constructor.

String primitives and `String` objects also give different results when
using {{jsxref("Global_Objects/eval", "eval()")}}. Primitives passed to
`eval` are treated as source code; `String` objects are treated as
all other objects are, by returning the object. For example:

```js
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```

For these reasons, the code may break when it encounters `String` objects
when it expects a primitive string instead, although generally, authors need not worry
about the distinction.

A `String` object can always be converted to its primitive counterpart with
the {{jsxref("String.prototype.valueOf()", "valueOf()")}} method.

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

### String coercion

Many built-in operations that expect strings first coerce their arguments to strings (which is largely why `String` objects behave similarly to string primitives). [The operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring) can be summarized as follows:

- Strings are returned as-is.
- [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) turns into `"undefined"`.
- [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) turns into `"null"`.
- `true` turns into `"true"`; `false` turns into `"false"`.
- Numbers are converted with the same algorithm as [`toString(10)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).
- [BigInts](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) are converted with the same algorithm as [`toString(10)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString).
- [Symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) throw a {{jsxref("TypeError")}}.
- Objects are first [converted to a primitive](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) by calling its [`[@@toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (with `"string"` as hint), `toString()`, and `valueOf()` methods, in that order. The resulting primitive is then converted to a string.

There are several ways to achieve nearly the same effect in JavaScript.

- [Template literal](/en-US/docs/Web/JavaScript/Reference/Template_literals): `` `${x}` `` does exactly the string coercion steps explained above for the embedded expression.
- The [`String()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String) function: `String(x)` uses the same algorithm to convert `x`, except that [Symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) don't throw a {{jsxref("TypeError")}}, but return `"Symbol(description)"`, where `description` is the [description](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) of the Symbol.
- Using the [`+` operator](/en-US/docs/Web/JavaScript/Reference/Operators/Addition): `"" + x` coerces its operand to a _primitive_ instead of a _string_, and, for some objects, has entirely different behaviors from normal string coercion. See its [reference page](/en-US/docs/Web/JavaScript/Reference/Operators/Addition) for more details.

Depending on your use case, you may want to use `` `${x}` `` (to mimic built-in behavior) or `String(x)` (to handle symbol values without throwing an error), but you should not use `"" + x`.

### UTF-16 characters, Unicode code points, and grapheme clusters

Strings are represented fundamentally as sequences of [UTF-16 code units](https://en.wikipedia.org/wiki/UTF-16). In UTF-16 encoding, every code unit is exact 16 bits long. This means there are a maximum of 2<sup>16</sup>, or 65536 possible characters representable as single UTF-16 code units. This character set is called the [basic multilingual plane (BMP)](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>), and includes the most common characters like the Latin, Greek, Cyrillic alphabets, as well as many East Asian characters. Each code unit can be written in a string with `\u` followed by exactly four hex digits.

However, the entire Unicode character set is much, much bigger than 65536. The extra characters are stored in UTF-16 as _surrogate pairs_, which are pairs of 16-bit code units that represent a single character. To avoid ambiguity, the two parts of the pair must be between `0xD800` and `0xDFFF`, and these code units are not used to encode single-code-unit characters. (More precisely, leading surrogates, also called high-surrogate code units, have values between `0xD800` and `0xDBFF`, inclusive, while trailing surrogates, also called low-surrogate code units, have values between `0xDC00` and `0xDFFF`, inclusive.) Each Unicode character, comprised of one or two UTF-16 code units, is also called a _Unicode code point_. Each Unicode code point can be written in a string with `\u{xxxxxx}` where `xxxxxx` represents 1–6 hex digits.

A "lone surrogate" is a 16-bit code unit satisfying one of the descriptions below:

- It is in the range `0xD800`–`0xDBFF`, inclusive (i.e. is a leading surrogate), but it is the last code unit in the string, or the next code unit is not a trailing surrogate.
- It is in the range `0xDC00`–`0xDFFF`, inclusive (i.e. is a trailing surrogate), but it is the first code unit in the string, or the previous code unit is not a leading surrogate.

Lone surrogates do not represent any Unicode character. Although most JavaScript built-in methods handle them correctly because they all work based on UTF-16 code units, lone surrogates are often not valid values when interacting with other systems — for example, [`encodeURI()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) will throw a {{jsxref("URIError")}} for lone surrogates, because URI encoding uses UTF-8 encoding, which does not have any encoding for lone surrogates. Strings not containing any lone surrogates are called _well-formed_ strings, and are safe to be used with functions that do not deal with UTF-16 (such as `encodeURI()` or {{domxref("TextEncoder")}}). You can check if a string is well-formed with the {{jsxref("String/isWellFormed", "isWellFormed()")}} method, or sanitize lone surrogates with the {{jsxref("String/toWellFormed", "toWellFormed()")}} method.

On top of Unicode characters, there are certain sequences of Unicode characters that should be treated as one visual unit, known as a _grapheme cluster_. The most common case is emojis: many emojis that have a range of variations are actually formed by multiple emojis, usually joined by the \<ZWJ> (`U+200D`) character.

You must be careful which level of characters you are iterating on. For example, [`split("")`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) will split by UTF-16 code units and will separate surrogate pairs. String indexes also refer to the index of each UTF-16 code unit. On the other hand, [`@@iterator()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) iterates by Unicode code points. Iterating through grapheme clusters will require some custom code.

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

- {{jsxref("String.fromCharCode()")}}
  - : Returns a string created by using the specified sequence of Unicode values.
- {{jsxref("String.fromCodePoint()")}}
  - : Returns a string created by using the specified sequence of code points.
- {{jsxref("String.raw()")}}
  - : Returns a string created from a raw template string.

## Instance properties

These properties are defined on `String.prototype` and shared by all `String` instances.

- {{jsxref("Object/constructor", "String.prototype.constructor")}}
  - : The constructor function that created the instance object. For `String` instances, the initial value is the {{jsxref("String/String", "String")}} constructor.

These properties are own properties of each `String` instance.

- {{jsxref("String/length", "length")}}
  - : Reflects the `length` of the string. Read-only.

## Instance methods

- {{jsxref("String.prototype.at()")}}
  - : Returns the character (exactly one UTF-16 code unit) at the specified `index`. Accepts negative integers, which count back from the last string character.
- {{jsxref("String.prototype.charAt()")}}
  - : Returns the character (exactly one UTF-16 code unit) at the specified
    `index`.
- {{jsxref("String.prototype.charCodeAt()")}}
  - : Returns a number that is the UTF-16 code unit value at the given
    `index`.
- {{jsxref("String.prototype.codePointAt()")}}
  - : Returns a nonnegative integer Number that is the code point value of the UTF-16
    encoded code point starting at the specified `pos`.
- {{jsxref("String.prototype.concat()")}}
  - : Combines the text of two (or more) strings and returns a new string.
- {{jsxref("String.prototype.endsWith()")}}
  - : Determines whether a string ends with the characters of the string
    `searchString`.
- {{jsxref("String.prototype.includes()")}}
  - : Determines whether the calling string contains `searchString`.
- {{jsxref("String.prototype.indexOf()")}}
  - : Returns the index within the calling {{jsxref("String")}} object of the first
    occurrence of `searchValue`, or `-1` if not found.
- {{jsxref("String.prototype.isWellFormed()")}}
  - : Returns a boolean indicating whether this string contains any [lone surrogates](#utf-16_characters_unicode_code_points_and_grapheme_clusters).
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : Returns the index within the calling {{jsxref("String")}} object of the last
    occurrence of `searchValue`, or `-1` if not found.
- {{jsxref("String.prototype.localeCompare()")}}
  - : Returns a number indicating whether the reference string
    `compareString` comes before, after, or is equivalent to the
    given string in sort order.
- {{jsxref("String.prototype.match()")}}
  - : Used to match regular expression `regexp` against a string.
- {{jsxref("String.prototype.matchAll()")}}
  - : Returns an iterator of all `regexp`'s matches.
- {{jsxref("String.prototype.normalize()")}}
  - : Returns the Unicode Normalization Form of the calling string value.
- {{jsxref("String.prototype.padEnd()")}}
  - : Pads the current string from the end with a given string and returns a new string of
    the length `targetLength`.
- {{jsxref("String.prototype.padStart()")}}
  - : Pads the current string from the start with a given string and returns a new string
    of the length `targetLength`.
- {{jsxref("String.prototype.repeat()")}}
  - : Returns a string consisting of the elements of the object repeated
    `count` times.
- {{jsxref("String.prototype.replace()")}}
  - : Used to replace occurrences of `searchFor` using
    `replaceWith`. `searchFor` may be a string
    or Regular Expression, and `replaceWith` may be a string or
    function.
- {{jsxref("String.prototype.replaceAll()")}}
  - : Used to replace all occurrences of `searchFor` using
    `replaceWith`. `searchFor` may be a string
    or Regular Expression, and `replaceWith` may be a string or
    function.
- {{jsxref("String.prototype.search()")}}
  - : Search for a match between a regular expression `regexp` and
    the calling string.
- {{jsxref("String.prototype.slice()")}}
  - : Extracts a section of a string and returns a new string.
- {{jsxref("String.prototype.split()")}}
  - : Returns an array of strings populated by splitting the calling string at occurrences
    of the substring `sep`.
- {{jsxref("String.prototype.startsWith()")}}
  - : Determines whether the calling string begins with the characters of string
    `searchString`.
- {{jsxref("String.prototype.substr()")}} {{Deprecated_Inline}}
  - : Returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
- {{jsxref("String.prototype.substring()")}}
  - : Returns a new string containing characters of the calling string from (or between)
    the specified index (or indices).
- {{jsxref("String.prototype.toLocaleLowerCase()")}}

  - : The characters within a string are converted to lowercase while respecting the
    current locale.

    For most languages, this will return the same as
    {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()")}}

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
- {{jsxref("String.prototype.toWellFormed()")}}
  - : Returns a string where all [lone surrogates](#utf-16_characters_unicode_code_points_and_grapheme_clusters) of this string are replaced with the Unicode replacement character U+FFFD.
- {{jsxref("String.prototype.trim()")}}
  - : Trims whitespace from the beginning and end of the string.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Trims whitespace from the end of the string.
- {{jsxref("String.prototype.trimStart()")}}
  - : Trims whitespace from the beginning of the string.
- {{jsxref("String.prototype.valueOf()")}}
  - : Returns the primitive value of the specified object. Overrides the
    {{jsxref("Object.prototype.valueOf()")}} method.
- [`String.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)
  - : Returns a new iterator object that iterates over the code points of a String value,
    returning each code point as a String value.

### HTML wrapper methods

> **Warning:** Deprecated. Avoid these methods.
>
> They are of limited use, as they are based on a very old HTML standard and provide only a subset of the currently available HTML tags and attributes. Many of them create deprecated or non-standard markup today. In addition, they do simple string concatenation without any validation or sanitation, which makes them a potential security threat when directly inserted using [`innerHTML`](/en-US/docs/Web/API/Element/innerHTML). Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.

- {{jsxref("String.prototype.anchor()")}} {{Deprecated_Inline}}
  - : [`<a name="name">`](/en-US/docs/Web/HTML/Element/a#name) (hypertext target)
- {{jsxref("String.prototype.big()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("big")}}
- {{jsxref("String.prototype.blink()")}} {{Deprecated_Inline}}
  - : `<blink>`
- {{jsxref("String.prototype.bold()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("b")}}
- {{jsxref("String.prototype.fixed()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("tt")}}
- {{jsxref("String.prototype.fontcolor()")}} {{Deprecated_Inline}}
  - : [`<font color="color">`](/en-US/docs/Web/HTML/Element/font#color)
- {{jsxref("String.prototype.fontsize()")}} {{Deprecated_Inline}}
  - : [`<font size="size">`](/en-US/docs/Web/HTML/Element/font#size)
- {{jsxref("String.prototype.italics()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("i")}}
- {{jsxref("String.prototype.link()")}} {{Deprecated_Inline}}
  - : [`<a href="url">`](/en-US/docs/Web/HTML/Element/a#href) (link to URL)
- {{jsxref("String.prototype.small()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("small")}}
- {{jsxref("String.prototype.strike()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("strike")}}
- {{jsxref("String.prototype.sub()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("sub")}}
- {{jsxref("String.prototype.sup()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("sup")}}

Note that these methods do not check if the string itself contains HTML tags, so it's possible to create invalid HTML:

```js
"</b>".bold(); // <b></b></b>
```

The only escaping they do is to replace `"` in the attribute value (for {{jsxref("String/anchor", "anchor()")}}, {{jsxref("String/fontcolor", "fontcolor()")}}, {{jsxref("String/fontsize", "fontsize()")}}, and {{jsxref("String/link", "link()")}}) with `&quot;`.

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## Examples

### String conversion

It's possible to use `String` as a more reliable
{{jsxref("String.prototype.toString()", "toString()")}} alternative, as it works when
used on [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) and {{jsxref("undefined")}}. For example:

```js
const nullVar = null;
nullVar.toString(); // TypeError: nullVar is null
String(nullVar); // "null"

const undefinedVar = undefined;
undefinedVar.toString(); // TypeError: undefinedVar is undefined
String(undefinedVar); // "undefined"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Text formatting in the JavaScript Guide](/en-US/docs/Web/JavaScript/Guide/Text_formatting)
- {{jsxref("RegExp")}}
