---
title: "BatteryManager: dischargingTime property"
short-title: dischargingTime
slug: Web/API/BatteryManager/dischargingTime
page-type: web-api-instance-property
browser-compat: api.BatteryManager.dischargingTime
---

{{APIRef("Battery API")}}

The **`BatteryManager.dischargingTime`** property indicates the amount of time, in seconds, that remains until the battery is fully
discharged,
or [`Infinity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)
if the battery is currently charging rather than discharging,
or if the system is unable to report the remaining discharging time.
When its value changes, the [`dischargingtimechange`](/en-US/docs/Web/API/BatteryManager/dischargingtimechange_event) event is fired.

> **Note:** Even if the time returned is precise to the second, browsers round them to a higher
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

  document.querySelector(
    "#dischargingTime",
  ).textContent = `Remaining time to fully discharge the battery: ${time}`;
});
```

{{ EmbedLiveSample('Examples', '100%', 30) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
