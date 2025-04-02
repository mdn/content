---
title: "Range: surroundContents() method"
short-title: surroundContents()
slug: Web/API/Range/surroundContents
page-type: web-api-instance-method
browser-compat: api.Range.surroundContents
---

{{ApiRef("DOM")}}

The **`surroundContents()`** method of the {{domxref("Range")}} interface surrounds the selected content by a provided node. It [extracts](/en-US/docs/Web/API/Range/extractContents) the contents of the range, replaces the children of `newParent` with the extracted contents, [inserts](/en-US/docs/Web/API/Range/insertNode) `newParent` at the location of the extracted contents, and makes the range select `newParent`.

An exception is thrown if the range partially contains any non-{{domxref("Text")}} node. The range must only contain text nodes and completely selected nodes.

## Syntax

```js-nolint
surroundContents(newParent)
```

### Parameters

- `newParent`
  - : A {{ domxref("Node") }} with which to surround the contents.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### HTML

```html
<span class="header-text">Put this in a headline</span>
```

### JavaScript

```js
const range = document.createRange();
const newParent = document.createElement("h1");

range.selectNode(document.querySelector(".header-text"));
range.surroundContents(newParent);
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
