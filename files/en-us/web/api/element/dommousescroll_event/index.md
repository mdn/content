---
title: 'Element: DOMMouseScroll event'
slug: Web/API/Element/DOMMouseScroll_event
tags:
  - API
  - DOM
  - DOMMouseScroll
  - Deprecated
  - Element
  - Event
  - Input
  - Non-standard
  - Reference
  - mouse
  - scrolling
browser-compat: api.Element.DOMMouseScroll_event
---
{{APIRef}}

{{Deprecated_Header}}

{{ Non-standard_header() }}

The DOM `DOMMouseScroll` event is fired asynchronously when mouse wheel or similar device is operated and the accumulated scroll amount is over 1 line or 1 page since last event. It's represented by the {{ domxref("MouseScrollEvent") }} interface. This event was only implemented by Firefox. You should instead use the standard {{domxref("Element.wheel_event", "wheel")}} event.

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
        {{domxref("MouseScrollEvent")}} {{deprecated_inline}}
      </td>
    </tr>
  </tbody>
</table>

If you want to prevent the default action of mouse wheel events, it's not enough to handle only this event on Gecko because If scroll amount by a native mouse wheel event is less than 1 line (or less than 1 page when the system setting is by page scroll), other mouse wheel events may be fired without this event.

On Gecko 17 (Firefox 17) or later, you need to call `preventDefault()` of `wheel` events which must be fired for every native event.

Use the standardized {{event("wheel")}} event if available.

## Properties

The event has only one additional property beyond standard events.

### detail

The `detail` property describes the scroll more precisely, with positive values indicating scrolling downward and negative values indicating scrolling upward.

If the event represents scrolling up by a page, the value of `detail` is -32768. If the event indicates scrolling down by a page, the value is +32768. Any other value represents the number of lines to scroll, with the direction indicated by the value's sign.

> **Note:** Trusted events are never sent with a value of 0 for `detail`.

Trusted events are never fired with 0.

> **Note:** If the platform's native mouse wheel events only provide scroll distance by pixels, or if the speed can be customized by the user, the value is computed using the line height of the nearest scrollable ancestor element of the event's target. If that element's font size is smaller than {{pref("mousewheel.min_line_scroll_amount")}}, that preference's value is used as the line height.

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("MouseScrollEvent") }}
- Gecko's legacy pixel scroll event: `MozMousePixelScroll`
- Non-Gecko browsers' legacy mouse wheel event: `mousewheel`
- Standardized wheel event: `wheel`
