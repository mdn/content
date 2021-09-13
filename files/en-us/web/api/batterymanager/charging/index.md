---
title: BatteryManager.charging
slug: Web/API/BatteryManager/charging
tags:
  - API
  - Battery API
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.BatteryManager.charging
---
{{deprecated_header}}{{APIRef("Battery API")}}

A Boolean value indicating whether or not the device's battery is currently being
charged.

## Syntax

```js
var charging = battery.charging
```

On return, `charging` indicates whether or not the
`battery`, which is a {{domxref("BatteryManager")}} object, is
currently being charged; if the battery is charging, this value is `true`.
Otherwise, the value is `false`.

## Example

### HTML Content

```html
<div id="charging">(charging state unknown)</div>
```

### JavaScript Content

```js
navigator.getBattery().then(function(battery) {

    var charging = battery.charging;

    document.querySelector('#charging').textContent = charging ;
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
