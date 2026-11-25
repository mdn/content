---
title: "Document: getSelection() method"
short-title: getSelection()
slug: Web/API/Document/getSelection
page-type: web-api-instance-method
browser-compat: api.Document.getSelection
---

{{APIRef("DOM")}}

The **`getSelection()`** method of the {{domxref("Document")}} interface returns the {{domxref("Selection")}} object associated with this document, representing the range of text selected by the user, or the current position of the caret.

## Syntax

```js-nolint
getSelection()
```

### Parameters

None.

### Return value

A {{domxref("Selection")}} object, or `null` if the document has no [browsing context](/en-US/docs/Glossary/Browsing_context) (for example, it is the document of an {{htmlelement("iframe")}} that is not attached to a document).

## Usage notes

You can call {{domxref("Window.getSelection()")}}, which is identical to `window.document.getSelection()`.

Currently, `getSelection()` doesn't work on the content of {{htmlelement("textarea")}} and {{htmlelement("input")}} elements in Firefox.
{{domxref("HTMLInputElement.setSelectionRange()")}} or the `selectionStart` and `selectionEnd` properties could be used to work around this.

Notice also the difference between _selection_ and _focus_. {{domxref("Document.activeElement")}} returns the focused element.

## Examples

### Getting a Selection object

```js
const selection = document.getSelection();
const selRange = selection.getRangeAt(0);
// do stuff with the range

console.log(selection); // Selection object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Selection API](/en-US/docs/Web/API/Selection_API)
- {{domxref("Selection")}}
- {{domxref("Range")}}
- {{domxref("Window.getSelection()")}}
- {{domxref("HTMLInputElement.setSelectionRange()")}}
