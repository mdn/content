---
title: "AnimationPlaybackEvent: AnimationPlaybackEvent() constructor"
short-title: AnimationPlaybackEvent()
slug: Web/API/AnimationPlaybackEvent/AnimationPlaybackEvent
page-type: web-api-constructor
browser-compat: api.AnimationPlaybackEvent.AnimationPlaybackEvent
---

{{ APIRef("Web Animations") }}

The **`AnimationPlaybackEvent()`** constructor of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) returns a new {{domxref("AnimationPlaybackEvent")}} object instance.

## Syntax

```js-nolint
new AnimationPlaybackEvent(type)
new AnimationPlaybackEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `cancel`, `finish`, or `remove`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following properties:
    - `detail` {{optional_inline}}
      - : An event-dependent value associated with the event. Defaults to `null`.

### Return value

A new {{domxref("AnimationPlaybackEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationPlayBackEvent")}}
- {{domxref("Animation.playState")}}
- {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
- {{domxref("Event.Event", "Event()")}}
