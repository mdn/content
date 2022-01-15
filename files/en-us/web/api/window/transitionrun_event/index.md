---
title: 'Window: transitionrun event'
slug: Web/API/Window/transitionrun_event
tags:
  - API
  - Reference
  - Web
  - Window
  - events
  - transitionrun
browser-compat: api.Window.transitionrun_event
---
{{APIRef}} {{SeeCompatTable}}

The **`transitionrun`** event is fired when a [CSS transition](/en-US/docs/Web/CSS/Using_CSS_transitions) is first created, i.e. before any {{cssxref("transition-delay")}} has begun.

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
      <td>{{domxref("TransitionEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/GlobalEventHandlers/ontransitionrun"
            >ontransitionrun</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

The original target for this event is the [`Element`](/en-US/docs/Web/API/Element) that had the transition applied. You can listen for this event on the `Window` interface to handle it in the capture or bubbling phases. For full details on this event please see the page on [HTMLElement: transitionrun](/en-US/docs/Web/API/HTMLElement/transitionrun_event).

## Examples

This code adds a listener to the `transitionrun` event:

```js
window.addEventListener('transitionrun', () => {
  console.log('Transition is running but hasn't necessarily started transitioning yet');
});
```

The same, but using the [`ontransitionrun`](/en-US/docs/Web/API/GlobalEventHandlers/ontransitionrun) property instead of `addEventListener()`:

```js
window.ontransitionrun = () => {
  console.log('Transition started running');
};
```

[See a live example of this event.](/en-US/docs/Web/API/HTMLElement/transitionrun_event#Live_example)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("GlobalEventHandlers.ontransitionrun")}} event handler
- The {{domxref("TransitionEvent")}} interface
- CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Related events: [`transitionend`](/en-US/docs/Web/API/Window/transitionend_event), [`transitionstart`](/en-US/docs/Web/API/Window/transitionstart_event), [`transitioncancel`](/en-US/docs/Web/API/Window/transitioncancel_event)
- This event on [`HTMLElement`](/en-US/docs/Web/API/HTMLElement) targets: [`transitionrun`](/en-US/docs/Web/API/HTMLElement/transitionrun_event)
- This event on [`Document`](/en-US/docs/Web/API/Document) targets: [`transitionrun`](/en-US/docs/Web/API/Document/transitionrun_event)
