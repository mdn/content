---
title: "HTMLInputElement: selectionchange event"
short-title: selectionchange
slug: Web/API/HTMLInputElement/selectionchange_event
page-type: web-api-event
browser-compat: api.HTMLInputElement.selectionchange_event
---

{{APIRef("Selection API")}}

The **`selectionchange`** event of the [Selection API](/en-US/docs/Web/API/Selection) is fired when the text selection within an {{HTMLElement("input")}} element is changed in either extent or direction, whether the selection is a caret or a range of characters.

This event is not cancelable.

> [!NOTE]
> When you change the selection programmatically, for example by calling {{domxref("HTMLInputElement.setSelectionRange()", "setSelectionRange()")}}, the selection updates immediately, but the `selectionchange` event is queued as a task. Its listeners run later, after the current script finishes executing. This contrasts with events such as `focus` and `click`, whose listeners run synchronously when triggered by {{domxref("HTMLElement.focus()", "focus()")}} and {{domxref("HTMLElement.click()", "click()")}}, respectively.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("selectionchange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onselectionchange = (event) => { }
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
