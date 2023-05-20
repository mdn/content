---
title: "NDEFRecord: lang property"
short-title: lang
slug: Web/API/NDEFRecord/lang
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NDEFRecord.lang
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

The **`lang`**
property of the {{DOMxRef("NDEFRecord")}} interface returns the language of
a textual payload, or `null` if one was not supplied.

The record might be missing a language tag, for example, if the recorded information is
not locale-specific.

## Syntax

```js-nolint
NDEFRecord.lang
```

### Value

A string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML `lang` attribute](/en-US/docs/Web/HTML/Global_attributes/lang), that declares content language of the document or its elements
- HTTP headers that declare content language: {{HTTPHeader("Content-Language")}} and {{HTTPHEader("Accept-Language")}}
