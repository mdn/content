---
title: BatteryManager.onlevelchange
slug: Web/API/BatteryManager/onlevelchange
tags:
  - API
  - Battery API
  - Event Handler
  - Property
  - Reference
browser-compat: api.BatteryManager.onlevelchange
---
{{deprecated_header}} {{APIRef("Battery API")}}

The **`BatteryManager.onlevelchange`** property specifies an
event listener to receive {{event("levelchange")}} events. These events occur when the
battery {{domxref("BatteryManager.level","level")}} is updated.

## Syntax

```js
navigator.battery.onlevelchange = funcRef
```

Where `battery` is a {{domxref("BatteryManager")}} object, and
`funcRef` is a function to be called when the {{event("levelchange")}} event
occurs.

## Example

### HTML

```html
<div id="level">(battery level unknown)</div>
<div id="stateBattery">(charging state unknown)</div>
```

### JavaScript

```js
navigator.getBattery().then(function(battery) {
  battery.onlevelchange = function(){
    document.querySelector('#level').textContent = battery.level;

    if(battery.charging) {
      document.querySelector('#stateBattery').textContent =
          "Charging time: " + (battery.chargingTime / 60);
    }
    else {
      document.querySelector('#stateBattery').textContent =
          "Discharging time: " + (battery.dischargingTime / 60);
    }
  };
});
```

{{ EmbedLiveSample('Example', '100%', 40) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}
