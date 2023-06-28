---
title: "Element: copy event"
short-title: copy
slug: Web/API/Element/copy_event
page-type: web-api-event
browser-compat: api.Element.copy_event
---

{{APIRef}}

The **`copy`** event fires when the user initiates a copy action through the browser's user interface.

The event's default action is to copy the selection (if any) to the clipboard.

A handler for this event can _modify_ the clipboard contents by calling {{domxref("DataTransfer.setData", "setData(format, data)")}} on the event's {{domxref("ClipboardEvent.clipboardData")}} property, and cancelling the event's default action using {{domxref("Event/preventDefault", "event.preventDefault()")}}.

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

## Examples

### Live example

#### HTML

```html
<div class="source" contenteditable="true">Copy text from this box.</div>
<div class="target" contenteditable="true">And paste it into this one.</div>
```

```css hidden
div.source,
div.target {
  border: 1px solid gray;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 1rem;
  background-color: #e9eef1;
}
```

#### JavaScript

```js
const source = document.querySelector("div.source");

source.addEventListener("copy", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  event.preventDefault();
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '120px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/copy_event", "copy")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/copy_event", "copy")}}
