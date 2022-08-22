---
title: TransitionEvent
slug: Web/API/TransitionEvent
page-type: web-api-interface
tags:
  - API
  - CSS
  - CSS Transitions
  - CSSOM
  - Reference
browser-compat: api.TransitionEvent
---
{{APIRef("CSSOM")}}

The **`TransitionEvent`** interface represents events providing information related to [transitions](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).

{{InheritanceDiagram}}

## Constructor

- {{domxref("TransitionEvent.TransitionEvent", "TransitionEvent()")}}
  - : Creates a `TransitionEvent` event with the given parameters.

## Properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("TransitionEvent.propertyName")}} {{ReadOnlyInline}}
  - : A string containing the name CSS property associated with the transition.
- {{domxref("TransitionEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : A `float` giving the amount of time the transition has been running, in seconds, when this event fired. This value is not affected by the {{cssxref("transition-delay")}} property.
- {{domxref("TransitionEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : A string, starting with `::`, containing the name of the [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) the animation runs on. If the transition doesn't run on a pseudo-element but on the element, an empty string: `''`.

## Types of `TransitionEvent`

- {{domxref("HTMLElement.transitioncancel_event", "transitioncancel")}}
  - : An {{domxref("Event")}} fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions) has been cancelled.
- {{domxref("HTMLElement.transitionend_event", "transitionend")}}
  - : An {{domxref("Event")}} fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions) has finished playing.
- {{domxref("HTMLElement.transitionrun_event", "transitionrun")}}
  - : An {{domxref("Event")}} fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions) is created (i.e., when it is added to a set of running transitions), though not necessarily started.
- {{domxref("HTMLElement.transitionstart_event", "transitionstart")}}
  - : An {{domxref("Event")}} fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions) has started transitioning.

## Methods

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("TransitionEvent.initTransitionEvent()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Initializes a `TransitionEvent` created using the deprecated {{domxref("Document.createEvent()", "Document.createEvent('TransitionEvent')")}} method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS transitions](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
