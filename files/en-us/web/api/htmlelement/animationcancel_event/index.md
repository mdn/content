---
title: 'HTMLElement: animationcancel event'
slug: Web/API/HTMLElement/animationcancel_event
tags:
  - API
  - Animation
  - AnimationEvent
  - CSS Animations
  - Event
  - HTMLElement
  - Reference
  - animationcancel
browser-compat: api.HTMLElement.animationcancel_event
---
{{APIRef}}{{SeeCompatTable}}

The **`animationcancel`** event is fired when a [CSS Animation](/en-US/docs/Web/CSS/CSS_Animations) unexpectedly aborts. In other words, any time it stops running without sending an {{domxref("HTMLElement/animationend_event", "animationend")}} event. This might happen when the {{cssxref("animation-name")}} is changed such that the animation is removed, or when the animating node is hidden using CSS. Therefore, either directly or because any of its containing nodes are hidden.

An event handler for this event can be added by setting the {{domxref("GlobalEventHandlers.onanimationcancel", "onanimationcancel")}} property, or using {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

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
        {{domxref("GlobalEventHandlers/onanimationcancel","onanimationcancel")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

This code gets an element that's currently being animated and adds a listener to the `animationcancel` event. It then sets the element's {{cssxref("display")}} property to `none`, which will trigger the `animationcancel` event.

```js
const animated = document.querySelector('.animated');

animated.addEventListener('animationcancel', () => {
  console.log('Animation canceled');
});

animated.style.display = 'none';
```

The same, but using the {{domxref("GlobalEventHandlers/onanimationcancel","onanimationcancel")}} property instead of `addEventListener()`:

```js
const animated = document.querySelector('.animated');
animated.onanimationcancel = () => {
  console.log('Animation canceled');
};

animated.style.display = 'none';
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
- Related events: {{domxref("HTMLElement/animationstart_event", "animationstart")}}, {{domxref("HTMLElement/animationend_event", "animationend")}}, {{domxref("HTMLElement/animationiteration_event", "animationiteration")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/animationcancel_event", "animationcancel")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/animationcancel_event", "animationcancel")}}
