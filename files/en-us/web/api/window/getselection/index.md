---
title: "Window: getSelection() method"
short-title: getSelection()
slug: Web/API/Window/getSelection
page-type: web-api-instance-method
browser-compat: api.Window.getSelection
---

{{APIRef("Selection API")}}

The **`getSelection()`** method of the {{domxref("Window")}} interface returns the {{domxref("Selection")}} object associated with the window's {{domxref("document")}}, representing the range of text selected by the user, or the current position of the caret.

`window.getSelection()` is a shorthand for `window.document.getSelection()`. Read {{domxref("Document.getSelection()")}} for more information.

## Syntax

```js-nolint
getSelection()
```

### Parameters

None.

### Return value

A {{domxref("Selection")}} object, or `null` if the associated document has no [browsing context](/en-US/docs/Glossary/Browsing_context) (for example, the window is an {{htmlelement("iframe")}} that is not attached to a document).

When called on an {{htmlelement("iframe")}} that is not displayed (e.g., where `display: none` is set) Firefox returns `null`, whereas other browsers returns a {{domxref("Selection")}} object with {{domxref("Selection.type")}} set to `None`.

## Examples

### Getting a Selection object

```js
const selection = window.getSelection();
const selRange = selection.getRangeAt(0);
// do stuff with the range

console.log(selection); // Selection object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Selection API](/en-US/docs/Web/API/Selection)
- {{domxref("Selection")}}
- {{domxref("Range")}}
- {{domxref("Document.getSelection()")}}
- {{domxref("HTMLInputElement.setSelectionRange()")}}
