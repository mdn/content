---
title: 'Element: MSGestureHold event'
slug: Web/API/Element/MSGestureHold_event
page-type: web-api-event
tags:
  - Event
  - Non-standard
  - Reference
browser-compat: api.Element.MSGestureHold_event
---
{{APIRef}}{{Non-standard_header}}

The **`MSGestureHold`** event is fired when the user contacts the touch surface and remains in the same position for a while.

It is a proprietary event specific to Microsoft Edge and Internet Explorer.

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
      <td>{{domxref("MSGestureEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>Unknown</td>
    </tr>
  </tbody>
</table>

The {{domxref("UIEvent.detail")}} property of an `MSGestureHold` event has 3 possible values:

- `MSGESTURE_FLAG_BEGIN`
  - : This value indicates that the user started contacting the touch surface.
- `MSGESTURE_FLAG_END`
  - : This value indicates that the user has stopped touching the touch surface.
- `MSGESTURE_FLAG_END & MSGESTURE_FLAG_CANCEL` (bitwise AND-ed together)
  - : This value indicates that the user has moved their finger, regardless of whether they also stopped touching the touch surface

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
  - [`MSInertiaStart`](/en-US/docs/Web/API/Element/MSInertiaStart_event)
  - [`gesturestart`](/en-US/docs/Web/API/Element/gesturestart_event)
  - [`gesturechange`](/en-US/docs/Web/API/Element/gesturechange_event)
  - [`gestureend`](/en-US/docs/Web/API/Element/gestureend_event)
