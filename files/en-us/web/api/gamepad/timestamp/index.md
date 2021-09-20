---
title: Gamepad.timestamp
slug: Web/API/Gamepad/timestamp
tags:
  - API
  - Gamepad API
  - Games
  - NeedsBetterSpecLink
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.Gamepad.timestamp
---
{{APIRef("Gamepad API")}}

The **`Gamepad.timestamp`** property of the
{{domxref("Gamepad")}} interface returns a {{domxref("DOMHighResTimeStamp")}}
representing the last time the data for this gamepad was updated.

The idea behind this is to allow developers to determine if the `axes` and
`button` data have been updated from the hardware. The value must be
relative to the `navigationStart` attribute of the
`{{domxref("PerformanceTiming")}}` interface. Values are monotonically
increasing, meaning that they can be compared to determine the ordering of updates, as
newer values will always be greater than or equal to older values.

> **Note:** This property is not currently supported anywhere.

## Syntax

```js
const timestamp = gamepad.timestamp;
```

## Example

```js
var gp = navigator.getGamepads()[0];
console.log(gp.timestamp);
```

## Value

A {{domxref("DOMHighResTimeStamp")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
