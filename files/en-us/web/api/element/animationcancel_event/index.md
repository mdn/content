---
title: "Element: animationcancel event"
short-title: animationcancel
slug: Web/API/Element/animationcancel_event
page-type: web-api-event
browser-compat: api.Element.animationcancel_event
---

{{APIRef}}

The **`animationcancel`** event is fired when a [CSS Animation](/en-US/docs/Web/CSS/CSS_animations) unexpectedly aborts. In other words, any time it stops running without sending an {{domxref("Element/animationend_event", "animationend")}} event. This might happen when the {{cssxref("animation-name")}} is changed such that the animation is removed, or when the animating node is hidden using CSS. Therefore, either directly or because any of its containing nodes are hidden.

An event handler for this event can be added by setting the `onanimationcancel` property, or using {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("animationcancel", (event) => {});

onanimationcancel = (event) => {};
```

## Event type

An {{domxref("AnimationEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("AnimationEvent")}}

## Event properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("AnimationEvent.animationName")}} {{ReadOnlyInline}}
  - : A string containing the value of the {{cssxref("animation-name")}} that generated the animation.
- {{domxref("AnimationEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : A `float` giving the amount of time the animation has been running, in seconds, when this event fired, excluding any time the animation was paused. For an `animationstart` event, `elapsedTime` is `0.0` unless there was a negative value for {{cssxref("animation-delay")}}, in which case the event will be fired with `elapsedTime` containing `(-1 * delay)`.
- {{domxref("AnimationEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : A string, starting with `'::'`, containing the name of the [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) the animation runs on. If the animation doesn't run on a pseudo-element but on the element, an empty string: `''`.

## Examples

This code gets an element that's currently being animated and adds a listener to the `animationcancel` event. It then sets the element's {{cssxref("display")}} property to `none`, which will trigger the `animationcancel` event.

```js
const animated = document.querySelector(".animated");

animated.addEventListener("animationcancel", () => {
  console.log("Animation canceled");
});

animated.style.display = "none";
```

The same, but using the `onanimationcancel` property instead of `addEventListener()`:

```js
const animated = document.querySelector(".animated");
animated.onanimationcancel = () => {
  console.log("Animation canceled");
};

animated.style.display = "none";
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

- [CSS Animations](/en-US/docs/Web/CSS/CSS_animations)
- [Using CSS Animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- Related events: {{domxref("Element/animationstart_event", "animationstart")}}, {{domxref("Element/animationend_event", "animationend")}}, {{domxref("Element/animationiteration_event", "animationiteration")}}
