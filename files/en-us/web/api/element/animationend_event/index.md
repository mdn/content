---
title: 'Element: animationend event'
slug: Web/API/Element/animationend_event
tags:
  - API
  - Animation
  - AnimationEvent
  - CSS Animations
  - Event
  - Element
  - Reference
  - animationend
browser-compat: api.Element.animationend_event
page-type: web-api-event
---
{{APIRef}}

The **`animationend`** event is fired when a [CSS Animation](/en-US/docs/Web/CSS/CSS_Animations) has completed. If the animation aborts before reaching completion, such as if the element is removed from the DOM or the animation is removed from the element, the `animationend` event is not fired.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('animationend', (event) => {});

onanimationend = (event) => { };
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

This example gets an element that's being animated and listens for the `animationend` event:

```js
const animated = document.querySelector('.animated');

animated.addEventListener('animationend', () => {
  console.log('Animation ended');
});
```

The same, but using the `onanimationend` event handler property:

```js
const animated = document.querySelector('.animated');

animated.onanimationend = () => {
  console.log('Animation ended');
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
  margin: .2rem;
  padding: .2rem;
}

.animation.active {
  animation-duration: 2s;
  animation-name: slidein;
  animation-iteration-count: 2;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
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
- Related events: {{domxref("Element/animationstart_event", "animationstart")}}, {{domxref("Element/animationcancel_event", "animationcancel")}}, {{domxref("Element/animationiteration_event", "animationiteration")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/animationend_event", "animationend")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/animationend_event", "animationend")}}
