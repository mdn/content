---
title: AnimationPlaybackEvent()
slug: Web/API/AnimationPlaybackEvent/AnimationPlaybackEvent
tags:
  - API
  - Animation
  - AnimationPlaybackEvent
  - AnimationPlaybackEvent()
  - Constructor
  - Experimental
  - Reference
  - waapi
  - web animations api
browser-compat: api.AnimationPlaybackEvent.AnimationPlaybackEvent
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations API") }}

The **`AnimationPlaybackEvent()`** constructor of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) returns a new `{{domxref("AnimationPlaybackEvent")}}` object instance.

## Syntax

```js
var animationPlaybackEvent = new AnimationPlaybackEvent(type, eventInitDict);
```

### Parameters

- `{{domxref("Event.type", "type")}}`
  - : A [`DOMString`](/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") representing the name of the event.
- `eventInitDict` {{optional_inline}}

  - : An optional `EventInit` dictionary object containing the following fields:

    - `bubbles` {{optional_inline}}
      - : Defaults to `false`, of type [`Boolean`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "The Boolean object is an object wrapper for a boolean value."), indicating if the event bubbles or not.
    - `cancelable` {{optional_inline}}
      - : Defaults to `false`, of type [`Boolean`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "The Boolean object is an object wrapper for a boolean value."), indicating if the event can be canceled or not.
    - `detail` {{optional_inline}}
      - : Defaults to `null`, of type any — an event-dependent value associated with the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationPlayBackEvent")}}
- {{domxref("Animation.playState")}}
- {{domxref("CustomEvent.CustomEvent")}}
- {{domxref("Event.Event")}}
