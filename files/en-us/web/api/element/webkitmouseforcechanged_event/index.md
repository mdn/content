---
title: 'Element: webkitmouseforcechanged event'
slug: Web/API/Element/webkitmouseforcechanged_event
tags:
  - Event
  - Force Touch
  - MouseEvent
  - NeedsExample
  - Non-standard
  - Reference
  - Safari
  - Trackpad
  - UI
  - Web
  - WebKit
  - apple
  - mouse
  - touch
  - webkitmouseforcechanged
browser-compat: api.Element.webkitmouseforcechanged_event
---
{{APIRef}}{{Non-standard_header()}}

The non-standard **`webkitmouseforcechanged`** event is fired by Safari each time the amount of pressure changes on the trackpad/touchscreen.

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
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
  </tbody>
</table>

**`webkitmouseforcechanged`** is a proprietary, WebKit-specific event introduced by Apple to support their [Force Touch events](/en-US/docs/Web/API/Force_Touch_events) feature.

This event first fires after the {{event("mousedown")}} event and stops firing before the {{event("mouseup")}} event.

## Specifications

_Not part of any specification._ Apple has [a description at the Mac Developer Library](https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).

## Browser compatibility

{{Compat}}

## See also

- [Force Touch events](/en-US/docs/Web/API/Force_Touch_events)
- {{event("webkitmouseforcewillbegin")}}
- {{event("webkitmouseforcedown")}}
- {{event("webkitmouseforceup")}}
