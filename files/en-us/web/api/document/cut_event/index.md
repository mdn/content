---
title: "Document: cut event"
short-title: cut
slug: Web/API/Document/cut_event
page-type: web-api-event
browser-compat: api.Element.cut_event
---

{{APIRef}}

The **`cut`** event fires when the user initiates a cut action through the browser's user interface.

The original target for this event is the {{domxref("Element")}} that was the intended target of the cut action. You can listen for this event on the {{domxref("Document")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the [Element: cut event](/en-US/docs/Web/API/Element/cut_event).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## Event type

A {{domxref("ClipboardEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Examples

To be informed when a user cuts data from the webpage to their clipboard, you can add a handler to your {{domxref("Document")}} instance using {{domxref("EventTarget.addEventListener", "addEventListener()")}}, like this:

```js
document.addEventListener("cut", (event) => {
  /* the session has shut down */
});
```

Alternatively, you can use the `Document.oncut` event handler property to establish a handler for the `cut` event:

```js
document.oncut = (event) => {
  /* the session has shut down */
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Document/copy_event", "copy")}}, {{domxref("Document/paste_event", "paste")}}
- This event on {{domxref("Element")}} targets: {{domxref("Element/cut_event", "cut")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/cut_event", "cut")}}
