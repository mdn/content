---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.anchor
---

{{JSRef}} {{deprecated_header}}

The **`anchor()`** method of {{jsxref("String")}} values creates a string that embeds this string in an {{HTMLElement("a")}} element with a name (`<a name="...">str</a>`).

> **Note:** All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.
>
> The HTML specification no longer allows the {{HTMLElement("a")}} element to have a `name` attribute, so this method doesn't even create valid markup.

## Syntax

```js-nolint
anchor(name)
```

### Parameters

- `name`
  - : A string representing a `name` value to put into the generated `<a name="...">` start tag.

### Return value

A string beginning with an `<a name="name">` start tag (double quotes in `name` are replaced with `&quot;`), then the text `str`, and then an `</a>` end tag.

## Examples

### Using anchor()

```js
const myString = "Table of Contents";

document.body.innerHTML = myString.anchor("contents_anchor");
```

will output the following HTML:

```html
<a name="contents_anchor">Table of Contents</a>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.anchor` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.link()")}}
