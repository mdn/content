---
title: "BatteryManager: chargingTime property"
short-title: chargingTime
slug: Web/API/BatteryManager/chargingTime
page-type: web-api-instance-property
browser-compat: api.BatteryManager.chargingTime
---

{{ApiRef("Battery API")}}{{securecontext_header}}

The **`chargingTime`** read-only property of the {{domxref("BatteryManager")}} interface indicates the amount of time, in seconds, that remain until the battery is fully charged, or `0` if the battery is already fully charged or the user agent is unable to report the battery status information.
If the battery is currently discharging, its value is {{jsxref("Infinity")}}.
When its value changes, the {{domxref("BatteryManager/chargingtimechange_event", "chargingtimechange")}} event is fired.

> [!NOTE]
> Even if the time returned is precise to the second,
> browsers round them to a higher interval
> (typically to the closest 15 minutes) for privacy reasons.

## Value

A number.

## Examples

### HTML

```html
<div id="chargingTime">(charging time unknown)</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  const time = battery.chargingTime;

  document.querySelector("#chargingTime").textContent =
    `Time to fully charge the battery: ${time}s`;
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
