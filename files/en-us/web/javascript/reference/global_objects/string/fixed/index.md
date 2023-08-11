---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.fixed
---

{{JSRef}} {{deprecated_header}}

The **`fixed()`** method of {{jsxref("String")}} values creates a string that embeds this string in a {{HTMLElement("tt")}} element (`<tt>str</tt>`), which causes this string to be displayed in a fixed-pitch font.

> **Note:** All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.

## Syntax

```js-nolint
fixed()
```

### Return value

A string beginning with a `<tt>` start tag, then the text `str`, and then a `</tt>` end tag.

## Examples

### Using fixed()

The following example uses the `fixed` method to change the formatting of a string:

```js
const worldString = "Hello, world";
console.log(worldString.fixed()); // "<tt>Hello, world</tt>"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.fixed` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
