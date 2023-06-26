---
title: Deprecated and obsolete features
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
page-type: guide
---

{{JsSidebar("More")}}

This page lists features of JavaScript that are deprecated (that is, still available but planned for removal) and obsolete (that is, no longer usable).

## Deprecated features

These deprecated features can still be used, but should be used with caution because they are not required to be implemented by every JavaScript engine. You should work to remove their use from your code.

Some of these deprecated features are listed in the [Annex B](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) section of the ECMAScript specification. This section is described as normative optional — that is, web browser hosts must implement these features, while non-web hosts may not. These features are likely stable because removing them will cause backward compatibility issues and break legacy websites. (JavaScript has the design goal of "don't break the web".) Still, they are not cross-platform portable and may not be supported by all analysis tools, so you are advised to not use them, as the introduction of Annex B states:

> … All of the language features and behaviors specified in this annex have one or more undesirable characteristics and in the absence of legacy usage would be removed from this specification. …
>
> … Programmers should not use or assume the existence of these features and behaviors when writing new ECMAScript code. …

Some others, albeit in the main spec body, are also marked as normative optional and should not be depended on.

### HTML comments

JavaScript source, if parsed as scripts, allows HTML-like comments, as if the script is part of a `<script>` tag.

The following is valid JavaScript when running in a web browser (or Node.js, which uses the V8 engine powering Chrome):

```js
<!-- comment
console.log("a"); <!-- another comment
console.log("b");
--> More comment
// Logs "a" and "b"
```

`<!--` and `-->` both act like `//`, i.e. starting line comments. `-->` is only valid at the start of a line (to avoid ambiguity with a postfix decrement followed by a greater than operator), while `<!--` can occur anywhere in the line.

### RegExp

The following properties are deprecated. This does not affect their use in [replacement strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace):

- {{jsxref("RegExp/n", "$1–$9")}}
  - : Parenthesized substring matches, if any.
- {{jsxref("RegExp.input", "input, $_")}}
  - : The string against which a regular expression is matched.
- {{jsxref("RegExp.lastMatch", "lastMatch, $&amp;")}}
  - : The last matched substring.
- {{jsxref("RegExp.lastParen", "lastParen, $+")}}
  - : The last parenthesized substring match, if any.
- {{jsxref("RegExp.leftContext", "leftContext, $`")}}
  - : The substring preceding the most recent match.
- {{jsxref("RegExp.rightContext", "rightContext, $'")}}
  - : The substring following the most recent match.

> **Warning:** Avoid using these static properties, as they can cause [issues when interacting with external code](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc)!

The {{jsxref("RegExp/compile", "compile()")}} method is deprecated. Construct a new `RegExp` instance instead.

The following regex syntaxes are deprecated and only available in [Unicode-unaware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode). In Unicode-aware mode, they are all syntax errors:

- [Lookahead assertions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) can have [quantifiers](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier).
- [Backreferences](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) that do not refer to an existing capturing group become [legacy octal escapes](#escape_sequences).
- In [character classes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class), character ranges where one boundary is a character class makes the `-` become a literal character.
- An escape sequence that's not recognized becomes an ["identity escape"](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).
- Escape sequences within [character classes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) of the form `\cX` where `X` is a number or `_` are decoded in the same way as those with ASCII letters: `\c0` is the same as `\cP` when taken modulo 32. In addition, if the form `\cX` is encountered anywhere where `X` is not one of the recognized characters, then the backslash is treated as a literal character.
- The sequence `\k` within a regex that doesn't have any [named capturing groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) is treated as an identity escape.
- The syntax characters `]`, `{`, and `}` may appear [literally](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) without escaping if they cannot be interpreted as the end of a character class or quantifier delimiters.

### Function

- The {{jsxref("Global_Objects/Function/caller", "caller")}} property of functions and the [`arguments.callee`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee) property are deprecated and unavailable in strict mode.
- Instead of accessing `arguments` as a property of a function, you should use the {{jsxref("Functions/arguments", "arguments")}} object inside function closures.

### Object

- The [`Object.prototype.__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) accessors are deprecated. Use [`Object.getPrototypeOf`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) and [`Object.setPrototypeOf`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) instead. This does not apply to the `__proto__` literal key in object literals.
- The [`Object.prototype.__defineGetter__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`Object.prototype.__defineSetter__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`Object.prototype.__lookupGetter__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), and [`Object.prototype.__lookupSetter__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) methods are deprecated. Use [`Object.getOwnPropertyDescriptor`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) and [`Object.defineProperty`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) instead.

### String

- HTML wrapper methods like {{jsxref("String.prototype.fontsize")}} and {{jsxref("String.prototype.big")}}.
- {{jsxref("String.prototype.substr")}} probably won't be removed anytime soon, but it's defined in Annex B and hence normative optional.
- `String.prototype.trimLeft` and `String.prototype.trimRight` should be replaced with {{jsxref("String.prototype.trimStart")}} and {{jsxref("String.prototype.trimEnd")}}.

### Date

- The {{jsxref("Global_Objects/Date/getYear", "getYear()")}} and {{jsxref("Global_Objects/Date/setYear", "setYear()")}} methods are affected by the Year-2000-Problem and have been subsumed by {{jsxref("Global_Objects/Date/getFullYear", "getFullYear")}} and {{jsxref("Global_Objects/Date/setFullYear", "setFullYear")}}.
- The `toGMTString()` method is deprecated. Use {{jsxref("Global_Objects/Date/toUTCString", "toUTCString()")}} instead.

### Escape sequences

- Octal escape sequences (\ followed by one, two, or three octal digits) are deprecated in string and regular expression literals.
- The {{jsxref("Global_Objects/escape", "escape")}} and {{jsxref("Global_Objects/unescape", "unescape")}} functions are deprecated. Use {{jsxref("Global_Objects/encodeURI", "encodeURI")}}, {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}}, {{jsxref("Global_Objects/decodeURI", "decodeURI")}} or {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} to encode and decode escape sequences for special characters.

### Statements

The [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) statement is deprecated and unavailable in strict mode.

Initializers in `var` declarations of [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loops headers are deprecated and produce [syntax errors](/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) in strict mode. They are silently ignored in non-strict mode.

Normally, the `catch` block of a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) statement cannot contain any variable declaration with the same name as the variables bound in the `catch()`. An extension grammar allows the `catch` block to contain a [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var) declared variable with the same name as the `catch`-bound identifier, but only if the `catch` binding is a simple identifier, not a [destructuring pattern](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). However, this variable's initialization and assignment would only act on the `catch`-bound identifier, instead of the upper scope variable, and the behavior could be confusing.

```js
var a = 2;
try {
  throw 42;
} catch (a) {
  var a = 1; // This 1 is assigned to the caught `a`, not the outer `a`.
}
console.log(a); // 2

try {
  throw 42;
  // Note: identifier changed to `err` to avoid conflict with
  // the inner declaration of `a`.
} catch (err) {
  var a = 1; // This 1 is assigned to the upper-scope `a`.
}
console.log(a); // 1
```

This is listed in Annex B of the spec and hence may not be implemented everywhere. Avoid any name conflicts between the `catch`-bound identifier and variables declared in the `catch` block.

## Obsolete features

These obsolete features have been entirely removed from JavaScript and can no longer be used as of the indicated version of JavaScript.

### RegExp

The following are now properties of `RegExp` instances, no longer of the `RegExp` constructor:

| Property                                                           | Description                                                                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("RegExp/global", "global")}}                              | Whether or not to test the regular expression against all possible matches in a string, or only against the first. |
| {{jsxref("RegExp/ignoreCase", "ignoreCase")}}                      | Whether or not to ignore case while attempting a match in a string.                                                |
| {{jsxref("RegExp/lastIndex", "lastIndex")}}                        | The index at which to start the next match.                                                                        |
| {{jsxref("RegExp/multiline", "multiline")}} (also via `RegExp.$*`) | Whether or not to search in strings across multiple lines.                                                         |
| {{jsxref("RegExp/source", "source")}}                              | The text of the pattern.                                                                                           |

The `valueOf()` method is no longer specialized for `RegExp`. It uses {{jsxref("Object.prototype.valueOf()")}}, which returns itself.

### Function

- Functions' `arity` property is obsolete. Use [`length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) instead.

### Object

| Property                     | Description                                                                                                | Alternative                                                                                                                                                                          |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `__count__`                  | Returns the number of enumerable properties directly on a user-defined object.                             | [`Object.keys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                                                                                                   |
| `__parent__`                 | Points to an object's context.                                                                             | No direct replacement                                                                                                                                                                |
| `__iterator__`               | Used with [legacy iterators](#legacy_generator_and_iterator).                                              | [`Symbol.iterator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) and the new [iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__`           | A method called when a non-existent property is called as method.                                          | {{jsxref("Proxy")}}                                                                                                                                                                  |
| `Object.prototype.eval()`    | Evaluates a string of JavaScript code in the context of the specified object.                              | No direct replacement                                                                                                                                                                |
| `Object.observe()`           | Asynchronously observing the changes to an object.                                                         | {{jsxref("Proxy")}}                                                                                                                                                                  |
| `Object.unobserve()`         | Remove observers.                                                                                          | {{jsxref("Proxy")}}                                                                                                                                                                  |
| `Object.getNotifier()`       | Create a notifier object that allows to synthetically trigger a change observable with `Object.observe()`. | No direct replacement                                                                                                                                                                |
| `Object.prototype.watch()`   | Attach a handler callback to a property that gets called when the property is assigned.                    | {{jsxref("Proxy")}}                                                                                                                                                                  |
| `Object.prototype.unwatch()` | Remove watch handlers on a property.                                                                       | {{jsxref("Proxy")}}                                                                                                                                                                  |

### String

- Non-standard String generic methods like `String.slice(myStr, 0, 12)`, `String.replace(myStr, /\./g, "!")`, etc. have been introduced in Firefox 1.5 (JavaScript 1.6), deprecated in Firefox 53, and removed in Firefox 68. You can use methods on {{jsxref("String", "String.prototype", "instance_methods")}} together with {{jsxref("Function.call")}} instead.
- `String.prototype.quote` is removed from Firefox 37.
- Non-standard `flags` parameter in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, and {{jsxref("String.prototype.replace")}} are obsolete.

### WeakMap

- `WeakMap.prototype.clear()` was added in Firefox 20 and removed in Firefox 46. It is not possible to traverse all keys in a [`WeakMap`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap).

### Date

- `Date.prototype.toLocaleFormat()`, which used a format string in the same format expected by the `strftime()` function in C, is obsolete. Use [`toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) or [`Intl.DateTimeFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) instead.

### Array

- Non-standard Array generic methods like `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)`, etc. have been introduced in Firefox 1.5 (JavaScript 1.6), deprecated in Firefox 68, and removed in Firefox 71. You can use methods on {{jsxref("Array", "Array.prototype", "instance_methods")}} together with {{jsxref("Function.call")}} instead.

| Property            | Description                                 | Alternative         |
| ------------------- | ------------------------------------------- | ------------------- |
| `Array.observe()`   | Asynchronously observing changes to Arrays. | {{jsxref("Proxy")}} |
| `Array.unobserve()` | Remove observers.                           | {{jsxref("Proxy")}} |

### Number

- `Number.toInteger()` is obsolete. Use [`Math.floor`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [`Math.round`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round), or other methods instead.

### Proxy

- `Proxy.create` and `Proxy.createFunction` are obsolete. Use the {{jsxref("Proxy/Proxy", "Proxy()")}} constructor instead.
- The following traps are obsolete:
  - `hasOwn` ([bug 980565](https://bugzil.la/980565), Firefox 33).
  - `getEnumerablePropertyKeys` ([bug 783829](https://bugzil.la/783829), Firefox 37)
  - `getOwnPropertyNames` ([bug 1007334](https://bugzil.la/1007334), Firefox 33)
  - `keys` ([bug 1007334](https://bugzil.la/1007334), Firefox 33)

### ParallelArray

- `ParallelArray` is obsolete.

### Statements

- `for each...in` is obsolete. Use {{jsxref("Statements/for...of", "for...of")}} instead.
- let blocks and let expressions are obsolete.
- Expression closures (`function () 1` as a shorthand of `function () { return 1; }`) are obsolete. Use regular {{jsxref("Operators/function", "functions")}} or {{jsxref("Functions/Arrow_functions", "arrow functions", "", 1)}} instead.

### Acquiring source text

The `toSource()` methods of arrays, numbers, strings, etc. and the `uneval()` global function are obsolete. Use [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), or write your own serialization method instead.

### Legacy generator and iterator

Legacy generator function statements and legacy generator function expressions are removed. The legacy generator function syntax reuses the `function` keyword, which automatically becomes a generator function when there are one or more `yield` expressions in the body — this is now a syntax error. Use [`function*` statements](/en-US/docs/Web/JavaScript/Reference/Statements/function*) and [`function*` expressions](/en-US/docs/Web/JavaScript/Reference/Operators/function*) instead.

Array comprehensions and generator comprehensions are removed.

```
// Legacy array comprehensions
[for (x of iterable) x]
[for (x of iterable) if (condition) x]
[for (x of iterable) for (y of iterable) x + y]

// Legacy generator comprehensions
(for (x of iterable) x)
(for (x of iterable) if (condition) x)
(for (x of iterable) for (y of iterable) x + y)
```

Firefox, prior to version 26, implemented another iterator protocol that is similar to the standard [Iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols). An object is an legacy iterator when it implements a `next()` method, which produces a value on each call and throws a `StopIteration` object at the end of iteration. This legacy iterator protocol differs from the standard iterator protocol:

- The value was returned directly as the return value of calls to `next()`, instead of the `value` property of the `IteratorResult` object.
- Iteration termination was expressed by throwing a `StopIteration` object, instead of through the `done` property of the `IteratorResult` object.

This feature, along with the `StopIteration` global constructor, was removed in Firefox 58+. For future-facing usages, consider using [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops and the [iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).

### Sharp variables

Sharp variables are obsolete. To create circular structures, use temporary variables instead.
