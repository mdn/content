---
title: 'Document: animationcancel event'
slug: Web/API/Document/animationcancel_event
tags:
  - API
  - Animation
  - CSS Animations
  - Document
  - Event
  - Reference
  - Web
  - animationcancel
browser-compat: api.Document.animationcancel_event
---
{{APIRef}}{{SeeCompatTable}}

The **`animationcancel`** event is fired when a [CSS Animation](/en-US/docs/Web/CSS/CSS_Animations) unexpectedly aborts. In other words, any time it stops running without sending an {{domxref("Document/animationend_event", "animationend")}} event. This might happen when the {{cssxref("animation-name")}} is changed such that the animation is removed, or when the animating node is hidden using CSS. Therefore, either directly or because any of its containing nodes are hidden.

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
        {{domxref("GlobalEventHandlers/onanimationcancel","onanimationcancel")}}
      </td>
    </tr>
  </tbody>
</table>

The original target for this event is the {{domxref("Element")}} that had the animation applied. You can listen for this event on the {{domxref("Document")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on [HTMLElement: animationcancel](/en-US/docs/Web/API/HTMLElement/animationcancel_event).

## Examples

This code adds a listener to the `animationcancel` event.

```js
document.addEventListener('animationcancel', () => {
  console.log('Animation canceled');
});
```

The same, but using the {{domxref("GlobalEventHandlers/onanimationcancel","onanimationcancel")}} property instead of `addEventListener()`:

```js
document.onanimationcancel = () => {
  console.log('Animation canceled');
};
```

[See a live example of this event.](/en-US/docs/Web/API/HTMLElement/animationcancel_event#live_example)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations)
- [Using CSS Animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- Related events: {{domxref("Document/animationstart_event", "animationstart")}}, {{domxref("Document/animationend_event", "animationend")}}, {{domxref("Document/animationiteration_event", "animationiteration")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/animationcancel_event", "animationcancel")}}
- This event on {{domxref("HTMLElement")}} targets: {{domxref("HTMLElement/animationcancel_event", "animationcancel")}}
