---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.blink
---

{{JSRef}} {{deprecated_header}}

The **`blink()`** method of {{jsxref("String")}} values creates a string that embeds this string in a (`<blink>str</blink>`), which used to cause a string to blink in old browsers.

> **Note:** All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. For the case of `blink()`, the `<blink>` element itself is removed from modern browsers, and blinking text is frowned upon by several accessibility standards. Avoid using the element in any way.

## Syntax

```js-nolint
blink()
```

### Parameters

None.

### Return value

A string beginning with a `<blink>` start tag, then the text `str`, and then a `</blink>` end tag.

## Examples

### Using blink()

The following example uses deprecated string methods to change the formatting of a string:

```js
const worldString = "Hello, world";

console.log(worldString.blink()); // <blink>Hello, world</blink>
console.log(worldString.bold()); // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike()); // <strike>Hello, world</strike>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.blink` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
