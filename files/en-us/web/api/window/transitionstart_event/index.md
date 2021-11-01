---
title: 'Window: transitionstart event'
slug: Web/API/Window/transitionstart_event
tags:
  - API
  - Reference
  - Web
  - Window
  - events
  - transitionstart
browser-compat: api.Window.transitionstart_event
---
{{APIRef}} {{SeeCompatTable}}

The **`transitionstart`** event is fired when a [CSS transition](/en-US/docs/Web/CSS/Using_CSS_transitions) has actually started, i.e., after any {{cssxref("transition-delay")}} has ended.

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

The original target for this event is the {{domxref("Element")}} that had the transition applied. You can listen for this event on the {{domxref("Window")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on [HTMLElement: transitionstart](/en-US/docs/Web/API/HTMLElement/transitionstart_event).

## Examples

This code adds a listener to the `transitionstart` event:

```js
window.addEventListener('transitionstart', () => {
  console.log('Started transitioning');
});
```

The same, but using the {{domxref("GlobalEventHandlers/ontransitionstart", "ontransitionstart")}} property instead of `addEventListener()`:

```js
window.ontransitionrun = () => {
  console.log('Started transitioning');
};
```

[See a live example of this event.](/en-US/docs/Web/API/HTMLElement/transitionstart_event#Live_example)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("GlobalEventHandlers.ontransitionstart")}} event handler
- The {{domxref("TransitionEvent")}} interface
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Related events: {{domxref("Window/transitionend_event", "transitionend")}}, {{domxref("Window/transitionrun_event", "transitionrun")}}, {{domxref("Window/transitioncancel_event", "transitioncancel")}}
- This event on {{domxref("HTMLElement")}} targets: {{domxref("HTMLElement/transitionstart_event", "transitionstart")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/transitionstart_event", "transitionstart")}}
