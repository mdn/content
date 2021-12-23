---
title: Window.releaseEvents()
slug: Web/API/Window/releaseEvents
tags:
  - API
  - DOM
  - DOM_0
  - Method
  - Non-standard
  - Reference
  - Window
  - releaseEvents
browser-compat: api.Window.releaseEvents
---
{{ ApiRef() }} {{Deprecated_Header}} {{Non-standard_header}}

Releases the window from trapping events of a specific type.

## Syntax

```js
window.releaseEvents(eventType)
```

`eventType` is a combination of the following values:
`Event.ABORT`, `Event.BLUR`, `Event.CLICK`,
`Event.CHANGE`, `Event.DBLCLICK`, `Event.DRAGDDROP`,
`Event.ERROR`, `Event.FOCUS`, `Event.KEYDOWN`,
`Event.KEYPRESS`, `Event.KEYUP`, `Event.LOAD`,
`Event.MOUSEDOWN`, `Event.MOUSEMOVE`, `Event.MOUSEOUT`,
`Event.MOUSEOVER`, `Event.MOUSEUP`, `Event.MOVE`,
`Event.RESET`, `Event.RESIZE`, `Event.SELECT`,
`Event.SUBMIT`, `Event.UNLOAD`.

## Example

```js
window.releaseEvents(Event.KEYPRESS)
```

## Notes

Note that you can pass a list of events to this method using the following syntax:
`window.releaseEvents(Event.KEYPRESS | Event.KEYDOWN | Event.KEYUP)`.

See also [`window.captureEvents`](/en-US/docs/Web/API/window.captureEvents)
({{deprecated_inline}}).

## Specifications

This is not part of any specification.

## Browser compatibility

{{Compat}}
