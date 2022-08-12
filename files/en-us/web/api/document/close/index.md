---
title: Document.close()
slug: Web/API/Document/close
page-type: web-api-instance-method
tags:
  - API
  - Document
  - HTML DOM
  - Method
  - Reference
browser-compat: api.Document.close
---
{{APIRef("DOM")}}

The **`Document.close()`** method finishes writing to a
document, opened with {{domxref("Document.open()")}}.

## Syntax

```js
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
// Open a document to write to it
document.open();

// Write the content of the document
document.write("<p>The one and only content.</p>");

// Close the document
document.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
