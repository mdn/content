---
title: 'Document: animationiteration event'
slug: Web/API/Document/animationiteration_event
tags:
  - API
  - Animation
  - AnimationEvent
  - CSS Animations
  - Document
  - Event
  - Reference
  - animationiteration
browser-compat: api.Document.animationiteration_event
---
{{APIRef}}

The **`animationiteration`** event is fired when an iteration of a [CSS Animation](/en-US/docs/Web/CSS/CSS_Animations) ends, and another one begins. This event does not occur at the same time as the {{domxref("Document/animationend_event", "animationend")}} event, and therefore does not occur for animations with an `animation-iteration-count` of one.

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
        {{domxref("GlobalEventHandlers/onanimationiteration","onanimationiteration")}}
      </td>
    </tr>
  </tbody>
</table>

The original target for this event is the {{domxref("Element")}} that had the animation applied. You can listen for this event on the {{domxref("Document")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on [HTMLElement: animationiteration](/en-US/docs/Web/API/HTMLElement/animationiteration_event).

## Examples

This code uses `animationiteration` to keep track of the number of iterations an animation has completed:

```js
let iterationCount = 0;

document.addEventListener('animationiteration', () => {
  iterationCount++;
  console.log(`Animation iteration count: ${iterationCount}`);
});
```

The same, but using the `onanimationiteration` event handler property:

```js
let iterationCount = 0;

document.onanimationiteration = () => {
  iterationCount++;
  console.log(`Animation iteration count: ${iterationCount}`);
};
```

[See a live example of this event.](/en-US/docs/Web/API/HTMLElement/animationiteration_event#live_example)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations)
- [Using CSS Animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- Related events: {{domxref("Document/animationstart_event", "animationstart")}}, {{domxref("Document/animationend_event", "animationend")}}, {{domxref("Document/animationcancel_event", "animationcancel")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/animationiteration_event", "animationiteration")}}
- This event on {{domxref("HTMLElement")}} targets: {{domxref("HTMLElement/animationiteration_event", "animationiteration")}}
