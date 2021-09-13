---
title: FocusEvent()
slug: Web/API/FocusEvent/FocusEvent
tags:
  - API
  - Constructor
  - Event
  - FocusEvent
  - Reference
browser-compat: api.FocusEvent.FocusEvent
---
{{APIRef("DOM Events")}}

The **`FocusEvent()`** constructor returns a newly created
{{domxref("FocusEvent")}} object with an optional {{domxref("EventTarget")}}. When the
event has both a source and a destination, the `relatedTarget` value must be
set to the other target.

## Syntax

```js
var focusEvent = new FocusEvent(typeArg[, focusEventInit]);
```

### Properties

_The `FocusEvent()` constructor also inherits arguments from
{{domxref("UIEvent.UIEvent", "UIEvent()")}} and from {{domxref("Event.Event",
    "Event()")}}._

- `typeArg`
  - : Is a {{domxref("DOMString")}} representing the name of the event.
- `focusEventInit` {{optional_inline}}

  - : Is a `FocusEventInit` dictionary, having the following fields:

    - `"relatedTarget"`, optional and defaulting to `null`, is
      an {{domxref("EventTarget")}} representing the secondary target of a
      {{domxref("FocusEvent")}}.

    > **Note:** The `FocusEventInit` dictionary also accepts fields from the
    > {{domxref("UIEvent.UIEvent", "UIEventInit")}} and {{domxref("Event.Event",
        "EventInit")}} dictionaries.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("FocusEvent")}} interface it belongs to.
