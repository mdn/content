---
title: 'Element: mousewheel event'
slug: Web/API/Element/mousewheel_event
tags:
  - DOM
  - Deprecated
  - Event
  - Interface
  - Non-standard
  - UI
  - mouse
  - mousewheel
  - scrolling
  - wheel
browser-compat: api.Element.mousewheel_event
---
{{APIRef}}{{deprecated_header}}{{ Non-standard_header() }}

The _obsolete_ and _non-standard_ **`mousewheel`** event is fired asynchronously at an {{domxref("Element")}} to provide updates while a mouse wheel or similar device is operated. The `mousewheel` event was never part of any standard, and while it was implemented by several browsers, it was never implemented by Firefox.

> **Note:** Instead of this obsolete event, use the standard {{domxref("Element.wheel_event", "wheel")}} event.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>
        {{domxref("WheelEvent")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onmousewheel", "onmousewheel")}}
      </td>
    </tr>
  </tbody>
</table>

## The detail property

The value of the {{domxref("UIEvent/detail", "detail")}} property is always zero, except in Opera, which uses `detail` similarly to the Firefox-only {{domxref("Element.DOMMouseScroll_event", "DOMMouseScroll")}} event's `detail` value, which indicates the scroll distance in terms of lines, with negative values indicating the scrolling movement is either toward the bottom or toward the right, and positive values indicating scrolling to the top or left.

> **Note:** On macOS, the scroll distance (and therefore the value of `detail`) is computed based on the accelerated scroll distance.

On Linux, `2` or `-2` is set per native wheel event.

## wheelDelta, wheelDeltaX and wheelDeltaY value

The `wheelDelta` attribute value is an abstract value which indicates how far the wheel turned. If the wheel has rotated away from the user, it's positive, otherwise negative. This means that the delta value sign is different from DOM Level 3 Event's `wheel`. However, the meaning of the amount of these values is not the same between browsers. See following explanation for the detail.

IE and Opera (Presto) only support `wheelDelta` attribute and do _not_ support horizontal scroll.

The `wheelDeltaX` attribute value indicates the `wheelDelta` attribute value along the horizontal axis. When a user operates the device for scrolling to right, the value is negative. Otherwise, i.e., if it's to left, the value is positive.

The `wheelDeltaY` attribute value indicates the `wheelDelta` attribute value along the vertical axis. The sign of the value is the same as the `wheelDelta` attribute value.

### Internet Explorer

The value is the same as the delta value of Windows' `WM_MOUSEWHEEL` or `WM_MOUSEHWHEEL`. It means that if the mouse wheel doesn't support high resolution scroll, the value is 120 per notch. The value isn't changed even if the scroll amount of system settings is page scroll.

### Chrome

On Windows, the value is the same as the delta value of `WM_MOUSEWHEEL` or `WM_MOUSEHWHEEL`. And also, the value isn't changed even if the scroll amount of system settings is page scroll, i.e., the value is the same as IE on Windows.

On Linux, the value is `120` or `-120` per native wheel event. This makes the same behavior as IE and Chrome for Windows.

On Mac, the value is complicated. The value is changed if the **device** that causes the native wheel event supports continuous scroll.

If the device supports continuous scroll (e.g., trackpad of MacBook or mouse wheel which can be turned smoothly), the value is computed from accelerated scroll amount. In this case, the value is the same as Safari.

If the device does **not** support continuous scroll (typically, old mouse wheel which cannot be turned smoothly), the value is computed from non-accelerated scroll amount (120 per notch). In this case, the value is different from Safari.

This difference makes a serious issue for web application developers. That is, web developers cannot know if `mousewheel` event is caused by which device.

See `WebInputEventFactory::mouseWheelEvent` of the [Chromium's source code](http://mxr.mozilla.org/chromium/source/src/third_party/WebKit/Source/web/WebInputEventFactoryMac.mm) for the detail.

### Safari

The value is always computed from accelerated scroll amount. This is really different from other browsers except Chrome with continuous scroll supported device.

### Opera (Presto)

The value is always the `detail` attribute value ✕ `40`.

On Windows, since the `detail` attribute value is computed from actual scroll amount, the value is different from other browsers except the scroll amount per notch is 3 lines in system settings or a page.

On Linux, the value is `80` or `-80` per native wheel event. This is different from other browsers.

On Mac, the `detail` attribute value is computed from accelerated scroll amount of native event. The value is usually much bigger than Safari's or Chrome's value.

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- Gecko's legacy mouse wheel events: `DOMMouseScroll`, `MozMousePixelScroll`
- Standardized wheel event: `wheel`
