---
title: "Range: deleteContents() method"
short-title: deleteContents()
slug: Web/API/Range/deleteContents
page-type: web-api-instance-method
browser-compat: api.Range.deleteContents
---

{{ApiRef("DOM")}}

The **`Range.deleteContents()`** method removes the contents of
the {{ domxref("Range") }} from the {{ domxref("Document") }}.

In the context of a {{ domxref("Range") }}, when a node is partially selected—meaning it overlaps with the start or end of the selection—only the selected portion of the text is deleted, while the node itself remains intact. However, if a node is fully selected, the entire node and its contents are removed.

Unlike {{ domxref("Range.extractContents()") }}, this method does not return a
{{domxref("DocumentFragment")}} containing the deleted content.

## Syntax

```js-nolint
deleteContents()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

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
