---
title: String.prototype.matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Regular Expressions
  - String
  - Polyfill
browser-compat: javascript.builtins.String.matchAll
---
{{JSRef}}

The **`matchAll()`** method returns an iterator of all results matching a string against a [regular expression](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions), including [capturing groups](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences).

{{EmbedInteractiveExample("pages/js/string-matchall.html")}}

## Syntax

```js
matchAll(regexp)
```

### Parameters

- `regexp`

  - : A regular expression object, or any object that has a [`Symbol.matchAll`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll) method.

    If `regexp` is not a `RegExp` object and does not have a `Symbol.matchAll` method, it is implicitly converted to a {{jsxref("RegExp")}} by using `new RegExp(regexp, 'g')`.

    If `regexp` is a `RegExp` object (via the [`IsRegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match#disabling_the_isregexp_check) check), then it must have the global (`g`) flag set, or a {{jsxref("TypeError")}} is thrown.

### Return value

An [iterable iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) (which is not restartable) of matches. Each match is an array with the same shape as the return value of {{jsxref("RegExp.prototype.exec()")}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the `regexp` is a `RegExp` object that does not have the global (`g`) flag set.

## Description

The implementation of `String.prototype.matchAll` itself is very simple — it simply calls the `Symbol.matchAll` method of the argument with the string as the first parameter (apart from the extra input validation that the regex is global). The actual implementation comes from [`RegExp.prototype[@@matchAll]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll).

## Examples

### Regexp.prototype.exec() and matchAll()

Without `matchAll()`, it's possible to use calls to [`regexp.exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) (and regexes with the `g` flag) in a loop to obtain all the matches:

```js
const regexp = /foo[a-z]*/g;
const str = 'table football, foosball';
let match;

while ((match = regexp.exec(str)) !== null) {
  console.log(`Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`);
  // expected output: "Found football start=6 end=14."
  // expected output: "Found foosball start=16 end=24."
}
```

With `matchAll()` available, you can avoid the {{jsxref("Statements/while", "while")}} loop and `exec` with `g`. Instead, you get an iterator to use with the more convenient {{jsxref("Statements/for...of", "for...of")}}, {{jsxref("Operators/Spread_syntax", "array spread")}}, or {{jsxref("Array.from()")}} constructs:

```js
const regexp = /foo[a-z]*/g;
const str = 'table football, foosball';
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
}
// expected output: "Found football start=6 end=14."
// expected output: "Found foosball start=16 end=24."

// matches iterator is exhausted after the for..of iteration
// Call matchAll again to create a new iterator
Array.from(str.matchAll(regexp), (m) => m[0]);
// Array [ "football", "foosball" ]
```

`matchAll` will throw an exception if the `g` flag is missing.

```js
const regexp = /[a-c]/;
const str = 'abc';
str.matchAll(regexp);
// TypeError
```

`matchAll` internally makes a clone of the `regexp` — so, unlike {{jsxref("Global_Objects/RegExp/exec", "regexp.exec()")}}, `lastIndex` does not change as the string is scanned.

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = 'abc';
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// Array [ "1 b", "1 c" ]
```

However, this means that unlike using [`regexp.exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) in a loop, you can't mutate `lastIndex` to make the regex advance or rewind.

### Better access to capturing groups (than String.prototype.match())

Another compelling reason for `matchAll` is the improved access to capture groups.

Capture groups are ignored when using {{jsxref("Global_Objects/String/match", "match()")}} with the global `g` flag:

```js
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

str.match(regexp);
// Array ['test1', 'test2']
```

Using `matchAll`, you can access capture groups easily:

```js
const array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

### Using matchAll() with a non-RegExp implementing @@matchAll

If an object has a `Symbol.matchAll` method, it can be used as a custom matcher. The return value of `Symbol.matchAll` becomes the return value of `matchAll()`.

```js
const str = "Hmm, this is interesting.";

str.matchAll({
  [Symbol.matchAll](str) {
    return [["Yes, it's interesting."]];
  }
}); // returns [["Yes, it's interesting."]]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.matchAll` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.match()")}}
- [Using regular expressions in JavaScript](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Capturing groups](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences)
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`RegExp.prototype[@@matchAll]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)
