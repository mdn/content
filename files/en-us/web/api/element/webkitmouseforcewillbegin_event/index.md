---
title: 'Element: webkitmouseforcewillbegin event'
slug: Web/API/Element/webkitmouseforcewillbegin_event
tags:
  - API
  - Element
  - Event
  - Force Touch
  - Input
  - MouseEvent
  - NeedsExample
  - Non-standard
  - Reference
  - UI
  - Web
  - WebKit
  - apple
  - macOS
  - webkitmouseforcewillbegin
browser-compat: api.Element.webkitmouseforcewillbegin_event
---
{{APIRef}}{{Non-standard_header()}}

Safari for macOS fires the non-standard **`webkitmouseforcewillbegin`** event at an {{domxref("Element")}} before firing the initial {{event("mousedown")}} event.

This offers the opportunity to tell the system not to trigger any default Force Touch actions if and when the click turns into a [Force Touch event](/en-US/docs/Web/API/Force_Touch_events).

To instruct macOS not to engage any default Force Touch actions if the user apply enough pressure to activate a Force Touch event, call {{domxref("Event.preventDefault", "preventDefault()")}} on the `webkitmouseforcewillbegin` event object.

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

**`webkitmouseforcewillbegin`** is a proprietary, WebKit-specific event. It is part of the [Force Touch events](/en-US/docs/Web/API/Force_Touch_events) feature.

## Specifications

_Not part of any specification._ Apple has [a description at the Mac Developer Library](https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).

## Browser compatibility

{{Compat}}

## See also

- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [Force Touch events](/en-US/docs/Web/API/Force_Touch_events)
- {{event("webkitmouseforcedown")}}
- {{event("webkitmouseforceup")}}
- {{event("webkitmouseforcechanged")}}
- {{domxref("Force_Touch_events")}}
