---
title: 'Document: animationstart event'
slug: Web/API/Document/animationstart_event
tags:
  - API
  - Animation
  - CSS Animations
  - Document
  - Event
  - Reference
  - Web
  - animationstart
browser-compat: api.Document.animationstart_event
---
{{APIRef}}

The **`animationstart`** event is fired when a [CSS Animation](/en-US/docs/Web/CSS/CSS_Animations) has started. If there is an {{cssxref("animation-delay")}}, this event will fire once the delay period has expired. A negative delay will cause the event to fire with an {{domxref("AnimationEvent/elapsedTime", "elapsedTime")}} equal to the absolute value of the delay (and, correspondingly, the animation will begin playing at that time index into the sequence).

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
      <td>{{domxref("AnimationEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/onanimationstart","onanimationstart")}}
      </td>
    </tr>
  </tbody>
</table>

The original target for this event is the {{domxref("Element")}} that had the animation applied. You can listen for this event on the {{domxref("Document")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on [HTMLElement: animationstart](/en-US/docs/Web/API/HTMLElement/animationstart_event).

## Examples

This listens for the `animationstart` event and logs a message when it is fired:

```js
document.addEventListener('animationstart', () => {
  console.log('Animation started');
});
```

The same, but using `onanimationstart`:

```js
document.onanimationstart = () => {
  console.log('Animation started');
};
```

[See a live example of this event.](/en-US/docs/Web/API/HTMLElement/animationstart_event#live_example)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations)
- [Using CSS Animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- Related events: {{domxref("Document/animationend_event", "animationend")}}, {{domxref("Document/animationiteration_event", "animationiteration")}}, {{domxref("Document/animationcancel_event", "animationcancel")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/animationstart_event", "animationstart")}}
- This event on {{domxref("HTMLElement")}} targets: {{domxref("HTMLElement/animationstart_event", "animationstart")}}
