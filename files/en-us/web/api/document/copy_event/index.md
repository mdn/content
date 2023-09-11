---
title: "Document: copy event"
short-title: copy
slug: Web/API/Document/copy_event
page-type: web-api-event
browser-compat: api.Element.copy_event
---

{{APIRef}}

The **`copy`** event fires when the user initiates a copy action through the browser's user interface.

The original target for this event is the {{domxref("Element")}} that was the intended target of the copy action. You can listen for this event on the {{domxref("Document")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the [Element: copy event](/en-US/docs/Web/API/Element/copy_event).

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

To be informed when a user copies data from the webpage to their clipboard, you can add a handler to your {{domxref("Document")}} instance using {{domxref("EventTarget.addEventListener", "addEventListener()")}}, like this:

```js
document.addEventListener("copy", (event) => {
  /* the session has shut down */
});
```

Alternatively, you can use the `Document.oncopy` event handler property to establish a handler for the `copy` event:

```js
document.oncopy = (event) => {
  /* the session has shut down */
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Document/cut_event", "cut")}}, {{domxref("Document/paste_event", "paste")}}
- This event on {{domxref("Element")}} targets: {{domxref("Element/copy_event", "copy")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/copy_event", "copy")}}
