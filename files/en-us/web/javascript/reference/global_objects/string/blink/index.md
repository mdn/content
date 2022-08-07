---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.blink
---
{{JSRef}} {{deprecated_header}}

The **`blink()`** method creates a {{HTMLElement("blink")}}
HTML element that causes a string to blink.

> **Warning:** Blinking text is frowned upon by several accessibility
> standards. The `<blink>` element itself is non-standard and
> deprecated!

## Syntax

```js
blink()
```

### Return value

A string containing a {{HTMLElement("blink")}} HTML element.

## Description

The `blink()` method embeds a string in a `<blink>` element: `"<blink>str</blink>"`.

## Examples

### Using blink()

The following example uses deprecated string methods to change the formatting of a string:

```js
const worldString = 'Hello, world';

console.log(worldString.blink());   // <blink>Hello, world</blink>
console.log(worldString.bold());    // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike());  // <strike>Hello, world</strike>
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
