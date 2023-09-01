---
title: "Range: selectNodeContents() method"
short-title: selectNodeContents()
slug: Web/API/Range/selectNodeContents
page-type: web-api-instance-method
browser-compat: api.Range.selectNodeContents
---

{{ApiRef("DOM")}}

The **`Range.selectNodeContents()`** method sets the {{domxref("Range")}} to contain the contents of a {{domxref("Node")}}.

The parent `Node` of the start and end of the `Range` will be the
reference node. The `startOffset` is 0, and the `endOffset` is the
number of child `Node`s or number of characters contained in the reference
node.

## Syntax

```js-nolint
selectNodeContents(referenceNode)
```

### Parameters

- `referenceNode`
  - : The {{domxref("Node")}} whose contents will be selected within a {{domxref("Range")}}.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const range = document.createRange();
const referenceNode = document.querySelector("div");
range.selectNodeContents(referenceNode);
```

### Live sample

This example lets the user select and deselect a paragraph with buttons.
{{domxref("Document.createRange()")}}, `Range.selectNodeContents()`, and
{{domxref("Selection.addRange()")}} are used to select the content.
{{domxref("Window.getSelection()")}} and {{domxref("Selection.removeAllRanges()")}} are
used to deselect it.

#### HTML

```html
<p id="p">
  <strong>Use the buttons below</strong> to select or deselect the contents of
  this paragraph.
</p>
<button id="select-button">Select paragraph</button>
<button id="deselect-button">Deselect paragraph</button>
```

#### JavaScript

```js
const p = document.getElementById("p");
const selectButton = document.getElementById("select-button");
const deselectButton = document.getElementById("deselect-button");

selectButton.addEventListener("click", (e) => {
  // Clear any current selection
  const selection = window.getSelection();
  selection.removeAllRanges();

  // Select paragraph
  const range = document.createRange();
  range.selectNodeContents(p);
  selection.addRange(range);
});

deselectButton.addEventListener("click", (e) => {
  const selection = window.getSelection();
  selection.removeAllRanges();
});
```

#### Result

{{EmbedLiveSample("Live_sample")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
