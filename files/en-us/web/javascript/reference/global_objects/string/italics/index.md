---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.italics
---

{{JSRef}} {{deprecated_header}}

The **`italics()`** method of {{jsxref("String")}} values creates a string that embeds this string in an {{HTMLElement("i")}} element (`<i>str</i>`), which causes this string to be displayed as italic.

> **Note:** All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.

## Syntax

```js-nolint
italics()
```

### Parameters

None.

### Return value

A string beginning with an `<i>` start tag, then the text `str`, and then an `</i>` end tag.

## Examples

### Using italics()

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

- [Polyfill of `String.prototype.italics` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.strike()")}}
