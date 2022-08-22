---
title: Deprecated and obsolete features
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
tags:
  - Deprecated
  - Guide
  - JavaScript
  - Deprecated
---
{{JsSidebar("More")}}

This page lists features of JavaScript that are deprecated (that is, still available but planned for removal) and obsolete (that is, no longer usable).

## Deprecated features

These deprecated features can still be used, but should be used with caution because they are expected to be removed entirely sometime in the future. You should work to remove their use from your code.

Some of these deprecated features are listed in the [Annex B](https://tc39.es/ecma262/#sec-additional-ecmascript-features-for-web-browsers) section of the ECMAScript specification. This section is described as normative optional — that is, web browser hosts must implement these features, while non-web hosts may not. These features are likely stable because removing them will cause backward compatibility issues and break legacy websites. (JavaScript has the design goal of "don't break the web".) Still, they are not cross-platform portable and may not be supported by all analysis tools, so you are advised to not use them, as the introduction of Annex B states:

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

<table class="standard-table">
  <tbody>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.n", "$1-$9")}}</td>
      <td>
        <p>
          Parenthesized substring matches, if any.<br /><strong
            >Warning:</strong
          >
          Using these properties can result in problems, since browser
          extensions can modify them. Avoid them!
        </p>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.input", "$_")}}</td>
      <td>See <code>input</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastMatch", "$&amp;")}}</td>
      <td>See <code>lastMatch</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastParen", "$+")}}</td>
      <td>See <code>lastParen</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.leftContext", "$`")}}</td>
      <td>See <code>leftContext</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.rightContext", "$'")}}</td>
      <td>See <code>rightContext</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.input", "input")}}</td>
      <td>The string against which a regular expression is matched.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastMatch", "lastMatch")}}</td>
      <td>The last matched characters.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastParen", "lastParen")}}</td>
      <td>The last parenthesized substring match, if any.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.leftContext", "leftContext")}}</td>
      <td>The substring preceding the most recent match.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.rightContext", "rightContext")}}</td>
      <td>The substring following the most recent match.</td>
    </tr>
  </tbody>
</table>

The {{jsxref("RegExp.compile", "compile()")}} method is deprecated. Construct a new `RegExp` instance instead.

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
- The {{jsxref("Global_Objects/Date/toGMTString", "toGMTString()")}} method is deprecated. Use {{jsxref("Global_Objects/Date/toUTCString", "toUTCString()")}} instead.

### Escape sequences

- Octal escape sequences (\ followed by one, two, or three octal digits) are deprecated in string and regular expression literals.
- The {{jsxref("Global_Objects/escape", "escape")}} and {{jsxref("Global_Objects/unescape", "unescape")}} functions are deprecated. Use {{jsxref("Global_Objects/encodeURI", "encodeURI")}}, {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}}, {{jsxref("Global_Objects/decodeURI", "decodeURI")}} or {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} to encode and decode escape sequences for special characters.

### Statements

The [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) statement is deprecated and unavailable in strict mode.

Initializers in `var` declarations of [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loops headers are deprecated and produce syntax errors in strict mode. They are silently ignored in non-strict mode.

## Obsolete features

These obsolete features have been entirely removed from JavaScript and can no longer be used as of the indicated version of JavaScript.

### RegExp

The following are now properties of `RegExp` instances, no longer of the `RegExp` constructor:

| Property                                                     | Description                                                                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("RegExp.global", "global")}}             | Whether or not to test the regular expression against all possible matches in a string, or only against the first. |
| {{jsxref("RegExp.ignoreCase", "ignoreCase")}} | Whether or not to ignore case while attempting a match in a string.                                                |
| {{jsxref("RegExp.lastIndex", "lastIndex")}}     | The index at which to start the next match.                                                                        |
| {{jsxref("RegExp.multiline", "multiline")}} (also via `RegExp.$*`) | Whether or not to search in strings across multiple lines.                                                         |
| {{jsxref("RegExp.source", "source")}}             | The text of the pattern.                                                                                           |

The `valueOf()` method is no longer specialized for `RegExp`. It uses {{jsxref("Object.prototype.valueOf()")}}, which returns itself.

### Function

- Functions' `arity` property is obsolete. Use [`length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) instead.

### Object

| Property | Description | Alternative |
| -------- | ----------- | ----------- |
| `__count__` | Returns the number of enumerable properties directly on a user-defined object. | [`Object.keys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) |
| `__parent__` | Points to an object's context. | No direct replacement |
| `__iterator__` | Used with [legacy iterators](#legacy_generator_and_iterator). |  [`Symbol.iterator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) and the new [iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__` | A method called when a non-existent property is called as method. | {{jsxref("Proxy")}} |
| `Object.prototype.eval()` | Evaluates a string of JavaScript code in the context of the specified object.  | No direct replacement |
| `Object.observe()` | Asynchronously observing the changes to an object. | {{jsxref("Proxy")}} |
| `Object.unobserve()` | Remove observers. | {{jsxref("Proxy")}} |
| `Object.getNotifier()` | Create a notifier object that allows to synthetically trigger a change observable with `Object.observe()`. | No direct replacement |
| `Object.prototype.watch()` | Attach a handler callback to a property that gets called when the property is assigned. | {{jsxref("Proxy")}} |
| `Object.prototype.unwatch()` | Remove watch handlers on a property. | {{jsxref("Proxy")}} |

### String

- Non-standard String generic methods like `String.slice(myStr, 0, 12)`, `String.replace(myStr, /\./g, "!")`, etc. have been introduced in Firefox 1.5 (JavaScript 1.6), deprecated in Firefox 53, and removed in Firefox 68. You can use methods on {{jsxref("String", "String.prototype", "instance_methods")}} together with {{jsxref("Function.call")}} instead.
- `String.prototype.quote` is removed from Firefox 37.
- Non-standard `flags` parameter in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, and {{jsxref("String.prototype.replace")}} are obsolete.

### Date

- `Date.prototype.toLocaleFormat()` is obsolete. Use [`toLocaleString`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) or [`Intl.DateTimeFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) instead.

### Array

- Non-standard Array generic methods like `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)`, etc. have been introduced in Firefox 1.5 (JavaScript 1.6), deprecated in Firefox 68, and removed in Firefox 71. You can use methods on {{jsxref("Array", "Array.prototype", "instance_methods")}} together with {{jsxref("Function.call")}} instead.

| Property | Description | Alternative |
| -------- | ----------- | ----------- |
| `Array.observe()` | Asynchronously observing changes to Arrays. | {{jsxref("Proxy")}} |
| `Array.unobserve()` | Remove observers. | {{jsxref("Proxy")}} |

### Number

- `Number.toInteger()` is obsolete. Use [`Math.floor`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [`Math.round`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round), or other methods instead.

### Proxy

- `Proxy.create` and `Proxy.createFunction` are obsolete. Use the {{jsxref("Proxy/Proxy", "Proxy()")}} constructor instead.
- The following traps are obsolete:
  - `hasOwn` ([bug 980565](https://bugzilla.mozilla.org/show_bug.cgi?id=980565), Firefox 33).
  - `getEnumerablePropertyKeys` ([bug 783829](https://bugzilla.mozilla.org/show_bug.cgi?id=783829), Firefox 37)
  - `getOwnPropertyNames` ([bug 1007334](https://bugzilla.mozilla.org/show_bug.cgi?id=1007334), Firefox 33)
  - `keys` ([bug 1007334](https://bugzilla.mozilla.org/show_bug.cgi?id=1007334), Firefox 33)

### ParallelArray

- `ParallelArray` is obsolete.

### Statements

- `for each...in` is obsolete. Use {{jsxref("Statements/for...of", "for...of")}} instead.
- let blocks and let expressions are obsolete.
- [Expression closures](/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_expression_closures) are obsolete. Use regular {{jsxref("Operators/function", "functions")}} or {{jsxref("Functions/Arrow_functions", "arrow functions", "", 1)}} instead.

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

The `Iterator` and `StopIteration` globals from the [legacy iterator protocol](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol) are obsolete.

### Sharp variables

Sharp variables are obsolete. To create circular structures, use temporary variables instead.
