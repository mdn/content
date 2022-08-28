---
title: "SVGGraphicsElement: copy event"
slug: Web/API/SVGGraphicsElement/copy_event
page-type: web-api-event
tags:
  - API
  - Event
  - Reference
  - SVG
  - SVG OM
browser-compat: api.Element.copy_event
---

{{APIRef}}

The **`copy`** event fires on {{domxref("SVGGraphicsElement", "SVGGraphicsElements")}} when the user initiates a copy action through the browser's user interface.

The event's default action is to copy the selection (if any) to the clipboard.

A handler for this event can _modify_ the clipboard contents by calling {{domxref("DataTransfer.setData", "setData(format, data)")}} on the event's {{domxref("ClipboardEvent.clipboardData")}} property, and cancelling the event's default action using [`event.preventDefault()`](/en-US/docs/Web/API/Event/preventDefault).

However, the handler cannot _read_ the clipboard data.

It's possible to construct and dispatch a [synthetic](/en-US/docs/Web/Events/Creating_and_triggering_events) `copy` event, but this will not affect the system clipboard.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## Event type

A {{domxref("ClipboardEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Example

### HTML

```html
<?xml version="1.0" encoding="UTF-8"?>
<svg
  viewBox="0 0 100 30"
  width="600"
  height="320"
  xmlns="http://www.w3.org/2000/svg">
  <text x="5" y="10" id="text-to-copy">Copy this text</text>
  <foreignObject x="5" y="20" width="90" height="20">
    <input xmlns="http://www.w3.org/1999/xhtml" placeholder="Paste it here" />
  </foreignObject>
</svg>
```

### CSS

```css
input {
  font-size: 10px;
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  border: 1px solid black;
}
```

### JavaScript

```js
document.querySelector("text").addEventListener("copy", (evt) => {
  evt.clipboardData.setData(
    "text/plain",
    document.getSelection().toString().toUpperCase()
  );
  evt.preventDefault();
});
```

### Result

{{EmbedLiveSample("Example", "620", "340")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`cut`](/en-US/docs/Web/API/SVGGraphicsElement/cut_event), [`paste`](/en-US/docs/Web/API/SVGGraphicsElement/paste_event)
- This event on HTML {{domxref("Element")}} targets: [`copy`](/en-US/docs/Web/API/Element/copy_event)
- This event on {{domxref("Document")}} targets: [`copy`](Web/API/Document/v_event)
- This event on {{domxref("Window")}} targets: [`copy`](Web/API/Window/copy_event)
