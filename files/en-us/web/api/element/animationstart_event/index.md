---
title: 'Element: animationstart event'
slug: Web/API/Element/animationstart_event
tags:
  - API
  - Animation
  - AnimationEvent
  - CSS Animations
  - Event
  - Element
  - Reference
browser-compat: api.Element.animationstart_event
page-type: web-api-event
---
{{APIRef}}

The **`animationstart`** event is fired when a [CSS Animation](/en-US/docs/Web/CSS/CSS_Animations) has started. If there is an {{cssxref("animation-delay")}}, this event will fire once the delay period has expired. A negative delay will cause the event to fire with an {{domxref("AnimationEvent/elapsedTime", "elapsedTime")}} equal to the absolute value of the delay (and, correspondingly, the animation will begin playing at that time index into the sequence).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('animationstart', (event) => {});

onanimationstart = (event) => { };
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

This listens for the `animationstart` event and logs a message when it is fired:

```js
const animated = document.querySelector('.animated');

animated.addEventListener('animationstart', () => {
  console.log('Animation started');
});
```

The same, but using `onanimationstart`:

```js
const animated = document.querySelector('.animated');

animated.onanimationstart = () => {
  console.log('Animation started');
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
  animation-name: slidein;
  animation-iteration-count: 2;
}

@keyframes slidein {
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
const animation = document.querySelector('p.animation');
const animationEventLog = document.querySelector('.animation-example>.event-log');
const applyAnimation = document.querySelector('.animation-example>button.activate');
let iterationCount = 0;

animation.addEventListener('animationstart', () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation started' `;
});

animation.addEventListener('animationiteration', () => {
  iterationCount++;
  animationEventLog.textContent = `${animationEventLog.textContent}'animation iterations: ${iterationCount}' `;
});

animation.addEventListener('animationend', () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation ended'`;
  animation.classList.remove('active');
  applyAnimation.textContent = "Activate animation";
});

animation.addEventListener('animationcancel', () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation canceled'`;
});

applyAnimation.addEventListener('click', () => {
  animation.classList.toggle('active');
  animationEventLog.textContent = '';
  iterationCount = 0;
  const active = animation.classList.contains('active');
  applyAnimation.textContent = active ? "Cancel animation" : "Activate animation";
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations)
- [Using CSS Animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- Related events: {{domxref("Element/animationend_event", "animationend")}}, {{domxref("Element/animationiteration_event", "animationiteration")}}, {{domxref("Element/animationcancel_event", "animationcancel")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/animationstart_event", "animationstart")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/animationstart_event", "animationstart")}}
