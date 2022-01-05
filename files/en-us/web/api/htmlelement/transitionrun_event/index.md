---
title: 'HTMLElement: transitionrun event'
slug: Web/API/HTMLElement/transitionrun_event
tags:
  - CSS Transitions
  - Event
  - HTML DOM
  - HTMLElement
  - Reference
  - Transitions
  - Web
  - transitionrun
browser-compat: api.HTMLElement.transitionrun_event
---
{{APIRef}}{{SeeCompatTable}}

The **`transitionrun`** event is fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) is first created, i.e. before any {{cssxref("transition-delay")}} has begun.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("TransitionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/ontransitionrun", "ontransitionrun")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

This code adds a listener to the `transitionrun` event:

```js
el.addEventListener('transitionrun', () => {
  console.log('Transition is running but hasn\'t necessarily started transitioning yet');
});
```

The same, but using the [`ontransitionrun`](/en-US/docs/Web/API/GlobalEventHandlers/ontransitionrun) property instead of `addEventListener()`:

```js
el.ontransitionrun = () => {
  console.log('Transition started running, and will start transitioning when the transition delay has expired');
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
  background: rgba(255,0,0,1);
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 1s;
}

.transition:hover {
  transform: rotate(90deg);
  background: rgba(255,0,0,0);
}
```

To this, we'll add some JavaScript to indicate where the {{domxref("HTMLElement/transitionstart_event", "transitionstart")}} and {{domxref("HTMLElement/transitionrun_event", "transitionrun")}} events fire.

```js
const el = document.querySelector('.transition');
const message = document.querySelector('.message');

el.addEventListener('transitionrun', function() {
  message.textContent = 'transitionrun fired';
});

el.addEventListener('transitionstart', function() {
  message.textContent = 'transitionstart fired';
});

el.addEventListener('transitionend', function() {
  message.textContent = 'transitionend fired';
});
```

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

The difference is that:

- `transitionrun` fires when the transition is created (i.e. at the start of any delay).
- `transitionstart` fires when the actual animation has begun (i.e. at the end of any delay).

The `transitionrun` will occur even if the transition is canceled before the delay expires. If there is no transition delay or if transition-delay is negative, both `transitionrun` and `transitionstart` are fired.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("GlobalEventHandlers.ontransitionrun")}} event handler
- The {{domxref("TransitionEvent")}} interface
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Related events: {{domxref("HTMLElement/transitionend_event", "transitionend")}}, {{domxref("HTMLElement/transitionstart_event", "transitionstart")}}, {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/transitionrun_event", "transitionrun")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/transitionrun_event", "transitionrun")}}
