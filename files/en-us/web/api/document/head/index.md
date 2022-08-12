---
title: Document.head
slug: Web/API/Document/head
page-type: web-api-instance-property
tags:
  - API
  - Document
  - HTML DOM
  - Property
  - Reference
browser-compat: api.Document.head
---
{{APIRef("DOM")}}

The **`head`** read-only property of
the {{domxref("Document")}} interface returns the {{HTMLElement("head")}} element of
the current document.

## Value

An {{domxref("HTMLHeadElement")}}.

## Examples

```html
<!doctype html>
<head id="my-document-head">
  <title>Example: using document.head</title>
</head>

<script>
  const theHead = document.head;

  console.log(theHead.id); // "my-document-head";

  console.log(theHead === document.querySelector("head")); // true
</script>
```

## Notes

`document.head` is read-only. Trying to assign a value to this property will
fail silently or, in [Strict Mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), throws a {{jsxref("TypeError")}} .

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.body")}}
