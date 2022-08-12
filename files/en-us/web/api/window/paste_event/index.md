---
title: 'Window: paste event'
slug: Web/API/Window/paste_event
page-type: web-api-event
tags:
  - API
  - Event
  - Reference
  - Web
  - Window
  - paste
browser-compat: api.Element.paste_event
---
{{APIRef}}

The **`paste`** event is fired when the user has initiated a "paste" action through the browser's user interface.

The original target for this event is the {{domxref("Element")}} that was the intended target of the paste action. You can listen for this event on the {{domxref("Window")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the [Element: paste event](/en-US/docs/Web/API/Element/paste_event).

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

```js
window.addEventListener('paste', (event) => {
    console.log('paste action initiated')
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Window/cut_event", "cut")}}, {{domxref("Window/copy_event", "copy")}}
- This event on {{domxref("Element")}} targets: {{domxref("Element/paste_event", "paste")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/paste_event", "paste")}}
