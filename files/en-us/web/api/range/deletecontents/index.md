---
title: Range.deleteContents()
slug: Web/API/Range/deleteContents
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.deleteContents
---
{{ApiRef("DOM")}}

The **`Range.deleteContents()`** method removes the contents of
the {{ domxref("Range") }} from the {{ domxref("Document") }}.

Unlike {{ domxref("Range.extractContents()") }}, this method does not return a
{{domxref("DocumentFragment")}} containing the deleted content.

## Syntax

```js
range.deleteContents()
```

## Example

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
range.deleteContents();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
