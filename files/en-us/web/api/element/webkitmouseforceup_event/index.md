---
title: 'Element: webkitmouseforceup event'
slug: Web/API/Element/webkitmouseforceup_event
tags:
  - Element
  - Event
  - Force Touch
  - MouseEvent
  - NeedsCompatTable
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
  - webkitmouseforceup
browser-compat: api.Element.webkitmouseforceup_event
---
{{APIRef}}{{Non-standard_header()}}

The non-standard **`webkitmouseforceup`** event is fired by Safari at an {{domxref("Element")}} some time after the {{event("webkitmouseforcedown")}} event, when pressure on the button has been reduced sufficiently to end the "force click".

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

**`webkitmouseforceup`** is a proprietary, WebKit-specific event. It is part of the [Force Touch events](/en-US/docs/Web/API/Force_Touch_events) feature.

## Specifications

_Not part of any specification._ Apple has [a description at the Mac Developer Library](https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).

## Browser compatibility

{{Compat}}

## See also

- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [Force Touch events](/en-US/docs/Web/API/Force_Touch_events)
- {{event("webkitmouseforcewillbegin")}}
- {{event("webkitmouseforcedown")}}
- {{event("webkitmouseforcechanged")}}
- {{domxref("Force_Touch_events")}}
