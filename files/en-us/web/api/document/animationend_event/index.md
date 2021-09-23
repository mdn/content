---
title: 'Document: animationend event'
slug: Web/API/Document/animationend_event
tags:
  - API
  - Animation
  - CSS Animations
  - Document
  - Event
  - Reference
  - Web
  - animationend
browser-compat: api.Document.animationend_event
---
{{APIRef}}

The **`animationend`** event is fired when a [CSS Animation](/en-US/docs/Web/CSS/CSS_Animations) has completed. If the animation aborts before reaching completion, such as if the element is removed from the DOM or the animation is removed from the element, the `animationend` event is not fired.

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
        {{domxref("GlobalEventHandlers/onanimationend","onanimationend")}}
      </td>
    </tr>
  </tbody>
</table>

The original target for this event is the {{domxref("Element")}} that had the animation applied. You can listen for this event on the {{domxref("Document")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on [HTMLElement: animationend](/en-US/docs/Web/API/HTMLElement/animationend_event).

## Examples

This example listens for the `animationend` event:

```js
document.addEventListener('animationend', () => {
  console.log('Animation ended');
});
```

The same, but using the `onanimationend` event handler property:

```js
document.onanimationend = () => {
  console.log('Animation ended');
};
```

[See a live example of this event.](/en-US/docs/Web/API/HTMLElement/animationend_event#live_example)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations)
- [Using CSS Animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- Related events: {{domxref("Document/animationstart_event", "animationstart")}}, {{domxref("Document/animationcancel_event", "animationcancel")}}, {{domxref("Document/animationiteration_event", "animationiteration")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/animationend_event", "animationend")}}
- This event on {{domxref("HTMLElement")}} targets: {{domxref("HTMLElement/animationend_event", "animationend")}}
