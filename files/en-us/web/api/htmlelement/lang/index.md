---
title: "HTMLElement: lang property"
short-title: lang
slug: Web/API/HTMLElement/lang
page-type: web-api-instance-property
browser-compat: api.HTMLElement.lang
---

{{ APIRef("HTML DOM") }}

The **`lang`** property of the {{domxref("HTMLElement")}} interface indicates the base language of an element's attribute values and text content, in the form of a {{RFC(5646, "BCP 47 language identifier tag")}}. It reflects the element's [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang) attribute; the `xml:lang` attribute does not affect this property.

Note that if the `lang` attribute is unspecified, the element itself may still inherit the language from its parent. However, that inherited language is not reflected by this property's value.

## Value

A string. Common examples include "en" for English, "ja" for Japanese, "es" for Spanish and so on. If unspecified, the value is an empty string.

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
