---
title: "Window: cut event"
short-title: cut
slug: Web/API/Window/cut_event
page-type: web-api-event
browser-compat: api.Element.cut_event
---

{{APIRef}}

The **`cut`** event is fired when the user has initiated a "cut" action through the browser's user interface.

The original target for this event is the {{domxref("Element")}} that was the intended target of the cut action. You can listen for this event on the {{domxref("Window")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the [Element: cut event](/en-US/docs/Web/API/Element/cut_event).

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

```js
window.addEventListener("cut", (event) => {
  console.log("cut action initiated");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Window/copy_event", "copy")}}, {{domxref("Window/paste_event", "paste")}}
- This event on {{domxref("Element")}} targets: {{domxref("Element/cut_event", "cut")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/cut_event", "cut")}}
