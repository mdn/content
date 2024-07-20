---
title: "Document: getSelection() method"
short-title: getSelection()
slug: Web/API/Document/getSelection
page-type: web-api-instance-method
browser-compat: api.Document.getSelection
---

{{APIRef("DOM")}}

The **`getSelection()`** method of the {{DOMxRef("Document")}} interface returns the {{DOMxRef("Selection")}} object associated with this document, representing the range of text selected by the user, or the current position of the caret.

## Syntax

```js-nolint
getSelection()
```

### Parameters

None.

### Return value

A {{DOMxRef("Selection")}} object, or `null` if the document has no [browsing context](/en-US/docs/Glossary/Browsing_context) (for example, it is the document of an {{htmlelement("iframe")}} that is not attached to a document).

## Examples

### Getting a Selection object

```js
const selection = document.getSelection();
const selRange = selection.getRangeAt(0);
// do stuff with the range

console.log(selection); // Selection object
```

### String representation of the Selection object

Some functions (like {{DOMxRef("Window.alert()")}}) call {{JSxRef("Object.toString", "toString()")}}
automatically and the returned value is passed to the function. As a consequence, this will return the selected text
and not the `Selection` object:

```js
alert(selection);
```

However, not all functions call `toString()` automatically.
To use a `Selection` object as a string, call its `toString()` method directly:

```js
let selectedText = selection.toString();
```

## Related objects

You can call {{domxref("Window.getSelection()")}}, which is identical to `window.document.getSelection()`.

It is worth noting that currently `getSelection()` doesn't work on the
content of {{htmlelement("input")}} elements in Firefox.
{{domxref("HTMLInputElement.setSelectionRange()")}}) could be used to work around this.

Notice also the difference between _selection_ and _focus_.
{{domxref("Document.activeElement")}} returns the focused element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
