---
title: WindowEventHandlers.onlanguagechange
slug: Web/API/WindowEventHandlers/onlanguagechange
tags:
  - API
  - Event Handler
  - Experimental
  - Property
  - Reference
  - WindowEventHandlers
browser-compat: api.WindowEventHandlers.onlanguagechange
---
{{APIRef("HTML DOM")}} {{SeeCompatTable}}

The **`onlanguagechange`** property of the
{{domxref("WindowEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("languagechange")}} events.

These events are received by the object implementing this interface, usually a
{{domxref("Window")}}, an {{domxref("HTMLBodyElement")}}, or an
{{domxref("HTMLIFrameElement")}}. Such an event is sent by the browser to inform that
the preferred languages list has been updated. The list is accessible via
{{domxref("Navigator.languages")}}.

## Syntax

```js
object.onlanguagechange = function;
```

### Value

- `function` is the name of a user-defined function, without the
  `()` suffix or any parameters, or an anonymous function declaration, such
  as `function(event) {...}`. An event handler always has one single
  parameter, containing the event, here of type {{domxref("Event")}}.

## Example

```js
window.onlanguagechange = function(event) {
  console.log('languagechange event detected!');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{event("languagechange")}} event and its type, {{domxref("Event")}}
