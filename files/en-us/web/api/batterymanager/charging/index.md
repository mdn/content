---
title: "BatteryManager: charging property"
short-title: charging
slug: Web/API/BatteryManager/charging
page-type: web-api-instance-property
browser-compat: api.BatteryManager.charging
---

{{ApiRef("Battery API")}}{{securecontext_header}}

The **`charging`** read-only property of the {{domxref("BatteryManager")}} interface is a Boolean value indicating whether or not the device's battery is currently being charged. When its value changes, the {{domxref("BatteryManager/chargingchange_event", "chargingchange")}} event is fired.

If the battery is charging or the user agent is unable to report the battery status information, this value is `true`. Otherwise, it is `false`.

## Value

A boolean.

## Examples

### HTML

```html
<div id="charging">(charging state unknown)</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  const charging = battery.charging;

  document.querySelector("#charging").textContent = charging;
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
