---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - String
  - Polyfill
browser-compat: javascript.builtins.String.sub
---
{{JSRef}} {{deprecated_header}}

The **`sub()`** method creates a {{HTMLElement("sub")}} HTML
element that causes a string to be displayed as subscript.

## Syntax

```js
sub()
```

### Return value

A string containing a {{HTMLElement("sub")}} HTML element.

## Description

The `sub()` method embeds a string in a `<sub>` element:
"`<sub>str</sub>`".

## Examples

### Using sub() and sup() methods

The following example uses the `sub()` and
{{jsxref("String.prototype.sup()", "sup()")}} methods to format a string:

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

- [Polyfill of `String.prototype.sub` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.sup()")}}
