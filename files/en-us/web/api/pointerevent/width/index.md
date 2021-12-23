---
title: PointerEvent.width
slug: Web/API/PointerEvent/width
tags:
  - API
  - DOM
  - Interface
  - PointerEvent
  - Property
  - Reference
browser-compat: api.PointerEvent.width
---
{{ APIRef("Pointer Events") }}

The **`width`** read-only property of the
{{domxref("PointerEvent")}} interface represents the width of the pointer's contact
geometry along the x-axis, measured in CSS pixels. Depending on the source of the
pointer device (such as a finger), for a given pointer, each event may produce a
different value.

If the input hardware cannot report the contact geometry to the browser, the width
defaults to `1`.

## Syntax

```js
var contactWidth = pointerEvent.width;
```

### Return value

- `contactWidth`
  - : The width of the event's contact area (in CSS pixels).

## Example

This example illustrates using the {{domxref("PointerEvent")}} interface's
{{domxref("PointerEvent.width","width")}} and
{{domxref("PointerEvent.height","height")}} properties to calculate the contact area.

```js
target.addEventListener("pointerdown", function(ev) {
   // Calculate the contact area
   var area = ev.width * ev.height;
 }, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
