---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.sub
---

{{JSRef}} {{deprecated_header}}

The **`sub()`** method of {{jsxref("String")}} values creates a string that embeds this string in a {{HTMLElement("sub")}} element (`<sub>str</sub>`), which causes this string to be displayed as subscript.

> **Note:** All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.

## Syntax

```js-nolint
sub()
```

### Parameters

None.

### Return value

A string beginning with a `<sub>` start tag, then the text `str`, and then a `</sub>` end tag.

## Examples

### Using sub() and sup() methods

The following example uses the `sub()` and {{jsxref("String/sup", "sup()")}} methods to format a string:

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

- [Polyfill of `String.prototype.sub` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.sup()")}}
