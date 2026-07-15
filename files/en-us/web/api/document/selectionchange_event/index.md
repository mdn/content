---
title: "Document: selectionchange event"
short-title: selectionchange
slug: Web/API/Document/selectionchange_event
page-type: web-api-event
browser-compat: api.Document.selectionchange_event
---

{{APIRef("Selection API")}}

The browser fires the **`selectionchange`** event of the [Selection API](/en-US/docs/Web/API/Selection) when the current {{domxref("Selection")}} of a {{domxref("Document")}} changes. A document selection represents either a range of selected content across DOM nodes or a collapsed caret position.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("selectionchange", (event) => {})

onselectionchange = (event) => {}
```

## Event type

A generic {{domxref("Event")}}.

## Description

The `Document` object `selectionchange` event is fired when:

- A user or script creates or clears a selection.
- The start or end boundary point of a selected range moves.
- A selected range changes completely.
- A selection collapses to a single caret position.

The event object itself does not contain the updated selection details. You can retrieve the current selection by calling {{domxref("Document.getSelection()", "document.getSelection()")}} within your event listener. 

This event differs significantly from the `selectionchange` event fired on {{HTMLElement("input")}} and {{HTMLElement("textarea")}} text controls:

- Document selections use DOM node positions and require {{domxref("Document.getSelection()")}} for inspection. Text inputs maintain independent selections within their internal text values, using character offsets inspected via `selectionStart`, `selectionEnd`, and `selectionDirection`.
- The document-level `selectionchange` event fires directly on the {{domxref("Document")}} and does not bubble. The text input `selectionchange` event fires on the input/textarea element and bubbles up the DOM tree.

See the {{domxref("HTMLInputElement.selectionchange_event", "selectionchange")}} event of `HTMLInputElement` and the {{domxref("HTMLTextAreaElement.selectionchange_event", "selectionchange")}} event of `HTMLTextAreaElement` for more details of the text input events.

## Examples

### Basic usage

```js
// addEventListener version
document.addEventListener("selectionchange", () => {
  console.log(document.getSelection());
});

// onselectionchange version
document.onselectionchange = () => {
  console.log(document.getSelection());
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node/selectstart_event", "selectstart")}}
- {{domxref("Document.getSelection()")}}
- {{domxref("Selection", "Selection")}}
