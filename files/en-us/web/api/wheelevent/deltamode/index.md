---
title: WheelEvent.deltaMode
slug: Web/API/WheelEvent/deltaMode
tags:
  - API
  - DOM
  - Property
  - Read-only
  - Reference
  - WheelEvent
browser-compat: api.WheelEvent.deltaMode
---
{{APIRef("DOM Events")}}

The **`WheelEvent.deltaMode`** read-only property returns an
`unsigned long` representing the unit of the delta values scroll amount.
Permitted values are:

| Constant          | Value  | Description                               |
| ----------------- | ------ | ----------------------------------------- |
| `DOM_DELTA_PIXEL` | `0x00` | The delta values are specified in pixels. |
| `DOM_DELTA_LINE`  | `0x01` | The delta values are specified in lines.  |
| `DOM_DELTA_PAGE`  | `0x02` | The delta values are specified in pages.  |

## Syntax

```js
var unit = event.deltaMode;
```

## Example

```js
var syntheticEvent = new WheelEvent("syntheticWheel", {"deltaX": 4, "deltaMode": 0});

console.log(syntheticEvent.deltaMode);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ event("wheel") }}
- {{domxref("WheelEvent")}}
