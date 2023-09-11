---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.bold
---

{{JSRef}} {{deprecated_header}}

The **`bold()`** method of {{jsxref("String")}} values creates a string that embeds this string in a {{HTMLElement("b")}} element (`<b>str</b>`), which causes this string to be displayed as bold.

> **Note:** All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.

## Syntax

```js-nolint
bold()
```

### Parameters

None.

### Return value

A string beginning with a `<b>` start tag, then the text `str`, and then a `</b>` end tag.

## Examples

### Using bold()

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

- [Polyfill of `String.prototype.bold` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
