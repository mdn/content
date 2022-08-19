---
title: TransitionEvent.initTransitionEvent()
slug: Web/API/TransitionEvent/initTransitionEvent
page-type: web-api-instance-method
tags:
  - API
  - CSS
  - CSS Transitions
  - CSSOM
  - Deprecated
  - Method
  - Reference
  - TransitionEvent
  - Non-standard
browser-compat: api.TransitionEvent.initTransitionEvent
---
{{ apiref("CSSOM") }}{{Deprecated_Header}}{{Non-standard_Header}}

The **`TransitionEvent.initTransitionEvent()`** method
Initializes a transition event created using the deprecated
{{domxref("Document.createEvent()", "Document.createEvent('TransitionEvent')")}}
method.

`TransitionEvent` created that way are untrusted.

> **Note:** this method has been dropped during the standard process. It
> has been deprecated and is in the progress of been removed from most implementation.
> Do not use it anymore, use the standard constructor,
> {{domxref("TransitionEvent.TransitionEvent", "TransitionEvent()")}}, to create a
> synthetic {{domxref("TransitionEvent")}}

## Syntax

```js
initTransitionEvent(type, canBubble, cancelable, transitionName, elapsedTime)
```

### Parameters

- `type`
  - : A string identifying the specific type of transition event that
    occurred. Browsers always set it up to `transitionend`.
- `canBubble`
  - : A boolean flag indicating if the event can bubble
    (`true`) or not (`false`).
- `cancelable`
  - : A boolean flag indicating if the event associated action can be
    avoided (`true`) or not (`false`).
- `transitionName`
  - : A string containing the name of the CSS property associated
    with the transition. This value is not affected by the {{cssxref("transition-delay")}}
    property.
- `elapsedTime`
  - : Is `float` giving the amount of time the transition has been running, in
    seconds, when this event fired.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

_This method is non-standard and not part of any specification, though it was
present in early drafts of [CSS Transitions](https://drafts.csswg.org/css-transitions/)._

## Browser compatibility

{{Compat}}

## See also

- [Using CSS transitions](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}},
  {{cssxref("transition-duration")}}, {{cssxref("transition-property")}},
  {{cssxref("transition-timing-function")}}.
