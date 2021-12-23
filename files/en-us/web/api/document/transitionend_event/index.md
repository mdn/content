---
title: 'Document: transitionend event'
slug: Web/API/Document/transitionend_event
tags:
  - CSS transition
  - Document
  - Event
  - Reference
  - Web
  - transitionend
browser-compat: api.Document.transitionend_event
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

The `transitionend` event is fired in both directions - as it finishes transitioning to the transitioned state, and when it fully reverts to the default or non-transitioned state. If there is no transition delay or duration, if both are 0s or neither is declared, there is no transition, and none of the transition events are fired. If the `transitioncancel` event is fired, the `transitionend` event will not fire.

The original target for this event is the {{domxref("Element")}} that had the transition applied. You can listen for this event on the {{domxref("Document")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on [HTMLElement: transitionend](/en-US/docs/Web/API/HTMLElement/transitionend_event).

## Examples

This code adds a listener to the `transitionend` event:

```js
document.addEventListener('transitionend', () => {
  console.log('Transition ended');
});
```

The same, but using the {{domxref("GlobalEventHandlers/ontransitionend", "ontransitionend")}} property instead of `addEventListener()`:

```js
document.ontransitionend = () => {
  console.log('Transition ended');
};
```

[See a live example of this event.](/en-US/docs/Web/API/HTMLElement/transitionend_event#live_example)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("GlobalEventHandlers.ontransitionend")}} event handler
- The {{domxref("TransitionEvent")}} interface
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Related events: {{domxref("Document/transitionrun_event", "transitionrun")}}, {{domxref("Document/transitionstart_event", "transitionstart")}}, {{domxref("Document/transitioncancel_event", "transitioncancel")}}
- This event on {{domxref("HTMLElement")}} targets: {{domxref("HTMLElement/transitionend_event", "transitionend")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/transitionend_event", "transitionend")}}
