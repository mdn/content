---
title: HTMLMediaElement.onerror
slug: Web/API/HTMLMediaElement/onerror
tags:
  - API
  - Audio
  - Errors
  - Event Handler
  - HTML DOM
  - HTMLMediaElement
  - Media
  - Property
  - Reference
  - Video
  - onerror
browser-compat: api.HTMLMediaElement.onerror
---
{{APIRef("HTML DOM")}}

The **`onerror`** property of the
{{domxref("HTMLMediaElement")}} interface is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("error")}} events.

The `error` event fires when some form of error occurs while attempting to
load or perform the media.

## Syntax

```js
HTMLMediaElement.onerror = EventListener;
```

### Value

A {{jsxref("function")}} which serves as the event handler for the {{event("error")}}
event. When an error occurs, the specified function will be called. If
`null`, no error handler is in effect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement")}}
- {{HTMLElement("audio")}} and {{HTMLElement("video")}}
