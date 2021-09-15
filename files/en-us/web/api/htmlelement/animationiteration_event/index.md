---
title: 'HTMLElement: animationiteration event'
slug: Web/API/HTMLElement/animationiteration_event
tags:
  - API
  - Animation
  - AnimationEvent
  - CSS Animations
  - Event
  - HTMLElement
  - Reference
browser-compat: api.HTMLElement.animationiteration_event
---
{{APIRef}}

The **`animationiteration`** event is fired when an iteration of a [CSS Animation](/en-US/docs/Web/CSS/CSS_Animations) ends, and another one begins. This event does not occur at the same time as the {{domxref("HTMLElement/animationend_event", "animationend")}} event, and therefore does not occur for animations with an `animation-iteration-count` of one.

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
        {{domxref("GlobalEventHandlers/onanimationiteration","onanimationiteration")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

This code uses `animationiteration` to keep track of the number of iterations an animation has completed:

```js
const animated = document.querySelector('.animated');

let iterationCount = 0;

animated.addEventListener('animationiteration', () => {
  iterationCount++;
  console.log(`Animation iteration count: ${iterationCount}`);
});
```

The same, but using the `onanimationiteration` event handler property:

```js
const animated = document.querySelector('.animated');

let iterationCount = 0;

animated.onanimationiteration = () => {
  iterationCount++;
  console.log(`Animation iteration count: ${iterationCount}`);
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
- Related events: {{domxref("HTMLElement/animationstart_event", "animationstart")}}, {{domxref("HTMLElement/animationend_event", "animationend")}}, {{domxref("HTMLElement/animationcancel_event", "animationcancel")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/animationiteration_event", "animationiteration")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/animationiteration_event", "animationiteration")}}
