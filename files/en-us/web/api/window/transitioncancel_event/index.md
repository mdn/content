---
title: 'Window: transitioncancel event'
slug: Web/API/Window/transitioncancel_event
page-type: web-api-event
tags:
  - API
  - Event
  - Reference
  - Web
  - Window
  - events
  - transitioncancel
browser-compat: api.Window.transitioncancel_event
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

The original target for this event is the {{domxref("Element")}} that had the transition applied. You can listen for this event on the {{domxref("Window")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on [HTMLElement: transitioncancel](/en-US/docs/Web/API/HTMLElement/transitioncancel_event).

## Examples

This code adds a listener to the `transitioncancel` event:

```js
window.addEventListener('transitioncancel', () => {
  console.log('Transition canceled');
});
```

The same, but using the {{domxref("GlobalEventHandlers.ontransitioncancel", "ontransitioncancel")}} property instead of `addEventListener()`:

```js
window.ontransitioncancel = () => {
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
- Related events: {{domxref("Window/transitionrun_event", "transitionrun")}}, {{domxref("Window/transitionstart_event", "transitionstart")}}, {{domxref("Window/transitionend_event", "transitionend")}}
- This event on {{domxref("HTMLElement")}} targets: {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/transitioncancel_event", "transitioncancel")}}
