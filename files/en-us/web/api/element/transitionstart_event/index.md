---
title: "Element: transitionstart event"
short-title: transitionstart
slug: Web/API/Element/transitionstart_event
page-type: web-api-event
browser-compat: api.Element.transitionstart_event
---

{{APIRef}}

The **`transitionstart`** event is fired when a [CSS transition](/en-US/docs/Web/CSS/Guides/Transitions/Using) has actually started, i.e., after any {{cssxref("transition-delay")}} has ended.

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("transitionstart", (event) => { })

ontransitionstart = (event) => { }
```

## Event type

A {{domxref("TransitionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("TransitionEvent")}}

## Examples

This code adds a listener to the `transitionstart` event:

```js
element.addEventListener("transitionstart", () => {
  console.log("Started transitioning");
});
```

The same, but using the `ontransitionstart` property instead of `addEventListener()`:

```js
element.ontransitionstart = () => {
  console.log("Started transitioning");
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
  background: red;
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 1s;
}

.transition:hover {
  transform: rotate(90deg);
  background: transparent;
}
```

To this, we'll add some JavaScript to indicate where the `transitionstart` and {{domxref("Element/transitionrun_event", "transitionrun")}} events fire.

```js
const transition = document.querySelector(".transition");
const message = document.querySelector(".message");

transition.addEventListener("transitionrun", () => {
  message.textContent = "transitionrun fired";
});

transition.addEventListener("transitionstart", () => {
  message.textContent = "transitionstart fired";
});

transition.addEventListener("transitionend", () => {
  message.textContent = "transitionend fired";
});
```

{{ EmbedLiveSample('Live example', '100%', '170') }}

The difference is that:

- transitionrun fires when the transition is created (i.e., at the start of any delay).
- transitionstart fires when the actual animation has begun (i.e., at the end of any delay).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TransitionEvent")}} interface
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Related events: {{domxref("Element/transitionend_event", "transitionend")}}, {{domxref("Element/transitionrun_event", "transitionrun")}}, {{domxref("Element/transitioncancel_event", "transitioncancel")}}
