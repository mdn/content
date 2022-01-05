---
title: BatteryManager.dischargingTime
slug: Web/API/BatteryManager/dischargingTime
tags:
  - API
  - Battery API
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.BatteryManager.dischargingTime
---
{{deprecated_header}}{{APIRef("Battery API")}}

Indicates the amount of time, in seconds, that remains until the battery is fully
discharged.

> **Note:** Even if the time returned is precise to the second, browsers round them to a higher
> interval (typically to the closest 15 minutes) for privacy reasons.

## Syntax

```js
var time = battery.dischargingTime
```

On return, `time` is the remaining time in seconds until the
`battery`, which is a {{domxref("BatteryManager")}} object, is fully
discharged and the system will suspend. This value is
[`Infinity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)
if the battery is currently charging rather than discharging, or if the system is unable
to report the remaining discharging time.

## Example

### HTML Content

```html
<div id="dischargingTime">(discharging time unknown)</div>
```

### JavaScript Content

```js
navigator.getBattery().then(function(battery) {

    var time = battery.dischargingTime;

    document.querySelector('#dischargingTime').textContent = battery.dischargingTime;
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
