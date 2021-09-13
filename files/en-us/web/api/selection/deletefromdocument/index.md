---
title: Selection.deleteFromDocument()
slug: Web/API/Selection/deleteFromDocument
tags:
  - API
  - Experimental
  - HTML Editing
  - Method
  - Reference
  - Selection
  - deleteFromDocument
browser-compat: api.Selection.deleteFromDocument
---
{{ ApiRef("DOM") }}{{SeeCompatTable}}

The **`deleteFromDocument()`** method of the
{{domxref("Selection")}} interface deletes the selected text from the document's DOM.

## Syntax

```js
sel.deleteFromDocument()
```

### Parameters

_None._

## Example

This example lets you delete selected text by clicking a button. Upon clicking the
button, the
{{domxref("Window.getSelection()")}} method gets the selected text, and the
`deleteFromDocument()` method removes it.

### HTML

```html
<p>Try highlighting some of the text in this paragraph. Once you do, you can remove the selected content by clicking the button below.</p>
<button>Delete selected text</button>
```

### JavaScript

```js
let button = document.querySelector('button');
button.addEventListener('click', deleteSelection);

function deleteSelection() {
  let selection = window.getSelection();
  selection.deleteFromDocument();
}
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface defining this method
