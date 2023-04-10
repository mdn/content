---
title: "HTMLElement: lang property"
short-title: lang
slug: Web/API/HTMLElement/lang
page-type: web-api-instance-property
browser-compat: api.HTMLElement.lang
---

{{ APIRef("HTML DOM") }}

The **`HTMLElement.lang`** property gets or sets the base
language of an element's attribute values and text content.

The language code returned by this property is defined in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.
Common examples include "en" for English, "ja" for
Japanese, "es" for Spanish and so on. The default value of this attribute is
`unknown`. Note that this attribute, though valid at the individual element
level described here, is most often specified for the root element of the document.

This also only works with the `lang` attribute and not with
`xml:lang`.

## Value

A string.

## Examples

```js
// this snippet compares the base language and
// redirects to another URL based on language
if (document.documentElement.lang === "en") {
  window.location.href = "Some_document.html.en";
} else if (document.documentElement.lang === "ru") {
  window.location.href = "Some_document.html.ru";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
