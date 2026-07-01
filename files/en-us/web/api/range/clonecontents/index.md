---
title: "Range: cloneContents() method"
short-title: cloneContents()
slug: Web/API/Range/cloneContents
page-type: web-api-instance-method
browser-compat: api.Range.cloneContents
---

{{ APIRef("DOM") }}

The **`cloneContents()`** method of the {{domxref("Range")}} interface copies the selected {{ domxref("Node") }} children of the range's {{domxref("Range/commonAncestorContainer", "commonAncestorContainer")}} and puts them in a new {{domxref("DocumentFragment")}} object.

Nodes are cloned using the same algorithm as {{ domxref("Node.cloneNode()") }}, which means event listeners attached with scripts are not cloned. HTML `id` attributes are cloned, which can lead to an invalid document through cloning.

The first and last selected children of `commonAncestorContainer` may be partially selected. In this case, the child node itself is cloned, but its content is only the part that is selected, by recursively cloning the range between the original range's start/end boundary and that child node's end/start boundary.

```plain
<p>paragraph 1</p><p>paragraph 2</p><p>paragraph 3</p>
       ^----------- selection ------------^

cloneContents() returns:

<p>graph 1</p><p>paragraph 2</p><p>para</p>
```

## Syntax

```js-nolint
cloneContents()
```

### Parameters

None.

### Return value

A {{domxref("DocumentFragment") }} object.

## Examples

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
documentFragment = range.cloneContents();
document.body.appendChild(documentFragment);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
