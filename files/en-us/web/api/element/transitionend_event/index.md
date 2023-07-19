---
title: "Element: transitionend event"
short-title: transitionend
slug: Web/API/Element/transitionend_event
page-type: web-api-event
browser-compat: api.Element.transitionend_event
---

{{APIRef}}

The **`transitionend`** event is fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) has completed. In the case where a transition is removed before completion, such as if the {{cssxref("transition-property")}} is removed or {{cssxref("display")}} is set to `none`, then the event will not be generated.

The `transitionend` event is fired in both directions - as it finishes transitioning to the transitioned state, and when it fully reverts to the default or non-transitioned state. If there is no transition delay or duration, if both are 0s or neither is declared, there is no transition, and none of the transition events are fired. If the `transitioncancel` event is fired, the `transitionend` event will not fire.

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("transitionend", (event) => {});

ontransitionend = (event) => {};
```

## Event type

A {{domxref("TransitionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("TransitionEvent")}}

## Event properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("TransitionEvent.propertyName")}} {{ReadOnlyInline}}
  - : A string containing the name CSS property associated with the transition.
- {{domxref("TransitionEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : A `float` giving the amount of time the transition has been running, in seconds, when this event fired. This value is not affected by the {{cssxref("transition-delay")}} property.
- {{domxref("TransitionEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : A string, starting with `::`, containing the name of the [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) the animation runs on. If the transition doesn't run on a pseudo-element but on the element, an empty string: `''`.

## Examples

This code gets an element that has a transition defined and adds a listener to the `transitionend` event:

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitionend", () => {
  console.log("Transition ended");
});
```

The same, but using `ontransitionend`:

```js
const transition = document.querySelector(".transition");

transition.ontransitionend = () => {
  console.log("Transition ended");
};
```

### Live example

In the following example, we have a simple {{htmlelement("div")}} element, styled with a transition that includes a delay:

```html
<div class="transition">Hover over me</div>
<div class="message"></div>
```

```css
.transition {
  width: 100px;
  height: 100px;
  background: rgba(255, 0, 0, 1);
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 1s;
}

.transition:hover {
  transform: rotate(90deg);
  background: rgba(255, 0, 0, 0);
}
```

To this, we'll add some JavaScript to indicate that the [`transitionstart`](/en-US/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/en-US/docs/Web/API/Element/transitionrun_event), [`transitioncancel`](/en-US/docs/Web/API/Element/transitioncancel_event) and `transitionend` events fire. In this example, to cancel the transition, stop hovering over the transitioning box before the transition ends. For the transition end event to fire, stay hovered over the transition until the transition ends.

```js
const message = document.querySelector(".message");
const el = document.querySelector(".transition");

el.addEventListener("transitionrun", () => {
  message.textContent = "transitionrun fired";
});

el.addEventListener("transitionstart", () => {
  message.textContent = "transitionstart fired";
});

el.addEventListener("transitioncancel", () => {
  message.textContent = "transitioncancel fired";
});

el.addEventListener("transitionend", () => {
  message.textContent = "transitionend fired";
});
```

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

The `transitionend` event is fired in both directions: when the box finishes turning and the opacity hits 0 or 1, depending on the direction.

If there is no transition delay or duration, if both are 0s or neither is declared, there is no transition, and none of the transition events are fired.

If the `transitioncancel` event is fired, the `transitionend` event will not fire.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TransitionEvent")}} interface
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Related events: {{domxref("Element/transitionrun_event", "transitionrun")}}, {{domxref("Element/transitionstart_event", "transitionstart")}}, {{domxref("Element/transitioncancel_event", "transitioncancel")}}
