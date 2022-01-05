---
title: 'Document: transitionstart event'
slug: Web/API/Document/transitionstart_event
tags:
  - DOM
  - Document
  - Event
  - Reference
  - Web
  - transitionstart
browser-compat: api.Document.transitionstart_event
---
{{APIRef}}{{SeeCompatTable}}

The **`transitionstart`** event is fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has actually started, i.e., after any {{cssxref("transition-delay")}} has ended.

The difference is `transitionstart` and `transitionrun` is that `transitionrun` fires when the transition is created (i.e. at the start of any delay) and `transitionstart` fires when the actual animation has begun (i.e. at the end of any delay).

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
        {{domxref("GlobalEventHandlers.ontransitionstart")}}
      </td>
    </tr>
  </tbody>
</table>

The original target for this event is the {{domxref("Element")}} that had the transition applied. You can listen for this event on the {{domxref("Document")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on [HTMLElement: transitionstart](/en-US/docs/Web/API/HTMLElement/transitionstart_event).

## Examples

This code adds a listener to the `transitionstart` event:

```js
document.addEventListener('transitionstart', () => {
  console.log('Started transitioning');
});
```

The same, but using the {{domxref("GlobalEventHandlers/ontransitionstart", "ontransitionstart")}} property instead of `addEventListener()`:

```js
document.ontransitionrun = () => {
  console.log('Started transitioning');
};
```

[See a live example of this event.](/en-US/docs/Web/API/HTMLElement/transitionstart_event#live_example)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("GlobalEventHandlers.ontransitionstart")}} event handler
- The {{domxref("TransitionEvent")}} interface
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Related events: {{domxref("Document/transitionend_event", "transitionend")}}, {{domxref("Document/transitionrun_event", "transitionrun")}}, {{domxref("Document/transitioncancel_event", "transitioncancel")}}
- This event on {{domxref("HTMLElement")}} targets: {{domxref("HTMLElement/transitionstart_event", "transitionstart")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/transitionstart_event", "transitionstart")}}
