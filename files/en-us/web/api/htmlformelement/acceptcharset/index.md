---
title: "HTMLFormElement: acceptCharset property"
short-title: acceptCharset
slug: Web/API/HTMLFormElement/acceptCharset
page-type: web-api-instance-property
browser-compat: api.HTMLFormElement.acceptCharset
---

{{APIRef("HTML DOM")}}

The **`HTMLFormElement.acceptCharset`** property represents the {{glossary("character encoding")}} for the given {{htmlelement("form")}} element.

The specification allows a single case-insensitive value of `"UTF-8"`, reflecting the ubiquity of this encoding (historically multiple character encodings could be specified as a comma-separated or space-separated list).

This reflects the value of the form's [`accept-charset`](/en-US/docs/Web/HTML/Element/form#accept-charset) HTML attribute.

## Value

A string which may be a case-insensitive match for `UTF-8`.

## Examples

```js
let charSet = document.forms["my-form"].acceptCharset;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
