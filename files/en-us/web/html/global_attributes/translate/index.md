---
title: translate
slug: Web/HTML/Global_attributes/translate
page-type: html-attribute
browser-compat: html.global_attributes.translate
---

{{HTMLSidebar("Global_attributes")}}

The **`translate`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is an [enumerated](/en-US/docs/Glossary/Enumerated) attribute that is used to specify whether an element's _translatable attribute_ values and its {{domxref("Text")}} node children should be translated when the page is localized, or whether to leave them unchanged.

It can have the following values:

- empty string or `yes`, which indicates that the element should be translated when the page is localized.
- `no`, which indicates that the element must not be translated.

Although not all browsers recognize this attribute, it is respected by automatic translation systems such as Google Translate, and may also be respected by tools used by human translators. As such it's important that web authors use this attribute to mark content that should not be translated.

## Examples

In this example, the `translate` attribute is used to ask translation tools not to translate the company's brand name in the footer.

```html
<footer>
  <small>© 2020 <span translate="no">BrandName</span></small>
</footer>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).
- The {{domxref("HTMLElement.translate")}} property that reflects this attribute.
- [Using HTML's translate attribute](https://www.w3.org/International/questions/qa-translate-flag).
- HTML [`lang`](/en-US/docs/Web/HTML/Global_attributes#lang) attribute
