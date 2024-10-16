---
title: "HTMLInputElement: selectionchange event"
short-title: selectionchange
slug: Web/API/HTMLInputElement/selectionchange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.HTMLInputElement.selectionchange_event
---

{{APIRef}}{{SeeCompatTable}}

The **`selectionchange`** event of the [Selection API](/en-US/docs/Web/API/Selection) is fired when the text selection within an {{HTMLElement("input")}} element is changed.
This includes both changes in the selected range of characters, or if the caret moves.

This event is not cancelable.

The event is usually processed by adding an event listener on the {{HTMLElement("input")}}, and in the handler function read by the {{domxref("HTMLInputElement")}} `selectionStart`, `selectionEnd` and `selectionDirection` properties.

It is also possible to add a listener on the `onselectionchange` event handler, and within the handler function use {{domxref("Document.getSelection()")}} to get the {{domxref("Selection", "Selection")}}. However this is not very useful for getting changes to _text_ selections.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("selectionchange", (event) => {});

onselectionchange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

The example below shows how to get the text selected in an {{HTMLElement("input")}} element.

### HTML

```html
<div>
  Enter and select text here:<br /><input id="my-text" rows="2" cols="20" />
</div>
<div>selectionStart: <span id="start"></span></div>
<div>selectionEnd: <span id="end"></span></div>
<div>selectionDirection: <span id="direction"></span></div>
```

### JavaScript

```js
const myInput = document.getElementById("my-text");

myInput.addEventListener("selectionchange", () => {
  document.getElementById("start").textContent = myInput.selectionStart;
  document.getElementById("end").textContent = myInput.selectionEnd;
  document.getElementById("direction").textContent = myInput.selectionDirection;
});
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
