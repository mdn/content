---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.replaceAll
---

{{JSRef}}

The **`replaceAll()`** method of {{jsxref("String")}} values returns a new string with all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a string or a {{jsxref("RegExp")}}, and the `replacement` can be a string or a function to be called for each match. The original string is left unchanged.

{{InteractiveExample("JavaScript Demo: String.replaceAll()")}}

```js interactive-example
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll("dog", "monkey"));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(paragraph.replaceAll(regex, "ferret"));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"
```

## Syntax

```js-nolint
replaceAll(pattern, replacement)
```

### Parameters

- `pattern`

  - : Can be a string or an object with a [`Symbol.replace`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) method — the typical example being a [regular expression](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Any value that doesn't have the `Symbol.replace` method will be coerced to a string.

    If `pattern` [is a regex](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), then it must have the global (`g`) flag set, or a {{jsxref("TypeError")}} is thrown.

- `replacement`
  - : Can be a string or a function. The replacement has the same semantics as that of [`String.prototype.replace()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

### Return value

A new string, with all matches of a pattern replaced by a replacement.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the `pattern` [is a regex](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes) that does not have the global (`g`) flag set (its [`flags`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) property does not contain `"g"`).

## Description

This method does not mutate the string value it's called on. It returns a new string.

Unlike [`replace()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), this method replaces all occurrences of a string, not just the first one. While it is also possible to use `replace()` with a global regex dynamically constructed with [`RegExp()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) to replace all instances of a string, this can have unintended consequences if the string contains special characters that have meaning in regular expressions (which might happen if the replacement string comes from user input). While you can mitigate this case using {{jsxref("RegExp.escape()")}} to make the regular expression string into a literal pattern, it is better to just use `replaceAll()` and pass the string without converting it to a regex.

```js
function unsafeRedactName(text, name) {
  return text.replace(new RegExp(name, "g"), "[REDACTED]");
}
function safeRedactName(text, name) {
  return text.replaceAll(name, "[REDACTED]");
}

const report =
  "A hacker called ha.*er used special characters in their name to breach the system.";

console.log(unsafeRedactName(report, "ha.*er")); // "A [REDACTED]s in their name to breach the system."
console.log(safeRedactName(report, "ha.*er")); // "A hacker called [REDACTED] used special characters in their name to breach the system."
```

If `pattern` is an object with a [`Symbol.replace`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) method (including `RegExp` objects), that method is called with the target string and `replacement` as arguments. Its return value becomes the return value of `replaceAll()`. In this case the behavior of `replaceAll()` is entirely encoded by the `[Symbol.replace]()` method, and therefore will have the same result as `replace()` (apart from the extra input validation that the regex is global).

If the `pattern` is an empty string, the replacement will be inserted in between every UTF-16 code unit, similar to [`split()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) behavior.

```js
"xxx".replaceAll("", "_"); // "_x_x_x_"
```

For more information about how regex properties (especially the [sticky](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) flag) interact with `replaceAll()`, see [`RegExp.prototype[Symbol.replace]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

## Examples

### Using replaceAll()

```js
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
```

### Non-global regex throws

When using a regular expression search value, it must be global. This won't work:

```js example-bad
"aabbcc".replaceAll(/b/, ".");
// TypeError: replaceAll must be called with a global RegExp
```

This will work:

```js example-good
"aabbcc".replaceAll(/b/g, ".");
("aa..cc");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.replaceAll` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Regular expressions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions) guide
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
