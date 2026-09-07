---
title: "Element: animationend event"
short-title: animationend
slug: Web/API/Element/animationend_event
page-type: web-api-event
browser-compat: api.Element.animationend_event
---

{{APIRef("Web Animations")}}

The **`animationend`** event is fired when a [CSS Animation](/en-US/docs/Web/CSS/Guides/Animations) has completed. If the animation aborts before reaching completion, such as if the element is removed from the DOM or the animation is removed from the element, the `animationend` event is not fired.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("animationend", (event) => { })

onanimationend = (event) => { }
```

## Event type

An {{domxref("AnimationEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("AnimationEvent")}}

## Examples

This example gets an element that's being animated and listens for the `animationend` event:

```js
const animated = document.querySelector(".animated");

animated.addEventListener("animationend", () => {
  console.log("Animation ended");
});
```

The same, but using the `onanimationend` event handler property:

```js
const animated = document.querySelector(".animated");

animated.onanimationend = () => {
  console.log("Animation ended");
};
```

### Live example

#### HTML

```html
<div class="animation-example">
  <div class="container">
    <p class="animation">You chose a cold night to visit our planet.</p>
  </div>
  <button class="activate" type="button">Activate animation</button>
  <div class="event-log"></div>
</div>
```

#### CSS

```css
.container {
  height: 3rem;
}

.event-log {
  width: 25rem;
  height: 2rem;
  border: 1px solid black;
  margin: 0.2rem;
  padding: 0.2rem;
}

.animation.active {
  animation-duration: 2s;
  animation-name: slide-in;
  animation-iteration-count: 2;
}

@keyframes slide-in {
  from {
    transform: translateX(100%) scaleX(3);
  }

  to {
    transform: translateX(0) scaleX(1);
  }
}
```

#### JavaScript

```js
const animation = document.querySelector("p.animation");
const animationEventLog = document.querySelector(
  ".animation-example>.event-log",
);
const applyAnimation = document.querySelector(
  ".animation-example>button.activate",
);
let iterationCount = 0;

animation.addEventListener("animationstart", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation started' `;
});

animation.addEventListener("animationiteration", () => {
  iterationCount++;
  animationEventLog.textContent = `${animationEventLog.textContent}'animation iterations: ${iterationCount}' `;
});

animation.addEventListener("animationend", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation ended'`;
  animation.classList.remove("active");
  applyAnimation.textContent = "Activate animation";
});

animation.addEventListener("animationcancel", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation canceled'`;
});

applyAnimation.addEventListener("click", () => {
  animation.classList.toggle("active");
  animationEventLog.textContent = "";
  iterationCount = 0;
  const active = animation.classList.contains("active");
  applyAnimation.textContent = active
    ? "Cancel animation"
    : "Activate animation";
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Animations](/en-US/docs/Web/CSS/Guides/Animations)
- [Using CSS Animations](/en-US/docs/Web/CSS/Guides/Animations/Using)
- {{domxref("AnimationEvent")}}
- Related events: {{domxref("Element/animationstart_event", "animationstart")}}, {{domxref("Element/animationcancel_event", "animationcancel")}}, {{domxref("Element/animationiteration_event", "animationiteration")}}
