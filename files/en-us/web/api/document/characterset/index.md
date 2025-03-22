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

> [!NOTE]
> A "character set" and a "character encoding" are related, but different. Despite the
> name of this property, it returns the _encoding_.

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
