---
title: 'HTMLElement: transitionstart event'
slug: Web/API/HTMLElement/transitionstart_event
tags:
  - CSS Transitions
  - Event
  - HTML DOM
  - HTMLElement
  - Reference
  - TransitionEvent
  - transitionstart
browser-compat: api.HTMLElement.transitionstart_event
---
{{APIRef}}{{SeeCompatTable}}

The **`transitionstart`** event is fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has actually started, i.e., after any {{cssxref("transition-delay")}} has ended.

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
        {{domxref("GlobalEventHandlers/ontransitionstart", "ontransitionstart")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

This code adds a listener to the `transitionstart` event:

```js
element.addEventListener('transitionstart', () => {
  console.log('Started transitioning');
});
```

The same, but using the [`ontransitionstart`](/en-US/docs/Web/API/GlobalEventHandlers/ontransitionstart) property instead of `addEventListener()`:

```js
element.ontransitionstart = () => {
  console.log('Started transitioning');
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
const transition = document.querySelector('.transition');
const message = document.querySelector('.message');

transition.addEventListener('transitionrun', function() {
  message.textContent = 'transitionrun fired';
});

transition.addEventListener('transitionstart', function() {
  message.textContent = 'transitionstart fired';
});

transition.addEventListener('transitionend', function() {
  message.textContent = 'transitionend fired';
});
```

{{ EmbedLiveSample('Examples', '100%', '150px') }}

The difference is that:

- transitionrun fires when the transition is created (i.e. at the start of any delay).
- transitionstart fires when the actual animation has begun (i.e. at the end of any delay).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("GlobalEventHandlers.ontransitionstart")}} event handler
- The {{domxref("TransitionEvent")}} interface
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Related events: {{domxref("HTMLElement/transitionend_event", "transitionend")}}, {{domxref("HTMLElement/transitionrun_event", "transitionrun")}}, {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/transitionstart_event", "transitionstart")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/transitionstart_event", "transitionstart")}}
