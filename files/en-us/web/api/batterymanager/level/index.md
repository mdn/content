---
title: BatteryManager.level
slug: Web/API/BatteryManager/level
tags:
  - API
  - Property
  - Reference
browser-compat: api.BatteryManager.level
---
{{APIRef("Battery API")}}

The **`BatteryManager.level`** property indicates the current battery charge level as a value between `0.0` and `1.0`.
A value of `0.0` means the battery is empty and the system is about to be suspended.
A value of `1.0` means the battery is full.
A value of `1.0` is also returned if the implementation isn't able to determine the battery charge level
or if the system is not battery-powered.
When its value changes, the [`levelchange`](/en-US/docs/Web/API/BatteryManager/levelchange_event) event is fired.

## Value

A number.

## Examples

### HTML Content

```html
<div id="level">(battery level unknown)</div>
```

### JavaScript Content

```js
navigator.getBattery().then(battery => {
    const level = battery.level;

    document.querySelector('#level').textContent = level;
});
```

{{ EmbedLiveSample('Example', '100%', 30, '', 'Web/API/BatteryManager/level') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
