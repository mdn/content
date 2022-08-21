---
title: Window.releaseEvents()
slug: Web/API/Window/releaseEvents
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - DOM_0
  - Method
  - Reference
  - Window
  - releaseEvents
  - Deprecated
browser-compat: api.Window.releaseEvents
---
{{APIRef}}{{Deprecated_Header}}

Releases the window from trapping events of a specific type.

## Syntax

```js
releaseEvents(eventType)
```

### Parameters

- `eventType`

  - : `eventType` is a combination of the following values:
`Event.ABORT`, `Event.BLUR`, `Event.CLICK`,
`Event.CHANGE`, `Event.DBLCLICK`, `Event.DRAGDDROP`,
`Event.ERROR`, `Event.FOCUS`, `Event.KEYDOWN`,
`Event.KEYPRESS`, `Event.KEYUP`, `Event.LOAD`,
`Event.MOUSEDOWN`, `Event.MOUSEMOVE`, `Event.MOUSEOUT`,
`Event.MOUSEOVER`, `Event.MOUSEUP`, `Event.MOVE`,
`Event.RESET`, `Event.RESIZE`, `Event.SELECT`,
`Event.SUBMIT`, `Event.UNLOAD`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
window.releaseEvents(Event.KEYPRESS)
```

## Notes

Note that you can pass a list of events to this method using the following syntax:
`window.releaseEvents(Event.KEYPRESS | Event.KEYDOWN | Event.KEYUP)`.

See also [`window.captureEvents`](/en-US/docs/Web/API/Window/captureEvents)
({{Deprecated_Inline}}).

## Specifications

This is not part of any specification.

## Browser compatibility

{{Compat}}
