---
title: 'HTMLElement: animationend event'
slug: Web/API/HTMLElement/animationend_event
tags:
  - API
  - Animation
  - AnimationEvent
  - CSS Animations
  - CSS3 Animations
  - Event
  - HTMLElement
  - Reference
  - animationend
browser-compat: api.HTMLElement.animationend_event
---
{{APIRef}}

The **`animationend`** event is fired when a [CSS Animation](/en-US/docs/Web/CSS/CSS_Animations) has completed. If the animation aborts before reaching completion, such as if the element is removed from the DOM or the animation is removed from the element, the `animationend` event is not fired.

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
        {{domxref("GlobalEventHandlers/onanimationend","onanimationend")}}
      </td>
    </tr>
  </tbody>
</table>

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
- Related events: {{domxref("HTMLElement/animationstart_event", "animationstart")}}, {{domxref("HTMLElement/animationcancel_event", "animationcancel")}}, {{domxref("HTMLElement/animationiteration_event", "animationiteration")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/animationend_event", "animationend")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/animationend_event", "animationend")}}
