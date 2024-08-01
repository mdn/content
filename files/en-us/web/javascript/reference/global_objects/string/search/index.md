---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.search
---

{{JSRef}}

The **`search()`** method of {{jsxref("String")}} values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.

{{EmbedInteractiveExample("pages/js/string-search.html")}}

## Syntax

```js-nolint
search(regexp)
```

### Parameters

- `regexp`

  - : A regular expression object, or any object that has a [`Symbol.search`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search) method.

    If `regexp` is not a `RegExp` object and does not have a `Symbol.search` method, it is implicitly converted to a {{jsxref("RegExp")}} by using `new RegExp(regexp)`.

### Return value

The index of the first match between the regular expression and the given string, or `-1` if no match was found.

## Description

The implementation of `String.prototype.search()` itself is very simple — it simply calls the `Symbol.search` method of the argument with the string as the first parameter. The actual implementation comes from [`RegExp.prototype[Symbol.search]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search).

The `g` flag of `regexp` has no effect on the `search()` result, and the search always happens as if the regex's `lastIndex` is 0. For more information on the behavior of `search()`, see [`RegExp.prototype[Symbol.search]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search).

When you want to know whether a pattern is found, and _also_ know its index within a string, use `search()`.

- If you only want to know if it exists, use the {{jsxref("RegExp.prototype.test()")}} method, which returns a boolean.
- If you need the content of the matched text, use {{jsxref("String.prototype.match()")}} or {{jsxref("RegExp.prototype.exec()")}}.

## Examples

### Using search()

The following example searches a string with two different regex objects to show a successful search (positive value) vs. an unsuccessful search (`-1`).

```js
const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.search` in `core-js` with fixes and implementation of modern behavior like `Symbol.search` support](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Regular expressions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions) guide
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- [`RegExp.prototype[Symbol.search]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
