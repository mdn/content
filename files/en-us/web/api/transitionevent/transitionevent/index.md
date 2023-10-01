---
title: "TransitionEvent: TransitionEvent() constructor"
short-title: TransitionEvent()
slug: Web/API/TransitionEvent/TransitionEvent
page-type: web-api-constructor
browser-compat: api.TransitionEvent.TransitionEvent
---

{{APIRef("CSSOM")}}

The **`TransitionEvent()`** constructor returns a new {{domxref("TransitionEvent")}} object, representing an event in relation with a transition.

## Syntax

```js-nolint
new TransitionEvent(type)
new TransitionEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `transitionrun`, `transitionstart`, `transitionend`, or `transitioncancel`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `propertyName` {{optional_inline}}
      - : A string containing the name of the CSS property associated with the transition.
        It defaults to `""`.
    - `elapsedTime` {{optional_inline}}
      - : A number giving the amount of time the animation has been running,
        in seconds, when this event fired, excluding any time the animation was paused.
        For an `"animationstart"` event, `elapsedTime` is `0.0` unless there was a negative value for [`animation-delay`](/en-US/docs/Web/CSS/animation-delay),
        in which case the event will be fired with `elapsedTime` containing `(-1 * delay)`.
        It defaults to `0.0`.
    - `pseudoElement` {{optional_inline}}
      - : A string, defaulting with `"::"`, containing the name of the [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) the animation runs on.
        If the animation doesn't run on a pseudo-element but on the element, an empty string: `""`.
        It defaults to `""`.

### Return value

A new {{domxref("TransitionEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}},
  {{cssxref("transition-duration")}}, {{cssxref("transition-property")}},
  {{cssxref("transition-timing-function")}}.
