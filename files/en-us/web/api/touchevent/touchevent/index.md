---
title: TouchEvent()
slug: Web/API/TouchEvent/TouchEvent
tags:
  - API
  - Constructor
  - DOM
  - Reference
  - events
  - touch
browser-compat: api.TouchEvent.TouchEvent
---
{{APIRef("DOM Events")}}

The **Touch`Event()`** constructor creates a new {{domxref("TouchEvent")}}.

## Syntax

```js
const event = new TouchEvent(typeArg, touchEventInit);
```

### Values

- _typeArg_
  - : Is a {{domxref("DOMString")}} representing the name of the event.
- _touchEventInit_ {{optional_inline}}

  - : Is a Touch`EventInit` dictionary, having the following fields:

    - `"touches"`, optional and defaulting to `[]`, of type `Touch[]`, that is a list of objects for every point of contact currently touching the surface.
    - `"targetTouches"`, optional and defaulting to `[]`, of type `Touch[]`, that is a list of objects for every point of contact that is touching the surface _and_ started on the element that is the target of the current event.
    - `"changedTouches"`, optional and defaulting to `[]`, of type `Touch[]`, that is a list of objects for every point of contact which contributed to the event.
    - `"ctrlKey"`, optional and defaulting to `false`, a boolean value that indicates if the <kbd>ctrl</kbd> key was simultaneously pressed.

    - `"shiftKey"`, optional and defaulting to `false`, a boolean value that indicates if the <kbd>shift</kbd> key was simultaneously pressed.

    - `"altKey"`, optional and defaulting to `false`, a boolean value that indicates if the <kbd>alt</kbd> key was simultaneously pressed.

    - `"metaKey"`, optional and defaulting to `false`, a boolean value that indicates if the <kbd>meta</kbd> key was simultaneously pressed.

    _The Touch`EventInit` dictionary also accepts fields from {{domxref("UIEvent.UIEvent", "UIEventInit")}} and from {{domxref("Event.Event", "EventInit")}} dictionaries._

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TouchEvent")}}, the interface of the objects it constructs.
