---
title: 'Element: webkitmouseforcedown event'
slug: Web/API/Element/webkitmouseforcedown_event
tags:
  - Element
  - Event
  - Force Touch
  - MouseEvent
  - NeedsCompatTable
  - NeedsExample
  - Reference
  - Safari
  - Trackpad
  - UI
  - Web
  - WebKit
  - apple
  - mouse
  - touch
  - webkitmouseforcedown
browser-compat: api.Element.webkitmouseforcedown_event
---
{{APIRef}}{{Non-standard_header()}}

After a {{domxref("Element.mousedown_event", "mousedown")}} event has been fired at the element, if and when sufficient pressure has been applied to the mouse or trackpad button to qualify as a "force click," Safari begins sending **`webkitmouseforcedown`** events to the element.

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

**`webkitmouseforcedown`** is a proprietary, WebKit-specific event. It is part of the [Force Touch events](/en-US/docs/Web/API/Force_Touch_events) feature.

## Specifications

_Not part of any specification._ Apple has [a description at the Mac Developer Library](https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).

## Browser compatibility

{{Compat}}

## See also

- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [Force Touch events](/en-US/docs/Web/API/Force_Touch_events)
- {{event("webkitmouseforcewillbegin")}}
- {{event("webkitmouseforceup")}}
- {{event("webkitmouseforcechanged")}}
- {{domxref("Force_Touch_events")}}
