---
title: "Selection: deleteFromDocument() method"
short-title: deleteFromDocument()
slug: Web/API/Selection/deleteFromDocument
page-type: web-api-instance-method
browser-compat: api.Selection.deleteFromDocument
---

{{ ApiRef("DOM") }}

The **`deleteFromDocument()`** method of the
{{domxref("Selection")}} interface invokes the {{domxref("Range.deleteContents()")}} method on the selected {{domxref("Range")}}.

## Syntax

```js-nolint
deleteFromDocument()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example lets you delete selected text and/or nodes by clicking a button. Upon clicking the
button, the
{{domxref("Window.getSelection()")}} method gets the selected content, and the
`deleteFromDocument()` method removes it.

### HTML

```html
<p>Try highlighting some of the elements in these paragraphs.</p>
<p>
  Once you do, you can remove the selected content by clicking the button below.
</p>
<h2>All of the selected text/nodes will be removed.</h2>
<button>Delete selected text</button>
```

### JavaScript

```js
let button = document.querySelector("button");
button.addEventListener("click", deleteSelection);

function deleteSelection() {
  let selection = window.getSelection();
  selection.deleteFromDocument();
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface defining this method
