---
title: "Document: characterSet property"
short-title: characterSet
slug: Web/API/Document/characterSet
page-type: web-api-instance-property
browser-compat: api.Document.characterSet
---

{{ ApiRef("DOM") }}

The **`Document.characterSet`**
read-only property returns the [character encoding](/en-US/docs/Glossary/Character_encoding) of the
document that it's currently rendered with.

> **Note:** A "character set" and a "character encoding" are related, but different. Despite the
> name of this property, it returns the _encoding_.

Users can override the developer-specified encoding inside the [Content-Type](/en-US/docs/Web/HTTP/Headers/Content-Type) header or inline
like `<meta charset="utf-8">`, such as with Firefox's <kbd>View → Text
Encoding</kbd> menu. This override is provided to fix incorrect developer-specified
encodings that result in [garbled text](https://en.wikipedia.org/wiki/Mojibake).

> **Note:** The properties `document.charset` and `document.inputEncoding`
> are legacy aliases for `document.characterSet`. Do not use them any more.

## Value

A string.

## Examples

```html
<button onclick="console.log(document.characterSet);">
  Log character encoding
</button>
<!-- displays document's character encoding in the dev console, such as "ISO-8859-1" or "UTF-8" -->
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
