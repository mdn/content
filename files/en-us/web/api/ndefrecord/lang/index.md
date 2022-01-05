---
title: NDEFRecord.lang
slug: Web/API/NDEFRecord/lang
tags:
  - NDEF
  - Reference
  - Web NFC
browser-compat: api.NDEFRecord.lang
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

The **`lang`**
property of the {{DOMxRef("NDEFRecord")}} interface returns the language of
a textual payload, or `null` if one was not supplied.

The record might be missing a language tag, for example, if the recorded information is
not locale-specific.

## Syntax

```js
NDEFRecord.lang
```

### Value

A {{DOMxRef("USVString")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML `lang` attribute](/en-US/docs/Web/HTML/Global_attributes/lang), that declares content langauge of the document or its elements
- HTTP headers that declare content language: {{HTTPHeader("Content-Language")}} and {{HTTPHEader("Accept-Language")}}
