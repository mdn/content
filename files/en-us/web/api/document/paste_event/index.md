---
title: 'Document: paste event'
slug: Web/API/Document/paste_event
page-type: web-api-event
tags:
  - API
  - Clipboard API
  - Document
  - Event
  - Reference
  - Web
  - paste
browser-compat: api.Element.paste_event
---
{{APIRef}}

The **`paste`** event fires when the user initiates a paste action through the browser's user interface.

The original target for this event is the {{domxref("Element")}} that was the intended target of the paste action. You can listen for this event on the {{domxref("Document")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the [Element: paste event](/en-US/docs/Web/API/Element/paste_event).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('paste', (event) => { });

onpaste = (event) => { };
```

## Event type

A {{domxref("ClipboardEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Examples

To be informed when a user pastes data to the webpage from their clipboard, you can add a handler to your {{domxref("Document")}} instance using {{domxref("EventTarget.addEventListener", "addEventListener()")}}, like this:

```js
document.addEventListener("paste", (event) => {
  /* the session has shut down */
});
```

Alternatively, you can use the `Document.onpaste` event handler property to establish a handler for the `paste` event:

```js
document.onpaste = (event) => {
 /* the session has shut down */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Document/copy_event", "copy")}}, {{domxref("Document/cut_event", "cut")}}
- This event on {{domxref("Element")}} targets: {{domxref("Element/paste_event", "paste")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/paste_event", "paste")}}
