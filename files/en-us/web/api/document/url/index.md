---
title: Document.URL
slug: Web/API/Document/URL
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Document
  - Property
  - Reference
browser-compat: api.Document.URL
---
{{APIRef("DOM")}}

The **`URL`** read-only property of the {{domxref("Document")}}
interface returns the document location as a string.

## Value

A string containing the URL of the document.

## Examples

### JavaScript

```js
document.getElementById("url").textContent = document.URL;
```

### HTML

```html
<p id="urlText">
  URL:<br/>
  <span id="url">URL goes here</span>
</p>
```

### Result

{{EmbedLiveSample("Examples", "100%", 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("document.documentURI")}} property which returns the same value.
