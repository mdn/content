---
title: 'Element: gesturestart event'
slug: Web/API/Element/gesturestart_event
tags:
  - Event
  - Non-standard
  - Reference
browser-compat: api.Element.gesturestart_event
---
{{APIRef}}{{Non-standard_header}}

The **`gesturestart`** event is fired when multiple fingers contact the touch surface, thus starting a new gesture. During the gesture, {{event("gesturechange")}} events will be fired. When the gesture has ended, a {{event("gestureend")}} event will be fired.

It is a proprietary event specific to WebKit.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Unknown</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Unknown</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("GestureEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>Unknown</td>
    </tr>
  </tbody>
</table>

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- Related events:

  - [`MSGestureStart`](/en-US/docs/Web/API/Element/MSGestureStart_event)
  - [`MSGestureEnd`](/en-US/docs/Web/API/Element/MSGestureEnd_event)
  - [`MSGestureTap`](/en-US/docs/Web/API/Element/MSGestureTap_event)
  - [`MSGestureChange`](/en-US/docs/Web/API/Element/MSGestureChange_event)
  - [`MSGestureHold`](/en-US/docs/Web/API/Element/MSGestureHold_event)
  - [`MSInertiaStart`](/en-US/docs/Web/API/Element/MSInertiaStart_event)
  - [`gesturechange`](/en-US/docs/Web/API/Element/gesturechange_event)
  - [`gestureend`](/en-US/docs/Web/API/Element/gestureend_event)

- [GestureEventClassReference at the Safari Developer Library](https://developer.apple.com/library/iad/documentation/UserExperience/Reference/GestureEventClassReference/index.html)
