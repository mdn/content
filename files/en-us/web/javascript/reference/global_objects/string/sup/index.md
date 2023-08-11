---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.sup
---

{{JSRef}} {{deprecated_header}}

The **`sup()`** method of {{jsxref("String")}} values creates a string that embeds this string in a {{HTMLElement("sup")}} element (`<sup>str</sup>`), which causes this string to be displayed as superscript.

> **Note:** All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.

## Syntax

```js-nolint
sup()
```

### Return value

A string beginning with a `<sup>` start tag, then the text `str`, and then a `</sup>` end tag.

## Examples

### Using sub() and sup() methods

The following example uses the {{jsxref("String/sub", "sub()")}} and `sup()` methods to format a string:

```js
const superText = "superscript";
const subText = "subscript";

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
