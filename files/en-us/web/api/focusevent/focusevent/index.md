---
title: "FocusEvent: FocusEvent() constructor"
short-title: FocusEvent()
slug: Web/API/FocusEvent/FocusEvent
page-type: web-api-constructor
browser-compat: api.FocusEvent.FocusEvent
---

{{APIRef("UI Events")}}

The **`FocusEvent()`** constructor returns a newly created
{{domxref("FocusEvent")}} object with an optional {{domxref("EventTarget")}}. When the
event has both a source and a destination, the `relatedTarget` value must be
set to the other target.

## Syntax

```js-nolint
new FocusEvent(type)
new FocusEvent(type, options)
```

### Parameters

_The `FocusEvent()` constructor also inherits arguments from
{{domxref("UIEvent.UIEvent", "UIEvent()")}} and from {{domxref("Event.Event", "Event()")}}._

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `blur`, `focus`, `focusin`, or `focusout`.
- `options` {{optional_inline}}
  - : An object that, in addition of the properties defined in {{domxref("UIEvent/UIEvent", "UIEvent()")}}, can have the following properties:
    - `relatedTarget` {{optional_inline}}
      - : An {{domxref("EventTarget")}} representing the secondary target of a {{domxref("FocusEvent")}}. It defaults to `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("FocusEvent")}} interface it belongs to.
