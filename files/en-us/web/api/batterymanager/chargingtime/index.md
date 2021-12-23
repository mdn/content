---
title: BatteryManager.chargingTime
slug: Web/API/BatteryManager/chargingTime
tags:
  - API
  - Battery API
  - Property
  - Reference
browser-compat: api.BatteryManager.chargingTime
---
{{deprecated_header}}

{{APIRef("Battery API")}}

Indicates the amount of time, in seconds, that remain until the battery is fully
charged.

> **Note:** Even if the time returned is precise to the second, browsers round them to a higher
> interval (typically to the closest 15 minutes) for privacy reasons.

## Syntax

```js
var time = battery.chargingTime
```

On return, `time` is the remaining time in seconds until the
`battery`, which is a {{domxref("BatteryManager")}} object, is fully
charged, or 0 if the battery is already fully charged. If the battery is currently
discharging, this value is
[`Infinity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity).

## Example

### HTML Content

```html
<div id="chargingTime">(charging time unknown)</div>
```

### JavaScript Content

```js
navigator.getBattery().then(function(battery) {

   var time = battery.chargingTime;

   document.querySelector('#chargingTime').textContent = battery.chargingTime;
});
```

{{ EmbedLiveSample('Example', '100%', 30) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
