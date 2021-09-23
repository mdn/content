---
title: TransitionEvent.initTransitionEvent()
slug: Web/API/TransitionEvent/initTransitionEvent
tags:
  - API
  - CSS
  - CSS3 Transitions
  - CSSOM
  - Deprecated
  - Experimental
  - Method
  - Reference
  - TransitionEvent
browser-compat: api.TransitionEvent.initTransitionEvent
---
{{ apiref("CSSOM") }} {{deprecated_header}}{{non-standard_header}}

The **`TransitionEvent.initTransitionEvent()`** method
Initializes a transition event created using the deprecated
{{domxref("Document.createEvent()", "Document.createEvent(\"TransitionEvent\")")}}
method.

`TransitionEvent` created that way are untrusted.

> **Note:** this method has been dropped during the standard process. It
> has been deprecated and is in the progress of been removed from most implementation.
> Do not use it anymore, use the standard constructor,
> {{domxref("TransitionEvent.TransitionEvent", "TransitionEvent()")}}, to create a
> synthetic {{domxref("TransitionEvent")}}

## Syntax

```js
transitionEvent.initTransitionEvent(typeArg, canBubbleArg, cancelableArg, transitionNameArg, elapsedTimeArg);
```

### Parameters

- _typeArg_

  - : Is a {{domxref("DOMString")}} identifying the specific type of transition event that
    occurred. The following value is allowed:

    | Value           | Meaning                   |
    | --------------- | ------------------------- |
    | `transitionend` | The transition completed. |

- _canBubbleArg_
  - : Is a boolean flag indicating if the event can bubble
    (`true`) or not (`false)`.
- _cancelableArg_
  - : Is a boolean flag indicating if the event associated action can be
    avoided (`true`) or not (`false)`.
- _transitionNameArg_
  - : Is a {{domxref("DOMString")}} containing the name of the CSS property associated
    with the transition. This value is not affected by the {{cssxref("transition-delay")}}
    property.
- _elapsedTimeArg_
  - : Is `float` giving the amount of time the transition has been running, in
    seconds, when this event fired.

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
