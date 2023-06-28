---
title: "Element: transitionstart event"
short-title: transitionstart
slug: Web/API/Element/transitionstart_event
page-type: web-api-event
browser-compat: api.Element.transitionstart_event
---

{{APIRef}}

The **`transitionstart`** event is fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has actually started, i.e., after any {{cssxref("transition-delay")}} has ended.

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("transitionstart", (event) => {});

ontransitionstart = (event) => {};
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

To this, we'll add some JavaScript to indicate where the {{domxref("Element/transitionstart_event", "transitionstart")}} and {{domxref("Element/transitionrun_event", "transitionrun")}} events fire.

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

- transitionrun fires when the transition is created (i.e. at the start of any delay).
- transitionstart fires when the actual animation has begun (i.e. at the end of any delay).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TransitionEvent")}} interface
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Related events: {{domxref("Element/transitionend_event", "transitionend")}}, {{domxref("Element/transitionrun_event", "transitionrun")}}, {{domxref("Element/transitioncancel_event", "transitioncancel")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/transitionstart_event", "transitionstart")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/transitionstart_event", "transitionstart")}}
