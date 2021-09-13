---
title: Document.documentURI
slug: Web/API/Document/documentURI
tags:
  - API
  - DOM
  - Document
  - Property
  - Read-only
  - Reference
browser-compat: api.Document.documentURI
---
{{ApiRef("DOM")}}

The **`documentURI`** read-only property of the
{{domxref("Document")}} interface returns the document location as a string.

## Syntax

```js
const uri = document.documentURI
```

## Example

### JavaScript

```js
document.getElementById("url").textContent = document.documentURI;
```

### HTML

```html
<p id="urlText">
  URL:<br/>
  <span id="url">URL goes here</span>
</p>
```

### Result

{{EmbedLiveSample("Example", "100%", 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("document.URL")}} property which returns the same value.
