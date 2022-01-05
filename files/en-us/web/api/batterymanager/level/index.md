---
title: BatteryManager.level
slug: Web/API/BatteryManager/level
tags:
  - API
  - Battery API
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.BatteryManager.level
---
{{deprecated_header}}{{APIRef("Battery API")}}

Indicates the current battery charge level as a value between `0.0` and
`1.0`.

## Syntax

```js
var level = battery.level
```

On return, `level` is a number representing the system's battery charge
level scaled to a value between 0.0 and 1.0. A value of 0 means the
`battery`, which is a {{domxref("BatteryManager")}} object, is empty
and the system is about to be suspended. A value of 1.0 means the battery is full. A
value of 1.0 is also returned if the implementation isn't able to determine the battery
charge level or if the system is not battery-powered.

## Example

### HTML Content

```html
<div id="level">(battery level unknown)</div>
```

### JavaScript Content

```js
navigator.getBattery().then(function(battery) {

    var level = battery.level;

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
