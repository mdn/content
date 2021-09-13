---
title: 'HTMLElement: animationstart event'
slug: Web/API/HTMLElement/animationstart_event
tags:
  - API
  - Animation
  - AnimationEvent
  - CSS Animations
  - Event
  - HTMLElement
  - Reference
browser-compat: api.HTMLElement.animationstart_event
---
{{APIRef}}

The **`animationstart`** event is fired when a [CSS Animation](/en-US/docs/Web/CSS/CSS_Animations) has started. If there is an {{cssxref("animation-delay")}}, this event will fire once the delay period has expired. A negative delay will cause the event to fire with an {{domxref("AnimationEvent/elapsedTime", "elapsedTime")}} equal to the absolute value of the delay (and, correspondingly, the animation will begin playing at that time index into the sequence).

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("AnimationEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/onanimationstart","onanimationstart")}}
      </td>
    </tr>
  </tbody>
</table>

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

#### JS

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
  let active = animation.classList.contains('active');
  if (active) {
    applyAnimation.textContent = "Cancel animation";
  } else {
    applyAnimation.textContent = "Activate animation";
  }
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
- Related events: {{domxref("HTMLElement/animationend_event", "animationend")}}, {{domxref("HTMLElement/animationiteration_event", "animationiteration")}}, {{domxref("HTMLElement/animationcancel_event", "animationcancel")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/animationstart_event", "animationstart")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/animationstart_event", "animationstart")}}
