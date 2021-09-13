---
title: GlobalEventHandlers.onemptied
slug: Web/API/GlobalEventHandlers/onemptied
browser-compat: api.GlobalEventHandlers.onemptied
---
{{ ApiRef("HTML DOM") }}

The `onemptied` property sets and returns the [event handler](/en-US/docs/Web/Guide/Events/Event_handlers) for the
[`emptied`](/en-US/docs/Web/API/HTMLMediaElement/emptied_event) event.

## Syntax

```js
element.onemptied = handlerFunction;
var handlerFunction = element.onemptied;
```

`handlerFunction` should be either `null` or a [JavaScript function](/en-US/docs/Web/JavaScript/Reference/Functions)
specifying the handler for the event.

## Notes

See the [DOM event handlers](/en-US/docs/Web/Guide/Events/Event_handlers)
page for information on working with `on...` handlers.

The `emptied` event is fired when the media has become empty; for example,
this event is sent if the media has already been loaded (or partially loaded), and the
`load()` method is called to reload it.

See the  [`emptied`](/en-US/docs/Web/API/HTMLMediaElement/emptied_event) event
documentation for more information about the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
