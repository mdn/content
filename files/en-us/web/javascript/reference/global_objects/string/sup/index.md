---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.sup
---
{{JSRef}} {{deprecated_header}}

The **`sup()`** method creates a {{HTMLElement("sup")}} HTML
element that causes a string to be displayed as superscript.

## Syntax

```js
sup()
```

### Return value

A string containing a {{HTMLElement("sup")}} HTML element.

## Description

The `sup()` method embeds a string in a `<sup>` element:
"`<sup>str</sup>`".

## Examples

### Using sub() and sup() methods

The following example uses the {{jsxref("String.prototype.sub()", "sub()")}} and
`sup()` methods to format a string:

```js
const superText = 'superscript';
const subText = 'subscript';

console.log(`This is what a ${superText.sup()} looks like.`);
// "This is what a <sup>superscript</sup> looks like."

console.log(`This is what a ${subText.sub()} looks like.`);
// "This is what a <sub>subscript</sub> looks like."
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.sup` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.sub()")}}
