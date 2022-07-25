---
title: BatteryManager.charging
slug: Web/API/BatteryManager/charging
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
browser-compat: api.BatteryManager.charging
---
{{APIRef("Battery API")}}

The **`BatteryManager.charging`** property is a Boolean value indicating whether or not the device's battery is currently being charged. When its value changes, the [`chargingchange`](/en-US/docs/Web/API/BatteryManager/chargingchange_event) event is fired.

If the battery is charging, this value is `true`. Otherwise, it is `false`.

## Value

A boolean.

## Examples

### HTML Content

```html
<div id="charging">(charging state unknown)</div>
```

### JavaScript Content

```js
navigator.getBattery().then((battery) => {
    const charging = battery.charging;

    document.querySelector('#charging').textContent = charging ;
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
