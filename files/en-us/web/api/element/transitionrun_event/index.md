---
title: "Element: transitionrun event"
short-title: transitionrun
slug: Web/API/Element/transitionrun_event
page-type: web-api-event
browser-compat: api.Element.transitionrun_event
---

{{APIRef}}

The **`transitionrun`** event is fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) is first created, i.e. before any {{cssxref("transition-delay")}} has begun.

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("transitionrun", (event) => {});

ontransitionrun = (event) => {};
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

This code adds a listener to the `transitionrun` event:

```js
el.addEventListener("transitionrun", () => {
  console.log(
    "Transition is running but hasn't necessarily started transitioning yet",
  );
});
```

The same, but using the `ontransitionrun` property instead of `addEventListener()`:

```js
el.ontransitionrun = () => {
  console.log(
    "Transition started running, and will start transitioning when the transition delay has expired",
  );
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
  background: rgb(255 0 0 / 100%);
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 1s;
}

.transition:hover {
  transform: rotate(90deg);
  background: rgb(255 0 0 / 0%);
}
```

To this, we'll add some JavaScript to indicate where the {{domxref("Element/transitionstart_event", "transitionstart")}} and `transitionrun` events fire.

```js
const el = document.querySelector(".transition");
const message = document.querySelector(".message");

el.addEventListener("transitionrun", () => {
  message.textContent = "transitionrun fired";
});

el.addEventListener("transitionstart", () => {
  message.textContent = "transitionstart fired";
});

el.addEventListener("transitionend", () => {
  message.textContent = "transitionend fired";
});
```

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

The difference is that:

- `transitionrun` fires when the transition is created (i.e. at the start of any delay).
- `transitionstart` fires when the actual animation has begun (i.e. at the end of any delay).

The `transitionrun` will occur even if the transition is canceled before the delay expires. If there is no transition delay or if transition-delay is negative, both `transitionrun` and `transitionstart` are fired.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TransitionEvent")}} interface
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Related events: {{domxref("Element/transitionend_event", "transitionend")}}, {{domxref("Element/transitionstart_event", "transitionstart")}}, {{domxref("Element/transitioncancel_event", "transitioncancel")}}
