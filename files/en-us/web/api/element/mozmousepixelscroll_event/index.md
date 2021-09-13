---
title: 'Element: MozMousePixelScroll event'
slug: Web/API/Element/MozMousePixelScroll_event
tags:
  - API
  - DOM
  - Event
  - Firefox
  - Mouse Wheel
  - MozMousePixelScroll
  - Mozilla
  - Non-standard
  - Reference
  - mouse
  - wheel
  - Deprecated
browser-compat: api.Element.MozMousePixelScroll_event
---
{{APIRef}}{{deprecated_header}}{{ Non-standard_header() }}

The Firefox-only, _non-standard_, and _obsolete_ **`MozMousePixelScroll`** event is fired at an {{domxref("Element")}} asynchronously when a mouse wheel or similar device is operated. It's represented by the {{ domxref("MouseScrollEvent") }} interface.

> **Note:** Do not use this non-standard and obsolete event. Instead, you should always use the standard {{domxref("Element.wheel_event", "wheel")}} event.

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
        {{domxref("MouseScrollEvent")}} {{Deprecated_inline}}
      </td>
    </tr>
  </tbody>
</table>

## Getting the distance scrolled

The event's {{domxref("UIEvent/detail", "detail")}} property indicates the scroll distance in terms of lines, with negative values indicating the scrolling movement is either toward the bottom or toward the right, and positive values indicating scrolling to the top or left.

If the platform's native mouse wheel events indicate the scroll distance in terms of lines or pages, the value of `detail` is computed using that value and the line height or page width/height of the nearest ancestor scrollable element that contains the target element.

> **Note:** On macOS, the scroll distance (and therefore the value of `detail`) is computed based on the accelerated scroll distance.

The value of `detail` is never 0 if the events are legitimate.

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("MouseScrollEvent") }}
- Gecko's legacy line or page scroll event: `DOMMouseScroll`
- Non-Gecko browsers' legacy mouse wheel event: `mousewheel`
- Standardized wheel event: `wheel`
