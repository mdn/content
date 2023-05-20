---
title: "SVGGraphicsElement: cut event"
short-title: cut
slug: Web/API/SVGGraphicsElement/cut_event
page-type: web-api-event
browser-compat: api.Element.cut_event
---

{{APIRef}}

The **`cut`** event is fired on an {{domxref("SVGGraphicsElement")}} when the user has initiated a "cut" action through the browser's user interface.

If the user attempts a cut action on uneditable content, the `cut` event still fires but the event object contains no data.

The event's default action is to copy the current selection (if any) to the system clipboard and remove it from the document.

A handler for this event can _modify_ the clipboard contents by calling [`setData(format, data)`](/en-US/docs/Web/API/DataTransfer/setData) on the event's [`ClipboardEvent.clipboardData`](/en-US/docs/Web/API/ClipboardEvent/clipboardData) property, and cancelling the default action using [`event.preventDefault()`](/en-US/docs/Web/API/Event/preventDefault).

Note though that cancelling the default action will also prevent the document from being updated. So an event handler which wants to emulate the default action for "cut" while modifying the clipboard must also manually remove the selection from the document.

The handler cannot _read_ the clipboard data.

It's possible to construct and dispatch a [synthetic](/en-US/docs/Web/Events/Creating_and_triggering_events) `cut` event, but this will not affect the system clipboard or the document's contents.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## Event type

A {{domxref("ClipboardEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`copy`](/en-US/docs/Web/API/SVGGraphicsElement/copy_event), [`paste`](/en-US/docs/Web/API/SVGGraphicsElement/paste_event)
- This event on HTML {{domxref("Element")}} targets: [`cut`](/en-US/docs/Web/API/Element/cut_event)
- This event on {{domxref("Document")}} targets: [`cut`](/en-US/docs/Web/API/Document/cut_event)
- This event on {{domxref("Window")}} targets: [`cut`](/en-US/docs/Web/API/Window/cut_event)
