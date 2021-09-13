---
title: 'Document: transitionrun event'
slug: Web/API/Document/transitionrun_event
tags:
  - Document
  - Event
  - Reference
  - TransitionEvent
  - Web
  - transitionrun
browser-compat: api.Document.transitionrun_event
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

The original target for this event is the {{domxref("Element")}} that had the transition applied. You can listen for this event on the {{domxref("Document")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on [HTMLElement: transitionrun](/en-US/docs/Web/API/HTMLElement/transitionrun_event).

## Examples

This code adds a listener to the `transitionrun` event:

```js
document.addEventListener('transitionrun', () => {
  console.log('Transition is running but hasn't necessarily started transitioning yet');
});
```

The same, but using the {{domxref("GlobalEventHandlers/ontransitionrun", "ontransitionrun")}} property instead of `addEventListener()`:

```js
document.ontransitionrun = () => {
  console.log('Transition started running');
};
```

[See a live example of this event.](/en-US/docs/Web/API/HTMLElement/transitionrun_event#live_example)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("GlobalEventHandlers.ontransitionrun")}} event handler
- The {{domxref("TransitionEvent")}} interface
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Related events: {{domxref("Document/transitionend_event", "transitionend")}}, {{domxref("Document/transitionstart_event", "transitionstart")}}, {{domxref("Document/transitioncancel_event", "transitioncancel")}}
- This event on {{domxref("HTMLElement")}} targets: {{domxref("HTMLElement/transitionrun_event", "transitionrun")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/transitionrun_event", "transitionrun")}}
