---
title: 'HTMLInputElement: selectionchange event'
slug: Web/API/HTMLInputElement/selectionchange_event
tags:
  - API
  - Event
  - Reference
  - Selection
  - Selection API
  - selectionchange
  - Experimental
browser-compat: api.HTMLInputElement.selectionchange_event
---
{{APIRef}}{{SeeCompatTable}}

The **`selectionchange`** event of the [Selection API](/en-US/docs/Web/API/Selection) is fired when the text selection within an {{HTMLElement("input")}} element is changed.
This includes both changes in the selected range of characters, or if the caret moves.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onselectionchange", "onselectionchange")}}
      </td>
    </tr>
  </tbody>
</table>

The event is usually processed by adding an event listener on the {{HTMLElement("input")}}, and in the handler function read by the {{domxref("HTMLInputElement")}} `selectionStart`, `selectionEnd` and `selectionDirection` properties.

It is also possible to add a listener on the global {{domxref("GlobalEventHandlers.onselectionchange","onselectionchange")}} event handler, and within the handler function use {{domxref("Document.getSelection()")}} to get the {{domxref("Selection", "Selection")}}. However this is not very useful for getting changes to _text_ selections.

## Examples

The example below shows how to get the text selected in an {{HTMLElement("input")}} element.

### HTML

```html
<div>Enter and select text here:<br><input id="mytext" rows="2" cols="20"></div>
<div>selectionStart: <span id="start"></span></div>
<div>selectionEnd: <span id="end"></span></div>
<div>selectionDirection: <span id="direction"></span></div>
```

### JavaScript

```js
const myinput = document.getElementById("mytext");

myinput.addEventListener("selectionchange", () => {
  document.getElementById("start").textContent = myinput.selectionStart;
  document.getElementById("end").textContent = myinput.selectionEnd;
  document.getElementById("direction").textContent = myinput.selectionDirection;
});
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("GlobalEventHandlers.onselectionchange")}}
