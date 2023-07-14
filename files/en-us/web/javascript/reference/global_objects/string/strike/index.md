---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.strike
---

{{JSRef}} {{deprecated_header}}

The **`strike()`** method creates a string that embeds a string in a {{HTMLElement("strike")}} element (`<strike>str</strike>`), which causes a string to be displayed as struck-out text.

> **Note:** All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.

## Syntax

```js-nolint
strike()
```

### Return value

A string beginning with a `<strike>` start tag, then the text `str`, and then a `</strike>` end tag.

## Examples

### Using strike()

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

- [Polyfill of `String.prototype.strike` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
