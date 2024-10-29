---
title: "BatteryManager: dischargingTime property"
short-title: dischargingTime
slug: Web/API/BatteryManager/dischargingTime
page-type: web-api-instance-property
browser-compat: api.BatteryManager.dischargingTime
---

{{ApiRef("Battery API")}}{{securecontext_header}}

The **`dischargingTime`** read-only property of the {{domxref("BatteryManager")}} interface indicates the amount of time, in seconds, that remains until the battery is fully discharged,
or {{jsxref("Infinity")}} if the battery is currently charging rather than discharging or the user agent is unable to report the battery status information.
When its value changes, the {{domxref("BatteryManager/dischargingtimechange_event", "dischargingtimechange")}} event is fired.

> [!NOTE]
> Even if the time returned is precise to the second, browsers round them to a higher
> interval (typically to the closest 15 minutes) for privacy reasons.

## Value

A number.

## Examples

### HTML

```html
<div id="dischargingTime">(discharging time unknown)</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  const time = battery.dischargingTime;

  document.querySelector("#dischargingTime").textContent =
    `Remaining time to fully discharge the battery: ${time}s`;
});
```

{{ EmbedLiveSample('Examples', '100%', 30) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery()")}}
