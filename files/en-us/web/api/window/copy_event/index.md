---
title: "Window: copy event"
short-title: copy
slug: Web/API/Window/copy_event
page-type: web-api-event
browser-compat: api.Element.copy_event
---

{{APIRef}}

The **`copy`** event fires when the user initiates a copy action through the browser's user interface.

The original target for this event is the {{domxref("Element")}} that was the intended target of the copy action. You can listen for this event on the {{domxref("Window")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the [Element: copy event](/en-US/docs/Web/API/Element/copy_event).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## Event type

A {{domxref("ClipboardEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Examples

```js
window.addEventListener("copy", (event) => {
  console.log("copy action initiated");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Window/cut_event", "cut")}}, {{domxref("Window/paste_event", "paste")}}
- This event on {{domxref("Element")}} targets: {{domxref("Element/copy_event", "copy")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/copy_event", "copy")}}
