---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.anchor
---
{{JSRef}} {{deprecated_header}}

The **`anchor()`** method creates a string beginning with an
`<a name="...">` start tag, then some text, and then an
`</a>` end tag.

> **Warning:** Don't use this method. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) instead.
> Also, the HTML specification no longer allows the
> {{HTMLElement("a")}} element to have a `name` attribute, so this method
> doesn't even create valid markup.

## Syntax

```js
anchor(name)
```

### Parameters

- `name`
  - : A string representing a `name` value to put into the generated
    `<a name="...">` start tag.

### Return value

A string beginning with an `<a name="name">` start tag,
then the text _str_, and then an `</a>` end tag.

## Description

Don't use this method. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) instead.
Also, the HTML specification no longer allows the
{{HTMLElement("a")}} element to have a `name` attribute, so this method
doesn't even create valid markup.

## Examples

### Using anchor()

```js
const myString = 'Table of Contents';

document.body.innerHTML = myString.anchor('contents_anchor');
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
