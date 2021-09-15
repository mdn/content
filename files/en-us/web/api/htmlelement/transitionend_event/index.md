---
title: 'HTMLElement: transitionend event'
slug: Web/API/HTMLElement/transitionend_event
tags:
  - CSS Transitions
  - Event
  - HTML DOM
  - HTMLElement
  - Reference
  - TransitionEvent
  - transitionend
browser-compat: api.HTMLElement.transitionend_event
---
{{APIRef}}

The **`transitionend`** event is fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has completed. In the case where a transition is removed before completion, such as if the {{cssxref("transition-property")}} is removed or {{cssxref("display")}} is set to `none`, then the event will not be generated.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("TransitionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/ontransitionend", "ontransitionend")}}
      </td>
    </tr>
  </tbody>
</table>

The `transitionend` event is fired in both directions - as it finishes transitioning to the transitioned state, and when it fully reverts to the default or non-transitioned state. If there is no transition delay or duration, if both are 0s or neither is declared, there is no transition, and none of the transition events are fired.  If the `transitioncancel` event is fired, the `transitionend` event will not fire.

## Examples

This code gets an element that has a transition defined and adds a listener to the `transitionend` event:

```js
const transition = document.querySelector('.transition');

transition.addEventListener('transitionend', () => {
  console.log('Transition ended');
});
```

The same, but using the {{domxref("GlobalEventHandlers/ontransitionend", "ontransitionend")}}:

```js
const transition = document.querySelector('.transition');

transition.ontransitionend = () => {
  console.log('Transition ended');
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
  transition-property: transform background;
  transition-duration: 2s;
  transition-delay: 1s;
}

.transition:hover {
  transform: rotate(90deg);
  background: rgba(255,0,0,0);
}
```

To this, we'll add some JavaScript to indicate that the [`transitionstart`](/en-US/docs/Web/API/HTMLElement/transitionstart_event), [`transitionrun`](/en-US/docs/Web/API/HTMLElement/transitionrun_event), [`transitioncancel`](/en-US/docs/Web/API/Window/transitioncancel_event) and `transitionend` events fire. In this example, to cancel the transition, stop hovering over the transitioning box before the transition ends. For the transition end event to fire, stay hovered over the transition until the transition ends.

```js
const message = document.querySelector('.message');
const el = document.querySelector('.transition');

el.addEventListener('transitionrun', function() {
  message.textContent = 'transitionrun fired';
});

el.addEventListener('transitionstart', function() {
  message.textContent = 'transitionstart fired';
});

el.addEventListener('transitioncancel', function() {
  message.textContent = 'transitioncancel fired';
});

el.addEventListener('transitionend', function() {
  message.textContent = 'transitionend fired';
});
```

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

The `transitionend` event is fired in both directions: when the box finishes turning and the opacity hits 0 or 1, depending on the direction.

If there is no transition delay or duration, if both are 0s or neither is declared, there is no transition, and none of the transition events are fired.

If the `transitioncancel` event is fired, the `transitionend` event will not fire.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("GlobalEventHandlers.ontransitionend")}} event handler
- The {{domxref("TransitionEvent")}} interface
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Related events: {{domxref("HTMLElement/transitionrun_event", "transitionrun")}}, {{domxref("HTMLElement/transitionstart_event", "transitionstart")}}, {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/transitionend_event", "transitionend")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/transitionend_event", "transitionend")}}
