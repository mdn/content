---
title: BatteryManager.chargingTime
slug: Web/API/BatteryManager/chargingTime
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
browser-compat: api.BatteryManager.chargingTime
---
{{APIRef("Battery API")}}

The **`BatteryManager.chargingTime`** property indicates the amount of time, in seconds, that remain until the battery is fully charged or `0` if the battery is already fully charged. If the battery is currently
discharging, its value is
[`Infinity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity). When its value changes, the [`chargingtimechange`](/en-US/docs/Web/API/BatteryManager/chargingtimechange_event) event is fired.

> **Note:** Even if the time returned is precise to the second,
> browsers round them to a higher interval
> (typically to the closest 15 minutes) for privacy reasons.

## Value

A number.

## Examples

### HTML Content

```html
<div id="chargingTime">(charging time unknown)</div>
```

### JavaScript Content

```js
navigator.getBattery().then((battery) => {
   const time = battery.chargingTime;

   document.querySelector('#chargingTime').textContent = `Time to fully charge the battery: ${time}s`;
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
