---
title: "TimeEvent: initTimeEvent() method"
short-title: initTimeEvent()
slug: Web/API/TimeEvent/initTimeEvent
page-type: web-api-instance-method
browser-compat: api.TimeEvent.initTimeEvent
---

{{APIRef("SVG")}}

The **`TimeEvent.initTimeEvent()`** method initializes the value of a {{domxref("TimeEvent")}} created using {{domxref("Document.createEvent()")}}.

This method may only be called before the event has been dispatched via {{domxref("EventTarget.dispatchEvent()")}}. If called multiple times, the final call takes precedence.

> [!NOTE]
> {{domxref("Document.createEvent()")}} is deprecated in favor of event constructors, but `TimeEvent` has no dedicated constructor. {{domxref("CustomEvent")}} is not an equivalent replacement, as it does not produce a `TimeEvent` instance with the interface's `view` and `detail` attributes.

## Syntax

```js-nolint
initTimeEvent(type)
initTimeEvent(type, view)
initTimeEvent(type, view, detail)
```

### Parameters

- `type`
  - : A string specifying the event type.
- `view` {{optional_inline}}
  - : The {{domxref("Window")}} from which the event was generated. If `null` or omitted, the {{domxref("TimeEvent.view")}} attribute of the event will be `null`. Defaults to `null`.
- `detail` {{optional_inline}}
  - : A `long` providing contextual information about the event. Defaults to `0`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Dispatching a repeatEvent

```js
const evt = document.createEvent("TimeEvent");
evt.initTimeEvent("repeatEvent", window, 2);
svgElement.dispatchEvent(evt);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TimeEvent")}}
- {{domxref("Document.createEvent()")}}
- {{domxref("EventTarget.dispatchEvent()")}}
