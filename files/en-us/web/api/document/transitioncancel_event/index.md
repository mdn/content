---
title: 'Document: transitioncancel event'
slug: Web/API/Document/transitioncancel_event
tags:
  - API
  - CSS Transitions
  - Document
  - Event
  - Reference
  - TransitionEvent
  - Web
  - transitioncancel
browser-compat: api.Document.transitioncancel_event
---
{{APIRef}}{{SeeCompatTable}}

The **`transitioncancel`** event is fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) is canceled.

See {{domxref("GlobalEventHandlers.ontransitioncancel")}} for more information.

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
        {{domxref("GlobalEventHandlers.ontransitioncancel")}}
      </td>
    </tr>
  </tbody>
</table>

The original target for this event is the {{domxref("Element")}} that had the transition applied. You can listen for this event on the {{domxref("Document")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on [HTMLElement: transitioncancel](/en-US/docs/Web/API/HTMLElement/transitioncancel_event).

## Examples

This code adds a listener to the `transitioncancel` event:

```js
document.addEventListener('transitioncancel', () => {
  console.log('Transition canceled');
});
```

The same, but using the {{domxref("GlobalEventHandlers.ontransitioncancel", "ontransitioncancel")}} property instead of `addEventListener()`:

```js
document.ontransitioncancel = () => {
  console.log('Transition canceled');
};
```

[See a live example of this event.](/en-US/docs/Web/API/HTMLElement/transitioncancel_event#live_example)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("GlobalEventHandlers.ontransitioncancel")}} event handler
- The {{domxref("TransitionEvent")}} interface
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Related events: {{domxref("Document/transitionrun_event", "transitionrun")}}, {{domxref("Document/transitionstart_event", "transitionstart")}}, {{domxref("Document/transitionend_event", "transitionend")}}
- This event on {{domxref("HTMLElement")}} targets: {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/transitioncancel_event", "transitioncancel")}}
