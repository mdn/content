---
title: BatteryManager.chargingTime
slug: Web/API/BatteryManager/chargingTime
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

## Example

### HTML Content

```html
<div id="chargingTime">(charging time unknown)</div>
```

### JavaScript Content

```js
navigator.getBattery().then(battery => {
   const time = battery.chargingTime;

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
