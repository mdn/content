---
title: Range.surroundContents()
slug: Web/API/Range/surroundContents
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.surroundContents
---
{{ApiRef("DOM")}}

The **`Range.surroundContents()`** method moves content of the
{{ domxref("Range") }} into a new node, placing the new node at the start of the
specified range.

This method is nearly equivalent to
`newNode.appendChild(range.extractContents()); range.insertNode(newNode)`.
After surrounding, the boundary points of the `range` include
`newNode`.

An exception will be thrown, however, if the {{ domxref("Range") }} splits a non-{{
  domxref("Text") }} node with only one of its boundary points. That is, unlike the
alternative above, if there are partially selected nodes, they will not be cloned and
instead the operation will fail.

## Syntax

```js
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
const newParent = document.createElement('h1');

range.selectNode(document.querySelector('.header-text'));
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
