---
title: MouseWheelEvent
slug: Web/API/MouseWheelEvent
tags:
  - API
  - DOM
  - Deprecated
  - Interface
  - Reference
browser-compat: api.MouseWheelEvent
---
{{APIRef("DOM Events")}}{{ Non-standard_header() }}{{deprecated_header}}

The **`MouseWheelEvent`** interface represents events that occur due to the user turning a mouse wheel.

> **Warning:** Do not use this interface for wheel events.
>
> Like {{domxref("MouseScrollEvent")}}, this interface is non-standard and deprecated. It was used in non-Gecko browsers only. Instead use the standard _{{domxref("WheelEvent")}}._

## Properties

<table class="no-markdown">
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>wheelDelta</code> {{ReadOnlyInline}}</td>
      <td><code>long</code></td>
      <td>
        The distance in pixels (defined as so by MSDN, but the actual usage is
        different, see <code>mousewheel</code>).
      </td>
    </tr>
    <tr>
      <td><code>wheelDeltaX</code> {{ReadOnlyInline}}</td>
      <td><code>long</code>?</td>
      <td>The value along horizontal axis of <code>wheelDelta</code>.</td>
    </tr>
    <tr>
      <td><code>wheelDeltaY</code> {{ReadOnlyInline}}</td>
      <td><code>long</code>?</td>
      <td>The value along vertical axis of <code>wheelDelta</code>.</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

- An event type which is used by this event object: `mousewheel`
- A standardized mouse wheel event object: {{ domxref("WheelEvent") }}
- Gecko's legacy mouse wheel event object: {{ domxref("MouseScrollEvent") }}
- The document in MSDN: {{ spec("https://msdn.microsoft.com/en-us/library/ie/ff974345%28v=vs.85%29.aspx","MouseWheelEvent object") }}
