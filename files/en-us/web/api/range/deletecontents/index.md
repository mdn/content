---
title: "Range: deleteContents() method"
short-title: deleteContents()
slug: Web/API/Range/deleteContents
page-type: web-api-instance-method
browser-compat: api.Range.deleteContents
---

{{ApiRef("DOM")}}

The **`Range.deleteContents()`** method removes all completely-selected {{ domxref("Node", "nodes", "", "nocode") }} within this range from the document. For the partially selected nodes at the start or end of the range, only the selected portion of the text is deleted, while the node itself remains intact. Afterwards, the range is collapsed to the end of the last selected node.

```plain
<p>paragraph 1</p><p>paragraph 2</p><p>paragraph 3</p>
       ^----------- selection ------------^

deleteContents() returns:

<p>para</p><p>graph 3</p>
```

Unlike {{ domxref("Range.extractContents()") }}, this method does not return a {{domxref("DocumentFragment")}} containing the deleted content.

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
