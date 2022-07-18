---
title: Window.captureEvents()
slug: Web/API/Window/captureEvents
page-type: web-api-instance-method
tags:
  - API
  - Gecko
  - HTML DOM
  - Method
  - Non-standard
---
{{ ApiRef() }} {{Deprecated_Header}} {{Non-standard_header}}

The **`Window.captureEvents()`** method registers the window to
capture all events of the specified type.

## Syntax

```js
captureEvents(eventType)
```

### Parameters

-`eventType`

`eventType` is a combination of the following values:
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

```html
<!DOCTYPE html>
<html lang="en">
<head>
<!-- ... -->
<script>
function reg() {
  window.captureEvents(Event.CLICK);
  window.onclick = page_click;
}

function page_click() {
  alert('page click event detected!');
}
</script>
</head>

<body onload="reg();">
<p>click anywhere on this page.</p>
</body>
</html>
```

## Notes

Events raised in the DOM by user activity (such as clicking buttons or shifting focus
away from the current document) generally pass through the high-level [`window`](/en-US/docs/Web/API/Window) and [`document`](/en-US/docs/Web/API/Document) objects first before
arriving at the object that initiated the event.

When you call the `captureEvents()` method on the [`window`](/en-US/docs/Web/API/Window), events of the type you
specify (for example, `Event.CLICK`) no longer pass through to "lower"
objects in the hierarchy. In order for events to "bubble up" in the way that they
normally do, you must call [`window.releaseEvents()`](/en-US/docs/Web/API/Window/releaseEvents)
({{deprecated_inline}}) on the window to keep it from trapping events.

Note that you can pass a list of events to this method using the following syntax:
`window.captureEvents(Event.KEYPRESS | Event.KEYDOWN | Event.KEYUP)`.

## Specifications

This is not part of any specification.
